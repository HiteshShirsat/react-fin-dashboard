import React from 'react';
import * as f2 from '../store/actions';
import {connect} from 'react-redux';
class Info extends React.Component
{
	render()
	{
		let {single}=this.props
		return single.script&&<div className="info">
		             <div><i className="fa fa-4x fa-user" aria-hidden="true"></i></div>
					<h3>Price: {single.price}</h3>
					<h3>Quantity: {single.quantity}</h3>
					<h3>Amount: {single.amt}</h3>
			   </div>
	}
}
export default connect(state=>state,f2)(Info);