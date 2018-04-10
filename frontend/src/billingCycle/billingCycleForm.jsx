import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {reduxForm, Field} from 'redux-form';
import labelAndInput from '../common/form/labelAndInput';

import {init} from './billingCycleActions';


class BillingCycleForm extends Component{

    render(){
        const {handleSubmit, readOnly} = this.props;
        return(
            <form  onSubmit={handleSubmit} >
                <div className="box-body">
                    <Field name='name' component={labelAndInput} readOnly={readOnly}
                    label='Nome' cols='12 4' placeholder='Informe o nome' type='text' />
                    <Field name='month' component={labelAndInput} readOnly={readOnly}
                    label='Mês' cols='12 4' placeholder='Informe o mês' type='text' />
                    <Field name='year' component={labelAndInput} readOnly={readOnly}
                    label='Ano' cols='12 4' placeholder='Informe o ano' type='text' />
                </div>

                <div className="box-footer">
                    <button type='submit' className="btn btn-primary">Submit</button>
                    <button type='button' className="btn btn-default" onClick={this.props.init} >Cancelar</button>
                </div>
            </form>
        );
    }
}

BillingCycleForm = reduxForm({form: 'billingCycleForm', destroyOnUnmount: false})(BillingCycleForm);
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch);
export default connect(null, mapDispatchToProps)(BillingCycleForm);