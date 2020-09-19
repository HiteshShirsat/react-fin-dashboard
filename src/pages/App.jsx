import React from 'react';
import * as f2 from '../store/actions';
import {connect} from 'react-redux';
import Loading from './Loading';
import Dashboard from './Dashboard';
import Errorpage from './Errorpage';
class App extends React.Component
{
	componentDidMount()
	{
		this.props.loadData()
	}
	render()
	{

		return (
					<>
						<Loading />
						<Dashboard />
						<Errorpage />
					</>
			)

	}
}
export default connect(state=>state,f2)(App);