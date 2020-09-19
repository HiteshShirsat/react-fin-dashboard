import React from 'react';
import * as f2 from '../store/actions';
import {connect} from 'react-redux';
class Errorpage extends React.Component
{
	render()
	{
		let {error}=this.props
		if(error)
		{
			return (<div className="error"> {error} </div> )
		}
		else
		{
			return null
		}

	}
}
export default connect(state=>state,f2)(Errorpage);