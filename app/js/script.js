//Scripts

//Back to top button
$(window).scroll(function () {
    if ($(this).scrollTop() > 400) {
        $('#back-to-top').fadeIn();
    } else {
        $('#back-to-top').fadeOut();
    }
});
// scroll body to 0px on click
$('#back-to-top').click(function () {
    $('#back-to-top').tooltip('hide');
    $('body,html').animate({
        scrollTop: 0
    }, 800);
    return false;
});

$(function () {

    $(document).on("ready", function() {
        $(".float-block").css({"padding-left" : ($('.container-fluid').width() - $('.container:first-child').width()) / 2 + "px"});
    });

    $(window).on("resize", function() {
        $(".float-block").css({"padding-left" : ($('.container-fluid').width() - $('.container:first-child').width()) / 2 + "px"});
    });


    $('#write_me').each(function(){
        var form = $(this),
            btn = form.find('.submit');

        form.find('.form-control').addClass('empty_field');

        function checkInput(){
            form.find('.form-control').each(function(){
                if($(this).val() != '' && $(this).val() != '0'){
                    $(this).removeClass('empty_field');
                } else {
                    $(this).addClass('empty_field');
                }
            });
        }

        function lightEmpty(){
            form.find('.empty_field').css({'border-color':'#d8512d'});
            setTimeout(function(){
                form.find('.empty_field').removeAttr('style');
            },500);
        }

        setInterval(function(){
            checkInput();
            var sizeEmpty = form.find('.empty_field').size();
            if(sizeEmpty > 0){
                if(btn.hasClass('disabled')){
                    return false
                } else {
                    btn.addClass('disabled')
                }
            } else {
                btn.removeClass('disabled')
            }
        },500);

        btn.click(function(){
            if($(this).hasClass('disabled')){
                lightEmpty();
                return false
            } else {
                form.submit();
            }
        });
    });



//Carousel responsive
    var jcarousel = $('.jcarousel');

    jcarousel
        .on('jcarousel:reload jcarousel:create', function () {
            var carousel = $(this),
                width = carousel.innerWidth();

            if (width >= 991) {
                width = width / 2;
            } else if (width >= 767) {
                width = width;
            }

            carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
        })
        .jcarousel({
            wrap: 'circular',
            animation: {
                duration: 1000,
                speed: 1000,
                easing: 'linear',
                complete: function () {
                }
            }
        })
        .jcarouselAutoscroll({
            interval: 8000,
            target: '+=1',
            autostart: true,
        })
        .on('mouseover', function (e) {
            $(this).jcarouselAutoscroll('stop');
        })
        .on('mouseout', function (e) {
            $(this).jcarouselAutoscroll('start');
        });

    $('.jcarousel-control-prev')
        .jcarouselControl({
            target: '-=1'
        });

    $('.jcarousel-control-next')
        .jcarouselControl({
            target: '+=1'
        });

    $('.jcarousel-pagination')
        .on('jcarouselpagination:active', 'a', function () {
            $(this).addClass('active');
        })
        .on('jcarouselpagination:inactive', 'a', function () {
            $(this).removeClass('active');
        })
        .on('click', function (e) {
            e.preventDefault();
        })
        .jcarouselPagination({
            perPage: 1,
            item: function (page) {
                return '<a href="#' + page + '">' + page + '</a>';
            }
        });

//Match Height
    $(function() {
        $('.item').matchHeight({
            byRow: true,
            property: 'height',
            target: null,
            remove: false
        });
    });
});
