; (function ($) {



    $(document).ready(function () {


    });

    jQuery.event.add(window, "load", function () {

        moveVisualArrow();


    })


    function moveVisualArrow() {
        $('#visual_arrow').fadeTo(0, 1.0).animate({ bottom: 60 }, 1500, 'easeOutCubic', function () {
            $('#visual_arrow').fadeTo(500, 0, function () {
                $('#visual_arrow').css({ bottom: '160px' })
                moveVisualArrow();
            })
        })
    }


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

        $('#mainvisual_slider').height($('#mainvisual').width() * 0.54394299)
        $('#visual_logo').height($('#mainvisual').height())

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




})(jQuery);
