; (function ($) {


    $(document).ready(function () {

        $('#btn_spmenu').click(function () {
            if ($('body').hasClass('spmenu_opened')) {
                $('body').removeClass('spmenu_opened');
            } else {
                $('body').addClass('spmenu_opened');
            }
        })




        $('#btn_spmenu_open').click(function () {
            $('body').addClass('spmenu_opened');
        })
        $('#btn_spmenu_close').click(function () {
            $('body').removeClass('spmenu_opened');
        })


    });


    // �准�潦�匧�䔶���
    jQuery.event.add(window, "load", function () {

        $('.flexslider').flexslider({
            animation: 'fade',
            controlNav: false,
            directionNav: false,
            slideshowSpeed: 3000
        });
    })


    // �芥�萸�扎�箝�扎�踺�喋��
    var resize_tid = false;
    jQuery.event.add(window, "resize load", function () {
        if (resize_tid !== false) {
            clearTimeout(resize_tid);
        }
        resize_tid = setTimeout(function () {
            resizeHandler();
        }, 200);
    });
    //�芥�萸�扎�箝�譌�喋�剹�押��
    var resizeHandler = function () {

    }

    // �嫘�胯�准�潦�怒�扎�踺�喋��
    jQuery.event.add(window, "scroll load", function () {
        var wh = $(window).height();
        var st = $(window).scrollTop();
        var dh = $(document).height();

        if (st > 0) {
            $('body').addClass('header_sticker');
        } else {
            $('body').removeClass('header_sticker');
        }

        checkFadeblockPos(wh, st);

    })

    // �𨰻�扼�潦�剹�硔�准���胯�娛ick
    function checkFadeblockPos(wh, st) {
        $('.fadeblock').each(function (cnt) {
            var t = $(this).offset().top;
            if (st + wh - t > 0) {
                setTimeout(function (elm) {
                    elm.addClass('fadeblock-fadein')
                }, 500, $(this));
            } else {
                $(this).removeClass('fadeblock-fadein')
            }
        })
    }










    // get Image true size
    var img_true_size = function (image) {
        var w = image.width,
            h = image.height;

        if (typeof image.naturalWidth !== 'undefined') {  // for Firefox, Safari, Chrome
            w = image.naturalWidth;
            h = image.naturalHeight;

        } else if (typeof image.runtimeStyle !== 'undefined') {	// for IE
            var run = image.runtimeStyle;
            var mem = { w: run.width, h: run.height };  // keep runtimeStyle
            run.width = "auto";
            run.height = "auto";
            w = image.width;
            h = image.height;
            run.width = mem.w;
            run.height = mem.h;

        } else {		 // for Opera
            var mem = { w: image.width, h: image.height };  // keep original style
            image.removeAttribute("width");
            image.removeAttribute("height");
            w = image.width;
            h = image.height;
            image.width = mem.w;
            image.height = mem.h;
        }

        return { width: w, height: h };
    }
    /**
     *  GET�㻫�押�～�潦�踴�㘾�滚�𨰜�怒�𨰜�西�𢛵��
     *  
     *  @return     �㻫�押�～�潦�踴�奚bject
     *
     *  https://qiita.com/Evolutor_web/items/c9b940f752883676b35d
     *
     */
    var getUrlVars = function () {
        var vars = {};
        var param = location.search.substring(1).split('&');
        for (var i = 0; i < param.length; i++) {
            var keySearch = param[i].search(/=/);
            var key = '';
            if (keySearch != -1) key = param[i].slice(0, keySearch);
            var val = param[i].slice(param[i].indexOf('=', 0) + 1);
            if (key != '') vars[key] = decodeURI(val);
        }
        return vars;
    }


})(jQuery);
