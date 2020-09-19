const intial={
	list:[],
	loading:false,
	status:false,
	menu:false,
	single:{script:""}
}
const reducer=function(state=intial,action){
	switch(action.type)
	{	
		case "start":
			return {
				...state,
				loading:true
			}

		case "failed":
			return {
				...state,
				status:false,
				error:action.payload,
				loading:false
			}
			
		case "success":
			return {
				...state,
				status:true,
				list:action.payload,
				loading:false
			}
		case "tt":
			return {
				...state,
				menu:!state.menu
			}
			
		case "setSingle":
			return {
				...state,
				single:state.list.some(x=>x.script===action.payload)?state.list.find(x=>x.script===action.payload):{script:""}
			}
			
			
			
		default:
			return state
	}
}
export default reducer;