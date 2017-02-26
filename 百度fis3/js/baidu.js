var recompage = true; //当前默认在推荐tab
var navpage = false;
$(document).ready(function() {
    /*更多产品按钮*/
    $('header nav .moreDiv').mouseenter(function() {
        $(this).addClass('moreDivHoverty');
        $(this).children('.more').css('background-color', '#f9f9f9');
        $(this).children().css('display', 'block');

    }).mouseleave(function() {
        $(this).removeClass('moreDivHoverty');
        $(this).children().css('display', 'none');
        $(this).children('.more').css({
            'display': 'block',
            'background-color': '#3388ff'
        });
    });

    /*标签部分切换*/
    $('.tabContent .ulTop li').each(function(index) {
        $(this).mouseenter(function() {
            $(this).addClass('tabhover');
        }).mouseleave(function() {
            $(this).removeClass('tabhover');
        });
        $(this).click(function() {
            recompage = false;
            navpage = false;
            if (index == 1) {
                recompage = true;
            } else if (index == 2) {
                navpage = true;
            }
            $('.tabContent .ulTop li').removeClass('tabselected');
            $(this).addClass('tabselected');
            $('.tabContent div.tab').each(function() {
                $(this).css('display', 'none');
            });
            $('.tabContent div.tab').eq(index).css('display', 'block');
        });
    });

    /*导航部分标签鼠标划过*/
    $('.tabContent .tabNav .tabDiv').each(function(index) {
        $(this).mouseenter(function() {
            $(this).addClass('tabDivSelected');
        }).mouseleave(function() {
            $(this).removeClass('tabDivSelected');
        });
    });

    /*下滑加载更多*/
    document.body.onmousewheel = function(event) {
        console.log(recompage + '====' + navpage);
        if (scrollside1() && recompage) {
            var box = $('<div>').addClass('recomInfo').insertBefore($('.recomLeft .empDiv'));
            $("<img>").attr("src", "./img/u=1112065027,4200144221&fm=80&w=179&h=119&img.JPEG").appendTo(box);
            var infoDte = $("<div>").addClass("infoDet").appendTo(box);
            $("<a href='#'>周杰伦买他账，导演见到端茶递水，娱乐圈他横着走</a>").appendTo(infoDte);
            $("<span>新华网 01-09 00:38</span>").appendTo(infoDte);
        }
        if (scrollside2() && navpage) {
            for (var i = 0; i < 6; i++) {
                var box2 = $('<div>').addClass('tabDiv').insertBefore($('.tabNav .empDiv'));
                $("<i></i><span>京东商城</span>").appendTo(box2);
            }
        }
    };

    //百度搜索框变化
    var inputOffset = $('.content input.baiduInput').get(0).offsetTop;
    $(window).scroll(function() {
        var mouseScrollHeight = $(window).scrollTop();
        if (mouseScrollHeight > inputOffset) {
            $('.content').addClass('contentFixed');
        } else {
            $('.content').removeClass('contentFixed');
        }

        //如果出现滚动，回到顶部按钮就显示出来
        if (mouseScrollHeight > 0) {
            $('.goback').css('display', 'block');
        } else {
            $('.goback').css('display', 'none');
        }

    });

    //回到顶部
    $('.goback').click(function() {
        $('body').animate({ scrollTop: '0px' }, 800);
    });
});


function scrollside1() {
    var loadMore = false;
    /*推荐部分判断是否加载更多*/
    var box = $('.recomInfo');
    var lastboxHeight = box.last().get(0).offsetTop + Math.floor(box.last().height() / 2);
    var windowHeight = $(window).height();
    var scrollHeight = $(window).scrollTop();
    return (lastboxHeight < scrollHeight + windowHeight) ? true : false;
}

function scrollside2() {
    /*导航网页标签判断是否加载更多*/
    var box1 = $('.tabDiv');
    var lastboxHeight1 = box1.last().get(0).offsetTop + Math.floor(box1.last().height() / 2);
    var windowHeight1 = $(window).height();
    var scrollHeight1 = $(window).scrollTop();
    return (lastboxHeight1 < scrollHeight1 + windowHeight1) ? true : false;
}
