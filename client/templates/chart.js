var chart;

function buildAge(data) {

   chart = $('#container-column').highcharts({
        
        chart: {
            type: 'column'
        },
        
        title: {
            text: 'Charts Pomodoro'
        },
        
        subtitle: {
            text: ''
        },
        
        credits: {
            enabled: false
        },
        
        xAxis: {
            categories: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec'
            ]
        },
        
        yAxis: {
            min: 0,
            title: {
                text: ''
            }
        },
        
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        
        plotOptions: {
            column: {
                pointPadding: 0,
                borderWidth: 0,
                showInLegend: false
            }
        },
        
        series: [{
            name: 'No. of Patients',
            data: data

        }]
    });
}

Template.chart.onRendered(function() {  
     Tracker.autorun(function () {
    var data = Todos.find().fetch();
    
    // if there is no data, abort!
    if(!data) return;
    
    // counting by age
    data = _.pluck(data, 'bulan');
    data = _.countBy(data, function(bulan) {
      if(bulan === "Jan"){
        return "Jan"
      } else if (bulan === "Feb") {
        return "Feb"
      } else if (bulan === "Mar") {
        return "Mar"
      } else if (bulan === "Apr") {
        return "Apr"
      } else if (bulan === "May") {
        return "May"
      } else if (bulan === "Jun") {
        return "Jun"
      } else if (bulan === "Jul") {
        return "Jul"
      } else if (bulan === "Aug") {
        return "Aug"
      } else if (bulan === "Sep") {
        return "Sep"
      } else if (bulan === "Oct") {
        return "Oct"
      } else if (bulan === "Nov") {
        return "Nov"
      } else if (bulan === "Dec") {
        return "Dec"
      } else
        return
    });
    data = _.defaults(data, {Jan: "Jan", Feb: "Feb", Mar: "Mar", Apr: "Apr", May: "May", Jun: "Jun", Jul: "Jul", Aug: "Aug", Sep: "Sep", Oct: "Oct", Nov: "Nov", Dec: "Dec"});
    data = _.toArray(data);
    
    // if there is no chart, built it
    if(!chart) {
      buildAge(data); 
      return;
    }
    
    // Otherwise, simply update the data
    chart.highcharts().series[0].update({
        data: data
    });
  });
 });

Template.chart.events({
	'click .render-chart': function() {
		document.location.reload(true);
	}
});