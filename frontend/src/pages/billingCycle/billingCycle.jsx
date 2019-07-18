import React, { Component } from 'react';

import ContentHeader from '../../common/template/contentHeader'
import Content from '../../common/template/content'


class BillingCycle extends Component {
  render() {
    return (
        <div>
            <ContentHeader tittle="Ciclos de pagamentos" small="Cadastro" />
            <Content>
                Ciclos de pagamentos
            </Content>
        </div>
    )
  }
}

export default BillingCycle