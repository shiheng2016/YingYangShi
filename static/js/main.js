$(document).ready(function() {
    //头部固顶在页面顶部
    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > 54) {
            $('#mg-header').hide();
            $('#mg-top-bar').show();
            $('#mg-top-bar').addClass('out');
            $('.banner-bar').hide();
            $('.yys-logo').addClass('leave');
        } else if (scrollTop == 54) {
            $(window).scrollTop = 54;
        } else {
            $('#mg-header').show();
            $('#mg-top-bar').hide();
            $('#mg-top-bar').removeClass('out');
            $('.banner-bar').show();
            $('.yys-logo').removeClass('leave');
        }
    });
    //banner处下载条消失
    $('.download-bar').click(function() {
        $('.download-wraper').removeClass('download-leave');
        $('.download-wraper').removeClass('download-enter');
        $('.download-wraper').addClass('download-leave');
        setTimeout(function() {
            $('.download-container').hide();
            $('.fold_wrap').show();
        }, 500);
    });
    //banner处下载条展现
    $('.fold_wrap a').click(function() {
        $('.download-wraper').removeClass('download-leave');
        $('.download-wraper').removeClass('download-enter');
        $('.download-wraper').addClass('download-enter');
        $('.fold_wrap').hide();
        $('.download-container').show();
    });
    //banner头部变白
    $('.haschild').mouseenter(function() {
        $('#mg-banner .top-bar').removeClass('changecolor');
        $('#mg-banner .top-bar').removeClass('changecolorleave');
        $('#mg-banner .top-bar').addClass('changecolor');
    });
    $('.haschild').mouseleave(function() {
            $('#mg-banner .top-bar').removeClass('changecolor');
            $('#mg-banner .top-bar').removeClass('changecolorleave');
            $('#mg-banner .top-bar').addClass('changecolorleave');
        })
        //点击小青蛙
    $('.bunny').click(function() {
        $('.server_pop').removeClass('server_pop_enter');
        $('.server_pop').removeClass('server_pop_leave');
        $('.bunny-bg').show();
        $('.server_pop').addClass('server_pop_enter');
    });
    $('.close').click(function() {
        $('.server_pop').removeClass('server_pop_enter');
        $('.server_pop').removeClass('server_pop_leave');
        $('.server_pop').addClass('server_pop_leave');
        setTimeout(function() {
            $('.bunny-bg').hide();
        }, 500)
        return false;
    });
    $('.course-tabs').on('click', 'label', function() {
        var that = this;
        $('.course-tabs label em').css('opacity', '0');
        $(that).find('em').css('opacity', 1);
    });
});
