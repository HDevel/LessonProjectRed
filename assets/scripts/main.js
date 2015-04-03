$(document).ready(function () {
    addResizeLabel();
});

function addResizeLabel(){
    $('#modules > div').each(function (id, val) {
        var wClasses = [{c:'wSmall',t:'S'}, {c:'wMedium',t:'M'}, {c:'wLarge',t:'L'}];
        var hClasses = [{c:'hSmall',t:'S'}, {c:'hMedium',t:'M'}, {c:'hLarge',t:'L'}];

        var before = document.createElement('b');
        $(before).addClass('moduleBefore').click(function () {
            scaleModule(val, before, wClasses, 1);
        });
        var after = document.createElement('b');
        $(after).addClass('moduleAfter').click(function () {
            scaleModule(val, after, hClasses, 1);
        });
        $(val).append(before, after);
        scaleModule(val, before, wClasses, 0);
        scaleModule(val, after, hClasses, 0);
    });
    function scaleModule(dom, btn, classes, scale) {
        var mClass = 0;
        classes.forEach(function (value, index) {
            if($(dom).hasClass(value.c)){
                mClass = index + scale;
            }
            $(dom).removeClass(value.c);
        });
        if(mClass >= classes.length){
            mClass = 0;
        }
        $(dom).addClass(classes[mClass].c);
        $(btn).html(classes[mClass].t);
    }
}
