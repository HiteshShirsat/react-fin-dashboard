import React from 'react';
class Market extends React.Component
{
	render()
	{
		let {data}=this.props
		let x=data.percent*100
		x=Math.round(x)

		return <div className="market">
					<table>
						<thead>
							<tr>
								<th align="left">Market Value</th>
								<th align="right"> <i className="fa fa-caret-right"></i> {data.amt}</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td align="left"><small>% of portfolio Value</small></td>
								<td align="right"> <i className="fa fa-caret-right"></i> {x}%</td>
							</tr>
						</tbody>
					</table>
					<div className="progress">
						<div class="f">
							{x?<div style={{width:x+"%"}} class="b"></div>:null}
						</div>

					</div>
				</div>
	}
}
export default Market;