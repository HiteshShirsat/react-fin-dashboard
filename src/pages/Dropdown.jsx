import React from 'react';
import * as f2 from '../store/actions';
import {connect} from 'react-redux';
class Dropdown extends React.Component
{
	render()
	{
		let {menu}=this.props
		return <div className={menu?"dropdown active":"dropdown"}>
				<span>select category1</span>
				<span>select category2</span>
				<span>select category3</span>
				<span>select category4</span>
				<span>select category5</span>
		</div>
	}
}
export default connect(state=>state,f2)(Dropdown);