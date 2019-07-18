import { combineReducers } from 'redux'

import DashboardReducer from '../pages/dashboard/dashboardReducer'
import TabReducer from '../common/tab/tabReducer'

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer
})

export default rootReducer