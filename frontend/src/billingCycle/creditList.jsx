import React, {Component} from 'react';
import {Field, } from 'redux-form';
import Grid from '../common/layout/grid';
import Input from '../common/form/input';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class CreditList extends Component{

add(index, item = {}){
    if(!this.props.readOnly){
        console.log(index);
    }
}

    renderRows(){
        const list =  this.props.list || [];
        return list.map((item, index) =>(
            <tr key={index} >
                <td><Field name={`credits[${index}].name`} component={Input}
                placeholder='Informe o nome' readOnly={this.props.readOnly} /></td>
                <td><Field name={`credits[${index}].value`} component={Input} 
                 placeholder='Informe valor' readOnly={this.props.readOnly} /></td>
                <td>
                    <button type='button' className='btn btn-success' onClick={() => this.add(index + 1)} >
                        <i className='fa fa-plus' ></i>
                    </button>
                </td>
            </tr>
        ));
    
        
    }
     render(){
        return(
            <Grid cols={this.props.cols} >
                <fieldset >
                <legend>Créditos</legend>
                    <table className='table' >
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Valor</th>
                                <th className='table-actions' >Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderRows()}
                        </tbody>
                    </table>
                </fieldset>

            </Grid>
        );

     }

}

export default CreditList;