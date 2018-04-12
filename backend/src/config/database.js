const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const url = process.env.MONGOLAB_URI ? process.env.MONGOLAB_URI : 'mongodb://localhost/mymoney';
module.exports = mongoose.connect(url);
mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório"
mongoose.Error.messages.Number.min = "O valor '{VALUE}' informado é menor que o limite de {MIN}"
mongoose.Error.messages.Number.max = "O valor '{VALUE}' informado é maior que o limite máximo de  {MAX}"
mongoose.Error.messages.String.enum = "O '{VALUE}' informado não é válido para o atributo {PATH}"