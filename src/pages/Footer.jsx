import React from 'react';
import * as f2 from '../store/actions';
import {connect} from 'react-redux';
class Footer extends React.Component
{
	render()
	{
		return <div className="footer">created by hitesh shirsat @2020</div>
	}
}
export default connect(state=>state,f2)(Footer);