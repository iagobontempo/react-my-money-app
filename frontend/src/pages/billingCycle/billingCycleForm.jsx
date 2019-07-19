import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form'
import labelAndInput from '../../common/form/labelAndInput'

class BillingCycleForm extends Component {
  render() {

    //handleSubmit já existe em redux-form , só é possivel usa-lo pois foi decorado na ultima linha
    const { handleSubmit } = this.props
    return (
      <form role="form" onSubmit={handleSubmit}>
        <div className="box-body">
          <Field name="name" component={labelAndInput} 
            label="Nome" cols="12 4" placeholder="informe o nome"/>
          <Field name="month" component={labelAndInput} type="number" 
            label="Mês" cols="12 4" placeholder="Informe o mês"/>
          <Field name="year" component={labelAndInput} type="number"
            label="Ano" cols="12 4" placeholder="Informe o ano" />
        </div>
        <div className="box-footer">
          <button type='submit' className="btn btn-primary">Submit</button>
        </div>
      </form>
    )
  }
}

// conectando o redux form e criando um id para o formulario em "{form: 'billingCycleForm'}"
export default reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false})(BillingCycleForm)