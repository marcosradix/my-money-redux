import {combineReducers} from 'redux';
import DashboardReducer from '../dashboard/dashboardReducer';
import TabReducer from '../common/tab/tabReducer';
import BillingCycleReducer from '../billingCycle/billingCycleReducer';
import {reducer as formReducer} from 'redux-form';
import {reducer as toastReducer} from 'react-redux-toastr';

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer,
    billingCycle: BillingCycleReducer,
    form: formReducer,
    toastr: toastReducer
});

export default rootReducer;