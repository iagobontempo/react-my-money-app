import axios from 'axios'
import { toastr } from 'react-redux-toastr' //Importou para pegar os metodos que ele já possui (ex: success)
import { reset as resetForm } from 'redux-form'
import { selectTab, showTabs } from '../../common/tab/tabActions'
import billingCycleForm from './billingCycleForm';

const BASE_URL = 'http://localhost:3003/api'

export function getList() {
    const request = axios.get(`${BASE_URL}/billingCycles`)
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

export function create(values) {
    return dispatch => {
        axios.post(`${BASE_URL}/billingCycles`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação realizada com sucesso.')
                dispatch([ // Só é possivel chamar 4 ações por conta do MULTI
                    resetForm('billingCycleForm'),
                    getList(),
                    selectTab('tabList'),
                    showTabs('tabList', 'tabCreate')
                ])
            })
            .catch(e => {
                e.response.data.errors.forEach(error => toastr.error('Erro', error))
            })

    }
}