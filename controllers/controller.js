const { Personality, Person } = require('../models/index')

class Controller{
    static async renderHome(req, res){
        try {
            let people = await Person.findAll({
                include : Personality,
                order : [
                    ['name', 'ASC'],
                ]
            })
            res.render('home', { people })
        } catch (error) {
            console.log(error);
            res.send(error)
        }
    }

    static async renderAdd(req, res){
        try {
            let personalities = await Personality.findAll({
                order : [
                    ['id', 'ASC']
                ]
            })

            res.render('add', { personalities })
        } catch (error) {
            console.log(error);
            res.send(error)
        }
    }

    static async handleAdd(req, res){
        try {
            const { name, address, gender, firstCrush, PersonalityId } = req.body

            await Person.create({
                name,
                gender,
                address,
                firstCrush,
                PersonalityId
            })

            res.redirect('/')
        } catch (error) {
            console.log(error);
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