import React from 'react';
import * as f2 from '../store/actions';
import {connect} from 'react-redux';
import Listitem from './Listitem';
class Table extends React.Component
{
	render()
	{
		return <div className="table">
			{this.props.list.map(item=><Listitem key={item.id} data={item} />)}
		</div>
	}
}
export default connect(state=>state,f2)(Table);