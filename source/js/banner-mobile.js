// ========================banner mobile===========================
jQuery(window).load(function() {
    banner();
});

function banner() {
    if (jQuery(this).width() < 600) {
        var img_mobile = jQuery('.banner-page').find('img').attr('src');
        jQuery('.banner-page').css({
            'background-image': 'url(' + img_mobile + ')',
            'background-size': 'cover',
            'background-repeat': 'no-repeat',
            'background-position': 'top right',
            'min-height': '43vh'
        });
        jQuery('.banner-page').find('img').css('display', 'none')
    }
}