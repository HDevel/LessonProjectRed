$(document).ready(function() {
    addResizeLabel();
    addFontAdjust();
    $('.circleLoading').each(function(id, val) {
        circleLoadingInit(val, 100, 90, 10, 4);
    });
    fillCalendar();

    var musicList = [
            {
                artist: 'Пушной',
                track: 'Бритни',
                url: 'assets/audio/Aleksandr-Pushnoj-Britni_(get-tune.net).mp3'
            },
            {
                artist: 'Пушной',
                track: 'Facebook',
                url: 'assets/audio/Aleksandr-Pushnoj-Facebook_(get-tune.net).mp3'
            },
            {
                artist: 'Пушной',
                track: 'Улыбаемся и машем',
                url: 'assets/audio/Pushnoj-Ulybaemsya-i-mashem_(get-tune.net).mp3'
            },
            {
                artist: 'SKA-P',
                track: 'Welcome to hell',
                url: 'assets/audio/SKA-P-Ska-p-Welcome-to-hell_(get-tune.net)-2.mp3'
            }
        ];
    activateMPlayer(musicList);
});
function circleLoadingInit(dom, radius, count, width, height) {
    var me = dom;
    $(me).css({
        top: radius,
        left: radius
    });
    for (var i = 0; i < count; i++) {
        var div = document.createElement('div');
        $(div).css({
            width: width,
            height: height
        });
        $(me).append(div);
    }
    $(me).data('fill', 0);
    me.circleLoading = circleLoading;
    me.circleLoading(1);

    function circleLoading(doPercent) {
        var me = this,
            all = $(' > div', me),
            total = all.length;
        all.each(function(id, val) {
            var percent = id / total,
                delay = 0,
                deg = 360 * percent;

            deg -= 90;
            deg = deg.toFixed(3);

            var css = {
                opacity: 0,
                'transition-delay': '',
                transform: 'rotate(' + deg + 'deg) ' +
                'translate(' + (50 + width) + 'px, -' + (height * 0.5) + 'px)'
            };

            if ($(me).data('fill') >= doPercent) {
                delay = (total - id);
            } else {
                delay = id;
            }

            delay *= 100;
            css['transition-delay'] = delay + 'ms';
            if (percent < doPercent) {
                css.opacity = 1;
                css.transform = 'rotate(' + deg + 'deg) ' +
                'translate(' + (radius - width) + 'px, -' + (height * 0.5) + 'px)'
            }
            $(val).css(css);
        });
        $(me).data('fill', doPercent);
    }
}
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
function fillCalendar() {
    var dom = $('.dayDate'),
        code = '',
        dayIndex = -(new Date(
                new Date().getFullYear(),
                new Date().getMonth(),
                1
            ).getDay()) + 2,
        months = [
            'Январь',
            'Февраль',
            'Март',
            'Апрель',
            'Май',
            'Июнь',
            'Июль',
            'Август',
            'Сентябрь',
            'Октябрь',
            'Ноябрь',
            'Декабрь'
        ],
        days = [
            'Воскресенье',
            'Понедельник',
            'Вторник',
            'Среда',
            'Четверг',
            'Пятница',
            'Суббота'
        ];
    $('.calendarCurrentDayID').html(
        days[new Date().getDay()]
    );
    $('.calendarCurrentDayDate').html(
        new Date().getDate() + ' ' +
        months[new Date().getMonth()] + ' ' +
        new Date().getFullYear()
    );

    code += '<table>';
    for (var week = 0; week < 5; week++) {
        code += '<tr>';
        for (var day = 0; day < 7; day++) {
            var date = new Date(
                    new Date().getFullYear(),
                    new Date().getMonth(),
                    dayIndex
                ).getDate(),
                cssClass = '';
            if (dayIndex <= 0 || dayIndex > 7 && date <= 7) {
                cssClass = ' class="previousMounth"';
            }
            if (date == new Date().getDate()) {
                cssClass = ' class="currentDate"';
            }
            code += '<td' + cssClass + '>' + date + '</td>';
            dayIndex++;
        }
        code += '</tr>';
    }
    code += '</table>';
    dom.html(code);
}
var musicPlayer;
function activateMPlayer(playlist) {
    var doc = new DocumentFragment();
    musicPlayer = $('#moduleMusicPlayer audio');

    playlist.forEach(function(value, index) {
        var div = document.createElement('div');
        $(div).data('track', value);
        $(div).html(value.artist + ' - ' + value.track);
        $(div).click(selectMTrack);
        $(doc).append(div);
        if (index == 0) {
            selectMTrack.call(div, 'select');
        }
    });
    $('.mPlayerList').html('');
    $('.mPlayerList').append(doc);
    $('.mPlayerPlayButton').click(playMTrack);
    $('#moduleMusicPlayer audio')[0].ontimeupdate = function() {
        var percent = (this.currentTime / this.duration) * 100;
        $('.mPlayerHeadIndicatorLine > div').css('width', percent + '%');
    };
}
function selectMTrack(status){
    var me = $(this),
        data = me.data('track');
    $('.mPlayerList > div').removeClass('thistrack');
    me.addClass('thistrack');

    $('.mPlayerHeadSongName').html(data.track);
    $('.mPlayerHeadSongAuthor').html(data.artist);
    musicPlayer.attr('src', data.url);
    console.log(status);
    if (status != 'select') {
        playMTrack(true);
    }
}
function playMTrack(play){
                          //play may be event info (onclick)
    if (musicPlayer[0].paused || play == true) {
        musicPlayer[0].play();
        $('.mPlayerPause')
            .addClass('mPlayerPlay')
            .removeClass('mPlayerPause');
    } else {
        console.log(5)
        musicPlayer[0].pause();
        $('.mPlayerPlay')
            .addClass('mPlayerPause')
            .removeClass('mPlayerPlay');
    }
}