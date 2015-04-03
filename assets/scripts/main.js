$(document).ready(function() {
    addResizeLabel();
    addFontAdjust();
});

function addFontAdjust() {
    $('*').each(function(id, val) {
        adjust(val, 'fontAdjustHeight', 'height');
        adjust(val, 'fontAdjustWidth', 'width');
    });
    function adjust(val, data, WH) {
        var data = $(val).data(data);
        if (data) {
            var iframe = document.createElement('iframe');
            $(iframe).css({
                position: 'absolute',
                'z-index': '-1',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%'
            });
            iframe.onload = function() {
                this.contentWindow.onresize = function() {
                    var is = $(val)[WH]();
                    var fontSize = parseInt(data) * 0.01;
                    fontSize *= is;
                    fontSize = fontSize.toFixed(3);
                    $(val).css('font-size', fontSize + 'px');
                };
                this.contentWindow.onresize();
            };
            $(val).append(iframe);
        }
    }
}
function addResizeLabel() {
    $('#modules > div').each(function(id, val) {
        var wClasses = [
            {c: 'wSmall', t: 'S'},
            {c: 'wMedium', t: 'M'},
            {c: 'wLarge', t: 'L'}
        ];
        var hClasses = [
            {c: 'hSmall', t: 'S'},
            {c: 'hMedium', t: 'M'},
            {c: 'hLarge', t: 'L'}
        ];

        var before = document.createElement('b');
        $(before).addClass('moduleBefore').click(function() {
            scaleModule(val, before, wClasses, 1);
        });
        var after = document.createElement('b');
        $(after).addClass('moduleAfter').click(function() {
            scaleModule(val, after, hClasses, 1);
        });
        $(val).append(before, after);
        scaleModule(val, before, wClasses, 0);
        scaleModule(val, after, hClasses, 0);
    });
    function scaleModule(dom, btn, classes, scale) {
        var mClass = 0;
        classes.forEach(function(value, index) {
            if ($(dom).hasClass(value.c)) {
                mClass = index + scale;
            }
            $(dom).removeClass(value.c);
        });
        if (mClass >= classes.length) {
            mClass = 0;
        }
        $(dom).addClass(classes[mClass].c);
        $(btn).html(classes[mClass].t);
    }
}
