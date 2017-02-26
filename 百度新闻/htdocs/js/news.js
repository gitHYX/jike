$(document).ready(function() {
    var deviceWidth = $('body').width();
    $('nav li').each(function(index, item) {
        if ($(this).find('a').html().split('').length > 2) {
            $(this).width(deviceWidth / 3);
        } else {
            $(this).width(deviceWidth / 6);
        }
    });

    //第一次默认是精选
    refreshNews('精选');

    //点击切换标签更换新闻
    $('nav a').click(function(e){
    	// e.preventDefalut();
    	var type = $(this).text();
    	refreshNews(type);
    });
});

//根据导航类型切换
function refreshNews(type) {
    var $lists = $('article ul');
    $lists.empty();
    $.ajax({
        'url': '../server/getnews.php',
        'type': 'get',
        'datatype': 'json',
        data: { newstype: type },
        success: function(data) {
            // console.log(data);
            data.forEach(function(item,index,array) {
                var $list = $('<li></li>').addClass('news-list').prependTo($lists);
                var $newsImg = $('<div></div>').addClass('newsimg').appendTo($list);
                var $img = $('<img>').attr('src', item.newsimg).appendTo($newsImg);
                var $newsContent = $('<div></div>').addClass('newscontent').appendTo($list);
                var $h1 = $('<h1></h1>').html(item.newstitle).appendTo($newsContent);
                var $p = $('<p></p>').appendTo($newsContent);
                var $newsTime = $('<span></span>').addClass('newstime').html(item.newstime).appendTo($p);
                var $newsSrc = $('<span></span>').addClass('newssrc').html(item.newssrc).appendTo($p);

            });
        }
    });
}
