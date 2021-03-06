$(function(){
    graph_data = {};

    $(document).on('voteSent', updateProfileScore);
    //initialize rating on top div.
    $('#raty').raty({
        half : true,
        precision : true,
        readOnly : true,
        halfShow : true,
        number : 3,
        noRatedMsg : "",
        size : 32,
        path : '/public/img',
        space : false,
        starHalf : 'bomb-half.png',
        starOff : 'bomb-off.png',
        starOn : 'bomb-on.png',
        score : function() {
            var score_map = {
                "0": 0,
                "33": .5,
                "75": 1,
                "140": 1.5,
                "200": 2,
                "333": 2.5,
                "400": 3,
            }

            var scores = [0, 33, 75, 140 , 200 , 333 , 400];

            var raty_score = 3;
            var user_score = parseFloat($(this).attr('data-rating'));
            for (var i =0; i<scores.length; i++){
                if (scores[i] > user_score){
                    raty_score = score_map[scores[i-1]]
                    break;
                }
            }

            return raty_score; // normalize rating to scale
        },
    });

    $('.tab').click(tabListener);
    $('#trend_tab').trigger('click'); // vs class by default
    $(document).trigger('profileVisit', user_data);

    if (user_data.username == user_data.current_user){
            $(document).trigger('myProfileVisit', user_data);
    }
}); 

//quickly change the ui -- must use diff to handle if user already voted
function updateProfileScore (e, d) {
    var $score = $('#raty-container .score_holder');
    var new_score = parseInt($score.text()) + d.diff;
    $score.html(new_score);
}


//Default event listener clears active tabs,
//Places active class on tab that was clicked,
//Calls respective graphing function.
function tabListener(){
    clearActiveTabs();
    
    $(this).attr('class', 'active');//set tab to active
    var id = $(this).attr('id');
    
    $('#chart_container').empty(); //clear old graph
    
    if (id == 'trend_tab') {
        $('#stats').hide();
        getTrendData();
    } else {
        $('#stats').show();
        var tab = id.slice(0, id.length - 4),
        filter = user_data.class_year;
        getVsData(filter, tab);
    }

    $(document).trigger('profileTab', {id:id})
}

//clear classes on tabs
function clearActiveTabs() {
    var tabs = ['#vs_class_tab', '#vs_floor_tab', '#trend_tab'];
    $.each(tabs, function(index, tab){
        $(tab).attr('class', '');
    });
}


function vsDataObject(vs_data, tab){
    this.data_points = vs_data.data_points;
    this.std = vs_data.std;
    this.mean = vs_data.mean;
    this.grade = vs_data.grade;
    this.tab = tab;
}   

function trendDataObject(trend_data) {
    this.floor_trend = trend_data.floor_trend;
    this.class_trend = trend_data.class_trend;
    this.user_trend = trend_data.user_trend;
}   

//calls api for vs_data
//renders new graph and puts
//mean and std of data on page
function getVsData(filter, tab) {
    username = user_data.username,
    url = '/commprod/api/profile_data?type=vs_data&username=' + username;
    if (tab == 'vs_class') {
        url += '&filter=' + filter;
    }

    if (graph_data[url]) {
        return renderVsData(graph_data[url])
    }
    $.get(url, function(vs_data){
         graph_data[url] = new vsDataObject(vs_data, tab);
         renderVsData(graph_data[url])
    })
}

function getTrendData() {
    var username = user_data.username,
    url = '/commprod/api/profile_data?type=trend&username=' + username;
    if (graph_data[url]) {
        return renderTrendData(graph_data[url])
    }
    $.get(url, function(trend_data){
        graph_data[url] = new trendDataObject(trend_data)
        renderTrendData(graph_data[url]);
    })
}

//render data from cache
function renderVsData(vsData) {
    renderVsGraph(vsData.data_points, vsData.tab);
    $('#std').text(vsData.std.toFixed(2));
    $('#mean').text(vsData.mean.toFixed(2));
    $('#grade').text(vsData.grade);
}

function renderTrendData(trendData) {
    renderTrendGraph(trendData.floor_trend, trendData.class_trend, trendData.user_trend);
}

//create new graph for vs_data
function renderVsGraph(data_points, tab) {
    var title = $('#' + tab).text(),
    class_year = user_data.class_year,
    username = user_data.username,
    score = user_data.score,

    vs_chart = new Highcharts.Chart({
        chart : {
            renderTo: 'chart_container',
            type: 'column'
        },
        colors : ['#fe7227', "#3d96ae"],
        title : {
            text: title
        },
        yAxis : {
            title : {
                text : "Number of users",
            },
        },
        xAxis : {
            type : 'linear',
            title : {
                text : "Avg User Score",
            },
        },
        tooltip: {
            formatter: function() {
                return ''+
                    this.series.name + ': ' + this.y;
            }
        },

        credits : {
            enabled: false,
        },

        series : [{
            name : class_year,
            data: data_points,
        },
        {
            name : username,
            data : [[score, 1]]
        },],
        exporting : {
            enabled : false,
        }
    });
    return vs_chart
}

function renderTrendGraph(floor_trend, class_trend, user_trend){
    var username = user_data.username,
    class_year = user_data.class_year,
    trend_chart = new Highcharts.Chart({
        chart: {
            renderTo: 'chart_container',
            zoomType: 'x',
            spacingRight: 20
        },
        colors : ["#000", "#fe7227", "#3d96ae"],
        title: {
            text: 'User Rating Trends'
        },
        subtitle: {
            text: document.ontouchstart === undefined ?
                'Click and drag in the plot area to zoom in' :
                'Drag your finger over the plot to zoom in'
        },
        xAxis: {
            type: 'datetime',
            maxZoom: 60*1000, // one minute
            title: {
                text: null
            },
        },
        yAxis: {
            title: {
                text: 'User Score'
            },
            startOnTick: false,
            showFirstLabel: false,
        },
        tooltip: {
            shared: true,
        },
        exporting : {
            enabled : false,
        },
        credits : {
            enabled: false,
        },

        series: [
        {
            type: 'line',
            name: 'The Floor\'s Trend',
            data: floor_trend
        },
        {
            type: 'line',
            name: class_year + '\'s Trend',
            data: class_trend
        },
        {
            type: 'line',
            name: username + '\'s Trend',
            data: user_trend
        },
        ]
    });
}

  