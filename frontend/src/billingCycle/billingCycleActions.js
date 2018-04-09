import axios from 'axios';
import {toastr} from 'react-redux-toastr';
import {initialize} from 'redux-form';
import {showTabs, selectTab} from '../common/tab/tabActions';
const BASE_URL = 'http://localhost:3003/api';
const INITIAL_VELUES = {};

export function getList() {
    const request = axios.get(`${BASE_URL}/billingCycles`);
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }

}

export function create(values){
    return submit(values, 'POST', 'Dados inseridos com sucesso.');
}

export function update(values){
    return submit(values, 'PUT', 'Dados atualizados com sucesso no sistema.');
}

function submit(values, method, msg){
    return dispatch => {
        const id = values._id ? values._id : '';
        axios[method](`${BASE_URL}/billingCycles/${id}`,values)
        .then(resp => {
            toastr.success('Sucesso', msg);
            dispatch(init());
        })
        .catch(e =>{
            e.reponse.data.errors.forEach(error => toastr.error('Erro', error));
        });
    }
}

export function init(){
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('billingCycleForm', INITIAL_VELUES)
    ]
}


export function showUpdate(billingCycle){
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('billingCycleForm', billingCycle)
    ]
}

export function showDelete(billingCycle){
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('billingCycleForm', billingCycle)
    ]
}