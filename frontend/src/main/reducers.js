import { combineReducers } from 'redux'

import DashboardReducer from '../pages/dashboard/dashboardReducer'

const rootReducer = combineReducers({
    dashboard: DashboardReducer
})

export default rootReducer