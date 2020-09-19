import React from 'react';
import	Header from './Header';
import	Sidebar from './Sidebar';
import	Table from './Table';
import	Dropdown from './Dropdown';
class Dashboard extends React.Component
{
	render()
	{
		return (
					<div className="dashboard">
						<Header />
						<div className="main">
							<Table />
							<Sidebar />
						</div>
						<Dropdown/>
					</div>
			)

	}
}
export default Dashboard;
