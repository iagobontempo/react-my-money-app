import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Dashboard from '../pages/dashboard/dashboard'
import BillingCycle from '../pages/billingCycle/billingCycle'

export default props => (
    <Router history={hashHistory}>
        <Route path="/" component={Dashboard} />
        <Route path="/billingCycles" component={BillingCycle} />
        <Redirect from='*' to='/' />
    </Router>
)