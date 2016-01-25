Template.chart.helpers({
	   incompleteCount: function () {
	     var count = Todos.find({checked: {$ne: true}}).count();
	     Session.set("incompleteTasks", parseInt(count));
	     return count;
	   },
	 
	   completeCount: function () {
	     var count = Todos.find({checked: {$ne: false}}).count();
	     Session.set("completeTasks", parseInt(count));
	     return count;
	   },
       jan: function () {
        var fetchResult = Todos.find({bulan: "January"}).count();
        Session.set("janTodo");
        return fetchResult;
       },
       feb: function () {
        var fetchResult = Todos.find({bulan: "February"}).count();
        return fetchResult;
       },
       mar: function () {
        var fetchResult = Todos.find({bulan: "March"}).count();
        return fetchResult;
       },
       apr: function () {
        var fetchResult = Todos.find({bulan: "April"}).count();
        return fetchResult;
       },
       may: function () {
        var fetchResult = Todos.find({bulan: "May"}).count();
        return fetchResult;
       },
       jun: function () {
        var fetchResult = Todos.find({bulan: "June"}).count();
        return fetchResult;
       },
       jul: function () {
        var fetchResult = Todos.find({bulan: "July"}).count();
        return fetchResult;
       },
       aug: function () {
        var fetchResult = Todos.find({bulan: "August"}).count();
        return fetchResult;
       },  
       sep: function () {
        var fetchResult = Todos.find({bulan: "September"}).count();
        return fetchResult;
       },
       oct: function () {
        var fetchResult = Todos.find({bulan: "October"}).count();
        return fetchResult;
       },
       nov: function () {
        var fetchResult = Todos.find({bulan: "November"}).count();
        return fetchResult;
       },
       dec: function () {
        var fetchResult = Todos.find({bulan: "December"}).count();
        return fetchResult;
       }
});
/*
 * Function to draw the column chart
 */
function builtColumn() {
    var series;
    series = [{
        name: "Belajar Meteor",
        data: function() {
            var fetchResult = Todos.find({bulan: "January"}).count();
            return fetchResult;
        }
    }]

    $('#container-column').highcharts({
        
        chart: {
            type: 'column'
        },
        
        title: {
            text: 'Monthly Average Todos'
        },
        
        subtitle: {
            text: 'Source: pomodoro.advertisa.id'
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
                text: 'Jumlah Todos'
            }
        },
        
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        
        series: series
    });
}

/*
 * Call the function to built the chart when the template is rendered
 */
Template.chart.rendered = function() {    
    builtColumn();
}

Template.chart.events({
	'click .render-chart': function() {
		document.location.reload(true);
	}
});