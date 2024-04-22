const { Personality, Person, Account } = require('../models/index')
const renderDate = require('../helpers/renderDate')

class Controller{
    static async renderHome(req, res){
        try {
            let people = await Person.findAll({
                // attributes: ['id', 'name'],
                // include : {
                //     model: Personality
                // },
                // include: Personality,
                // include: [Personality],
                include: [
                    {
                        model: Personality
                    },
                    {
                        model: Account,
                        // attributes: ['id', 'email', 'PeopleId']  // include
                        attributes: {
                            exclude: ['password']
                        },
                        // required: true  // jadi data account gak boleh kosong
                    }
                ],
                order : [
                    [Account, 'email', 'ASC'],
                    ['address', 'ASC'],
                ]
            })
            // res.send(people)
            res.render('home', { people, renderDate })
        } catch (error) {
            console.log(error);
            res.send(error)
        }
    }

    static async renderAdd(req, res){
        try {
            let errors = []
            if (req.query.error) {
                errors = req.query.error.split(',')
            }

            let personalities = await Personality.findAll({
                order : [
                    ['id', 'ASC']
                ]
            })

            res.render('add', { personalities, errors })
        } catch (error) {
            console.log(error);
            res.send(error)
        }
    }

    static async handleAdd(req, res){
        try {
            const { name, address, gender, firstCrush, PersonalityId } = req.body
            console.log(gender, '<<< gender')
            const person = await Person.create({
                name,
                gender,
                address,
                firstCrush,
                PersonalityId
            })

            const username = name.split(' ').join('').toLowerCase()

            await Account.create({
                email: username + '@hacktiv8.com',
                password: 'password',
                PeopleId: person.id
            })

            res.redirect('/')
        } catch (error) {
            // console.log(error);
            if (error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError') {
                const errorMessages = error.errors.map(err => err.message)
                // res.send(errorMessages)
                res.redirect(`/add?error=${errorMessages}`)
                return
            } 
            res.send(error)        
        }
    }

    static async handleDelete(req, res){
        try {
            const { id } = req.params

            await Person.destroy({
                where : {
                    id
                }
            })

            res.redirect('/')
        } catch (error) {
            console.log(error);
            res.send(error)
        }
    }
}

module.exports = Controller