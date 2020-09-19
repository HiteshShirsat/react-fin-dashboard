import React from 'react';
import Share from './Share';
import Stats from './Stats';
import Market from './Market';
import Benefits from './Benefits';
import Btns from './Btns';
class Listitem extends React.Component
{
	render()
	{
		let {data}=this.props
		return <div className="list">
					<Share data={data} />
					<Stats data={data} />
					<Market data={data} />
					<Benefits data={data} />
					<Btns data={data} />
					
			  </div>
	}
}
export default Listitem;