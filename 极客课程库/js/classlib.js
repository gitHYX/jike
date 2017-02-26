var blockMode = true; //列表显示模式
$(document).ready(function() {
    /*搜索按键*/
    $('header nav .rightNav .searchDiv').click(function() {
        $('header nav .rightNav .userLoginDiv').fadeOut(1000);
        $('header nav .rightNav .appDiv').fadeOut(1000);
        $('header nav .rightNav .searchDiv').fadeOut(1000);
        $('header nav .choose').fadeOut(1000);

        $('header nav .rightNav .hideSear').fadeIn(1000);
        $('header nav .rightNav input').fadeIn(1000);
        $('header nav .rightNav .hidea').fadeIn(1000);
        $('header nav .rightNav .hideClo').fadeIn(1000);
        $('header nav .rightNav').animate({
            'width': '850px'
        }, 1000);
    });
    /*关闭搜索*/
    $('header nav .rightNav .hideClo').click(function() {
        $('header nav .choose').fadeIn(1000);
        $('header nav .rightNav .userLoginDiv').fadeIn(1000);
        $('header nav .rightNav .appDiv').fadeIn(1000);
        $('header nav .rightNav .searchDiv').fadeIn(1000);


        $('header nav .rightNav .hideSear').fadeOut(1000);
        $('header nav .rightNav input').fadeOut(1000);
        $('header nav .rightNav .hidea').fadeOut(1000);
        $('header nav .rightNav .hideClo').fadeOut(1000);
        $('header nav .rightNav').animate({
            'width': '200px'
        }, 1000);
    });

    /*左侧课程库*/
    $('#detaillib li').each(function(index) {
        $(this).on('mouseenter', function() {
            $(this).css({
                'border-left': 'none',
                'border-right': 'none'
            });
            $(this).children().css({
                'color': 'green',
                'margin-left': '20px'
            });
            $('.libDetail1').eq(parseInt(index % 2)).addClass('libDetail1ShowStyle');
        }).on('mouseleave', function() {
            $(this).css({
                'border-left': '1px solid #35b558',
                'border-right': '1px solid #35b558'
            });
            $(this).children().css({
                'color': '#666',
                'margin-left': '30px'
            });
            $('.libDetail1').eq(parseInt(index % 2)).removeClass('libDetail1ShowStyle');
        });
    });

    $('.libDetail1').each(function(index) {
        $(this).on('mouseenter', function() {
            $(this).css('display', 'block');
        }).on('mouseleave', function() {
            $(this).css('display', 'none');
        });
    });

    /*职业路径 只是体系 系列课程 课程标签*/
    $('#hidelib li').each(function(index) {
        $(this).on('mouseenter', function() {
            $(this).children('a').css('color', '#35b558');
            $(this).children('span').css('display', 'block');
        }).on('mouseleave', function() {
            $(this).children('a').css('color', '#666');
            $(this).children('span').css('display', 'none');
        });
    });

    /*右侧导航栏部分*/
    $('#contentBar dt').each(function(index) {
        $(this).on('mouseenter', function() {
            $(this).parent().css('border', '1px solid #eee');
            $(this).parent().children('dd').css('display', 'block');
        }).on('mouseleave', function() {
            $(this).parent().css('border', 'none');
            $(this).parent().children('dd').css('display', 'none');
        });
    });

    $('#contentBar dl dd').each(function(index) {
        $(this).on('mouseenter', function() {
            $(this).parent().css('border', '1px solid #eee');
            $(this).css('display', 'block');
        }).on('mouseleave', function() {
            $(this).parent().css('border', 'none');
            $(this).css('display', 'none');
        });
    });

    $('#contentBar dl dd a').each(function(index) {
        $(this).on('mouseenter', function() {
            $(this).css('color', '#35b558');
        }).on('mouseleave', function() {
            $(this).css('color', '#777');
        });
    });

    /*右侧课程每个div块*/
    $('#lessonList li').each(function() {
        var showAni = true;
        var hideAni = true;
        var oldHeight = $(this).children('.lessonInfo').height();
        var heightInfo = $(this).children('.lessonInfo').children('.info2').height();
        $(this).on('mouseenter', function() {
            $(this).children('.lessonImg').children('.transult').css('display', 'block');
            if (showAni && blockMode) {
                showAni = false;
                $(this).children('.lessonInfo').animate({
                    'height': oldHeight + heightInfo
                }, 300, function() {
                    showAni = true;
                });
                $(this).children('.lessonInfo').children('.info2').slideDown(300);
            }
        }).on('mouseleave', function() {
            $(this).children('.lessonImg').children('.transult').css('display', 'none');
            if (hideAni && blockMode) {
                hideAni = false;
                $(this).children('.lessonInfo').animate({
                    'height': oldHeight
                }, 300, function() {
                    hideAni = true;
                });
                $(this).children('.lessonInfo').children('.info2').slideUp(300);
            }
        });
    });

    /*右侧课程显示模式切换*/
    //列表模式
    $('#showMode1').click(function() {
        blockMode = false;
        $('#lessonList li').each(function() {
            $(this).addClass('listSty');
        });
    });
    //方块模式
    $('#showMode2').click(function() {
        blockMode = true;
        $('#lessonList li').each(function() {
            $(this).removeClass('listSty');
        });
    });
});
