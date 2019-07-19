import React, { Component } from 'react';
import { reduxForm, Field, formValueSelector } from 'redux-form'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { init } from './billingCycleActions'
import labelAndInput from '../../common/form/labelAndInput'
import ItemList from './itemList'

class BillingCycleForm extends Component {
  render() {

    //handleSubmit já existe em redux-form , só é possivel usa-lo pois foi decorado na ultima linha
    const { handleSubmit, readOnly, credits, debts } = this.props
    return (
      <form role="form" onSubmit={handleSubmit}>
        <div className="box-body">
          <Field name="name" component={labelAndInput} readOnly={readOnly} 
            label="Nome" cols="12 4" placeholder="Informe o nome"/>
          <Field name="month" component={labelAndInput} type="number" readOnly={readOnly} 
            label="Mês" cols="12 4" placeholder="Informe o mês"/>
          <Field name="year" component={labelAndInput} type="number" readOnly={readOnly} 
            label="Ano" cols="12 4" placeholder="Informe o ano" />
          <ItemList cols="12 6" list={credits} readOnly={readOnly}
            field="credits" legend="Créditos" />
          <ItemList cols="12 6" list={debts} readOnly={readOnly}
            field="debts" legend="Débitos" showStatus={true} />
        </div>
        <div className="box-footer">
          <button type='submit' className={`btn btn-${this.props.submitClass}`}>
            {this.props.submitLabel}
          </button>
          <button type='button' className="btn btn-defalt"
            onClick={this.props.init}>Cancelar</button>
        </div>
      </form>
    )
  }
}

// conectando o redux form e criando um id para o formulario em "{form: 'billingCycleForm'}"
BillingCycleForm = reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false})(BillingCycleForm)
const selector = formValueSelector('billingCycleForm')

const mapStateToProps = state => ({
  credits: selector(state, 'credits'), //onde pega a parte referente a credits no backend
  debts: selector(state, 'debts')
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({init}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)