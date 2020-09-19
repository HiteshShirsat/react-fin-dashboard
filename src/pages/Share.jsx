import React from 'react';
class Share extends React.Component
{
	render()
	{
		let {data}=this.props
			return <div className="share">
					<div className='share-item'>
						<i className="fa fa-bars"></i>
					</div>
					<div className='share-item'>
						<small>{data.script}</small>
						<br/>
						<big>${data.price}</big>
					</div>
					<div className='share-item'>
						<font color="lime">iShares</font>
							<br/>
						<small>By BlackDoc</small>
							<br/>
						<font color="#ebc543">S&P 500 index</font>
					</div>
					
			</div>
	}
}
export default Share;