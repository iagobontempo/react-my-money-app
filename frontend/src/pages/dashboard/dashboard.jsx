import React, { Component } from 'react'

import ContentHeader from '../../common/template/contentHeader'
import Content from '../../common/template/content'
import ValueBox from '../../common/widget/valueBox'
import Row from '../../common/layout/row' // USADO APENAS PARA ALINHAR OS ValueBox certinhos

class Dashboard extends Component {
    render() {
        return (
            <div>
                <ContentHeader tittle="Dashboard" small="Versao 1.0" />
                <Content>
                    <Row>
                    <ValueBox cols="12 4" color="green" icon="bank" value="R$ 10,00" text="Total de creditos" />
                    <ValueBox cols="12 4" color="red" icon="credit-card" value="R$ 10,00" text="Total de débitos" />
                    <ValueBox cols="12 4" color="blue" icon="money" value="R$ 0,00" text="Valor consolidado" />
                    </Row>
                </Content>
            </div>
        )
    }
}

export default Dashboard