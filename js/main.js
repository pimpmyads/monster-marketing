jQuery(document).ready(function(){

    $(function() {
        $(".youtube").each(function() {
            $(this).css('background-image', 'url(http://i.ytimg.com/vi/' + this.id + '/hqdefault.jpg)');
            $(this).append($('<div/>', {'class': 'play'}));
            $(document).delegate('#'+this.id, 'click', function() {

                var iframe_url = "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1";
                if ($(this).data('params')) iframe_url+='&'+$(this).data('params');

                var iframe = $('<iframe/>', {'frameborder': '0', 'src': iframe_url, 'width': '560px', 'height': $(this).height() })

                $(this).replaceWith(iframe);
            });
        });
    });


    $(function() {
        $(".youtube1").each(function() {
            $(this).css('background-image', 'url(http://i.ytimg.com/vi/' + this.id + '/hqdefault.jpg)');
            $(this).append($('<div/>', {'class': 'play'}));
            $(document).delegate('#'+this.id, 'click', function() {

                var iframe_url = "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1";
                if ($(this).data('params')) iframe_url+='&'+$(this).data('params');

                var iframe = $('<iframe/>', {'frameborder': '0', 'src': iframe_url, 'width': '360px', 'height': $(this).height() })

                $(this).replaceWith(iframe);
            });
        });
    });

    $('.link-more').click(function () {
        $(this).hide();
        $(this).parent().find('.other-testimonials').fadeIn();
        return false;
    });

});
