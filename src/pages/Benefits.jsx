import React from 'react';
class Benefits extends React.Component
{
	render()
	{
		let {data}=this.props
		let icon1=<i style={{color:"lime"}} className="fa fa-caret-up"></i>
		let icon2=<i style={{color:"tomato"}} className="fa fa-caret-down"></i>
		let width=data.return +"%"
		let x=data.return*100
		x=Math.round(x)

		let first=<div class="f1">
						<div class="b1"></div>
						<div style={{width:x+"%"}} class="b2"></div>
					</div>
			let second=<div class="f2">
						<div class="b1"></div>
						<div className="b2">
							{x<0&&<div className="red" style={{width:width}}></div>}
							{x>0&&<div className="green" style={{width:width}}></div>}
						</div>	
						<div class="b3"></div>
					</div>		

		let progress = x===0?null:null
		 progress=x<0?second:first

		return <div className="market">

					<table>
						<thead>
							<tr>
								<th align="left">Unrealized P/L <i className="fa fa-caret-right"></i></th>
								<th align="right"> {data.pl}</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td align="left"><small>% return </small><i className="fa fa-caret-right"></i> </td>
								<td align="right">
									{data.return<0?(icon2):(icon1)}
									{x}%
								</td>
							</tr>
						</tbody>
					</table>
					<div className="progress">
						{progress}
					</div>
				</div>
	}
}
export default Benefits;