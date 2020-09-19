import React from 'react';
class Stats extends React.Component
{
	render()
	{
		let {data}=this.props
		return 	<div className="stats">
				<table>
					<tbody>
						<tr>
							<td align="left">
								<i className="fa fa-database"></i>
							</td>
							<td align="left">Quantity</td>
							<td align="right"> <i className="fa fa-caret-right"></i> {data.quantity}</td>
						</tr>
						<tr>
							<td align="left">
								<i className="fa fa-at"></i>
							</td>
							<td align="left">Avg.Cost</td>
							<td align="right"> <i className="fa fa-caret-right"></i> {data.avg}</td>
						</tr>
						<tr>
							<td align="left">
								<i className="fa fa-money"></i>
							</td>
							<td align="left">Investment</td>
							<td align="right"> <i className="fa fa-caret-right"></i> ${data.amt}</td>
						</tr>
					</tbody>
				</table>
		</div>
	}
}
export default Stats;