import React from 'react';
import * as f2 from '../store/actions';
import {connect} from 'react-redux';
class Header extends React.Component
{
	tt()
	{
		this.props.tt()
	}
	setSingle(e)
	{
		this.props.setSingle(e.target.value)
	}
	render()
	{
		let {list}=this.props
		return <>
		<div className="header">
				<div className="logoname">
					<span className="head-title">Financial Statistics</span>
				</div>
				<div>
					<div className="search">
						<i className="fa fa-search"></i>
						<input onChange={this.setSingle.bind(this)} list="mylist" placeholder="select"/>
					</div>	
				</div>
				<div className="profile">
					<i onClick={this.tt.bind(this)} className="fa fa-2x fa-bars"></i>
				</div>
		</div>
		<datalist id="mylist">
			{list.map(x=>
				<option>{x.script}</option>
			)}
		</datalist>
		</>

	}
}
export default connect(state=>state,f2)(Header);