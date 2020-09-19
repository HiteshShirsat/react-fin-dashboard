import React from 'react';
import * as f2 from '../store/actions';
import {connect} from 'react-redux';
class Loading extends React.Component
{
	render()
	{
		let {loading}=this.props
		if(loading)
		{
			return <div className="loading"> </div> 
		}
		else
		{
			return null
		}

	}
}
export default connect(state=>state,f2)(Loading);