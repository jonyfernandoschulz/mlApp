const Ml = require('./ml')

Ml.methods(['get', 'post', 'put', 'delete'])
Ml.updateOptions({new: true, runValidators: true})

module.exports = Ml