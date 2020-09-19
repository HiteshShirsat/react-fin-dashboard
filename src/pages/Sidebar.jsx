import React from 'react';
import * as f2 from '../store/actions';
import {connect} from 'react-redux';
import Chart1 from './Chart1';
import Info from './Info';
class Sidebar extends React.Component
{
	render()
	{
		return <div className="sidebar"><Info /><Chart1  /></div>
	}
}
export default connect(state=>state,f2)(Sidebar);