function renderDate (value) {
  const date = new Date(value)
  const dateStr = date.toISOString().split('T')[0]
  const result = dateStr.split('-').reverse().join('-')

  return result
}

// renderDate('2024-04-22 02:13:10.091 +0700')

module.exports = renderDate