import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {reduxForm, Field, formValueSelector} from 'redux-form';
import LabelAndInput from '../common/form/labelAndInput';
import ItemList from './itemList';
import {init} from './billingCycleActions';
import Summary from './summary';

class BillingCycleForm extends Component{

    calculateSummary(){
        const sum = (totalizador, valorAtual) => totalizador + valorAtual;
        return {
            somaDeCreditos: this.props.credits.map(valorCredito => +valorCredito.value || 0).reduce(sum),
            somaDeDeditos: this.props.credits.map(valorDedito => +valorDedito.value || 0).reduce(sum)
        }
    }

    render(){
        const {handleSubmit, readOnly, credits , debits} = this.props;
        const {somaDeCreditos, somaDeDebitos} = this.calculateSummary();
        return(
            <form  onSubmit={handleSubmit} >
                <div className="box-body">
                    <Field name='name' component={LabelAndInput} readOnly={readOnly}
                    label='Nome' cols='12 4' placeholder='Informe o nome' type='text' />
                    <Field name='month' component={LabelAndInput} readOnly={readOnly}
                    label='Mês' cols='12 4' placeholder='Informe o mês' type='text' />
                    <Field name='year' component={LabelAndInput} readOnly={readOnly}
                    label='Ano' cols='12 4' placeholder='Informe o ano' type='text' />

                        <Summary credit={somaDeCreditos} debit={somaDeDebitos} />

                    <ItemList cols='12 6' list={credits} readOnly={readOnly}  fiel='credits' legend='Créditos' />
                    <ItemList cols='12 6' list={debits} readOnly={readOnly}  fiel='debits' legend='Débitos' showStatus={true} />
                </div>

                <div className="box-footer">
                    <button type='submit' className={`btn btn-${this.props.submitClass}`} >
                         {this.props.submitLabel}
                    </button>
                    <button type='button' className="btn btn-default" onClick={this.props.init} >Cancelar</button>
                </div>
            </form>
        );
    }
}

BillingCycleForm = reduxForm({form: 'billingCycleForm', destroyOnUnmount: false})(BillingCycleForm);
const selector = formValueSelector('billingCycleForm');
const mapStateToProps = state => ({credits: selector(state, 'credits'), debits: selector(state, 'debits')});
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm);