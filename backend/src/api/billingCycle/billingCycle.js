const restful = require('node-restful');
const mongoose = restful.mongoose;

const credtSchema = new mongoose.Schema({
    name: {type: String, required: true},
    value: {type: Number, min: 0, required: true}
});

const debtSchema = new mongoose.Schema({
    name: {type: String, required: true},
    value: {type: Number, min: 0 , required: [true, 'Informe um valor para o debito!']},
    status: {type: String, required: false, uppercase: true,
    enum: ['PAGO', 'PENDENTE', 'AGENDADO']}
});

const billingCycleSchema = new mongoose.Schema({
    name: {type: String, required: true},
    month: {type: Number, min:1, max: 12, required: true},
    year: {type: Number, min: 1970, max: 2100, required: true},
    credits: [credtSchema],
    debt: [debtSchema]
});

module.exports = restful.model('BillingCycle', billingCycleSchema);