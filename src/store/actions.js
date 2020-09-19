import axios from 'axios';

export function loadData(ob)
{
	return dispatch=>{
		dispatch({type:"start"})
		axios.get("https://xampp44.000webhostapp.com/index.php")
		
		.then(res=>{
			dispatch({type:"success",payload:res.data})
			 console.log(res.data)
		})
		.catch(e=>{
			dispatch({type:"failed",payload:e.message})
		})
	}
}

export function tt()
{
	return dispatch=>dispatch({type:"tt"})
}
export function setSingle(e)
{
	return dispatch=>dispatch({type:"setSingle",payload:e})
}
