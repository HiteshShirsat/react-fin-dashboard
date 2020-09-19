import axios from 'axios';
import React,{Component} from 'react';
var CanvasJS = require('./canvasjs.min');
CanvasJS = CanvasJS.Chart ? CanvasJS : window.CanvasJS;

class Chart1 extends Component {
		
	componentDidMount()
	{
		axios.get("https://xampp44.000webhostapp.com/index.php")
		.then(res=>res.data)
		.then(d=>this.abc(d.map(x=>{return {x:x.price,y:x.amt}})))
	}
	abc(data)
	{

		// var totalVisitors = 883000;
		var visitorsData = {
			"data": [{
				cursor: "pointer",
				explodeOnClick: false,
				innerRadius: "75%",
				legendMarkerType: "square",
				name: "Portfolio",
				radius: "100%",
				showInLegend: true,
				startAngle: 90,
				type: "doughnut",
				dataPoints: [
					{ y: 519960, name: "ETF", color: "#E7823A" },
					{ y: 363040, name: "Mutual Funds", color: "#546BC1" }
				]
			}],
		};

		var newVSReturningVisitorsOptions = {
			animationEnabled: true,
			backgroundColor:"#2b062a",
			title: {
				fontColor:"yellow",
				text: "Portfolio"
			},
			subtitles: [{
				// text: "Click on Any Segment to Drilldown",
				backgroundColor: "white",
				fontSize: 16,
				fontColor: "white",
				padding: 5
			}],
			legend: {
				fontFamily: "verdana",
				fontSize: 14,
				fontColor:"yellow",
				itemTextFormatter: function (e) {
					return e.dataPoint.name  
				}
			},
			data: data
		};


		var chart = new CanvasJS.Chart("chartContainer", newVSReturningVisitorsOptions);
		chart.options.data = visitorsData["data"];
		chart.render();


		
	}
	render() {	
		return (
			<div >
				<div id="chartContainer" style={{width:"100%",marginTop:"10%"}}>
					<i className="fa fa-spin fa-cog fa-5x"></i>
				</div>
			</div>
		);
	}
	
	
}
 
export default Chart1;