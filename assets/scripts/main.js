$(document).ready(function() {
    addResizeLabel();
    addFontAdjust();
    $('.circleLoading').each(function(id, val) {
        circleLoadingInit(val, 100, 90, 10, 4);
    });
    fillCalendar();

    var musicList = [{url:'https://cs1-34v4.vk-cdn.net/p20/6aa36337c26b46.mp3',artist:'Ska',track:'Napa es'},{url:'https://cs1-17v4.vk-cdn.net/p6/e841aef675d73b.mp3',artist:'Ska',track:'Ni Fu Ni Fa'},{url:'https://cs1-39v4.vk-cdn.net/p17/9fdb606820b7a2.mp3',artist:'Ska',track:'Cannabis'},{url:'https://cs1-34v4.vk-cdn.net/p22/c395526eff470f.mp3',artist:'Ska',track:'La Estampida'},{url:'https://cs1-31v4.vk-cdn.net/p1/d736a79f3f8f4c.mp3',artist:'Ska',track:'Que Puedo Decir'},{url:'https://cs1-36v4.vk-cdn.net/p16/5313a229d2ec40.mp3',artist:'Ska',track:'Barbie Girl (ft. Ska-P)'},{url:'https://cs1-41v4.vk-cdn.net/p23/5aebb57457ab0a.mp3',artist:'Ska',track:'Crimen Sollicitationis'},{url:'https://cs1-34v4.vk-cdn.net/p6/78b2913cb0cd7a.mp3',artist:'Ska',track:'I Just Call To Say I Love You'},{url:'https://cs1-37v4.vk-cdn.net/p13/bc2b03c7000db2.mp3',artist:'Ska',track:'Wild Spain'},{url:'https://cs1-39v4.vk-cdn.net/p1/4437d37c9c4f81.mp3',artist:'Ska',track:'Типа СКА [...День на нуле Кинь все дела Дурь в голове Прыгай под <span>SKA</span>...]'},{url:'https://cs1-32v4.vk-cdn.net/p19/3379229b696981.mp3',artist:'SKA',track:'Mestizaje'},{url:'https://cs1-39v4.vk-cdn.net/p20/12a3d19afabe9d.mp3',artist:'Ska',track:'Whenever, Wherever (cover)'},{url:'https://cs1-39v4.vk-cdn.net/p15/91d6667f7e3f94.mp3',artist:'Ska',track:'A la mierda'},{url:'https://cs1-38v4.vk-cdn.net/p12/cc792bbb424631.mp3',artist:'Ska',track:'- This is Ska (Klaas Remix) [PaReYRA CluB MuSiC - /club27698137 - /ElectroHouse]'},{url:'https://cs1-34v4.vk-cdn.net/p18/2485be4592f448.mp3',artist:'Ska',track:'Ska De La Tierra'},{url:'https://cs1-36v4.vk-cdn.net/p16/b6ca0c8f90806f.mp3',artist:'Ska',track:'El Libertador'},{url:'https://cs1-31v4.vk-cdn.net/p12/7d97657c768d31.mp3',artist:'Ska',track:'Знаешь ли ты (ska-punk remix) '},{url:'https://cs1-39v4.vk-cdn.net/p17/a5b0e4414f70d4.mp3',artist:'Ska',track:'Ska Для Кислотных Девочек'},{url:'https://cs1-33v4.vk-cdn.net/p1/3b530d8b07a093.mp3',artist:'Ska',track:'Ghost Busters (Ska Punk Cover)'},{url:'https://cs1-41v4.vk-cdn.net/p23/ae0f84cc7cd304.mp3',artist:'Ska',track:'Los Hijos Bastardos de la Globalización'},{url:'https://cs1-36v4.vk-cdn.net/p10/6033c2dab44e29.mp3',artist:'SKA',track:'Ghostbusters'},{url:'https://cs1-39v4.vk-cdn.net/p24/1ba72f7e9bd729.mp3',artist:'Ska',track:'ХулиганSKAя'},{url:'https://cs1-37v4.vk-cdn.net/p17/376b1b43c7b9b9.mp3',artist:'Ska',track:'Too good to be true'},{url:'https://cs1-35v4.vk-cdn.net/p15/8345261a7d6ae9.mp3',artist:'Ska',track:'Gasta Claus'},{url:'https://cs1-31v4.vk-cdn.net/p7/6fcb38e52ef7f2.mp3',artist:'Ska',track:'Fuego Y Miedo'},{url:'https://cs1-40v4.vk-cdn.net/p21/1f862b995627f2.mp3',artist:'Ska',track:'Eres un@ más'},{url:'https://cs1-34v4.vk-cdn.net/p18/c71b80d669d5fa.mp3',artist:'ska',track:'Insensibilidad'},{url:'https://cs1-35v4.vk-cdn.net/p22/acd33c58966e50.mp3',artist:'Ska',track:'En gång ska han gråta'},{url:'https://cs1-41v4.vk-cdn.net/p10/89ed9ee7887246.mp3',artist:'Ska',track:'This Is Ska (Klaas Remix Long Version) ● EXCLUSIVE! for club5485048 ● [track at-27-06-2011] - Electro House, Electro'},{url:'https://cs1-34v4.vk-cdn.net/p4/db824444a0fb39.mp3',artist:'Ska',track:'Чумачечая весна (ska-punk cover)'},{url:'https://cs1-36v4.vk-cdn.net/p1/8ef4229c5eb4d5.mp3',artist:'Ska',track:'Planeta Eskoria'},{url:'https://cs1-41v4.vk-cdn.net/p11/c39abbce4ae3af.mp3',artist:'Ska',track:'America Latina !!Libre!!'},{url:'https://cs1-45v4.vk-cdn.net/p2/fdf563c55b6be4.mp3',artist:'Ska',track:'Umbrella'},{url:'https://cs1-31v4.vk-cdn.net/p1/69ce48c153f33e.mp3',artist:'Ska',track:'El Vals Del Obrero'},{url:'https://cs1-36v4.vk-cdn.net/p2/ded8e2abda0fca.mp3',artist:'Ska',track:'ska <span>ska</span> <span>ska</span>se'},{url:'https://cs1-44v4.vk-cdn.net/p6/22cad120b9a18b.mp3',artist:'Ska',track:'Intifada'},{url:'https://cs1-32v4.vk-cdn.net/p2/cac77385b2e7bd.mp3',artist:'Ska',track:'welcome to hell'},{url:'https://cs1-34v4.vk-cdn.net/p7/07b49c22f2ad9e.mp3',artist:'Ska',track:'Napa es'},{url:'https://cs1-34v4.vk-cdn.net/p20/6aa36337c26b46.mp3',artist:'Ska',track:'Пианино / бас гитара'},{url:'https://cs1-49v4.vk-cdn.net/p21/df8c17bf4839b8.mp3',artist:'Ska',track:'Ska Punch (Breaks) 12.11.2011 Группа &gt;&gt;&gt;Ломаный бит&lt;&lt;&lt;'},{url:'https://cs1-32v4.vk-cdn.net/p7/22f891d3a5d707.mp3',artist:'Ska',track:'Морячка (ska-punk cover)'},{url:'https://cs1-41v4.vk-cdn.net/p7/263dca462ccf1e.mp3',artist:'Ska',track:'Mr. Big Stuff'},{url:'https://cs1-40v4.vk-cdn.net/p16/5ac874307caf6c.mp3',artist:'Ska',track:'Белая Стрекоза Любви (SKA cover)'},{url:'https://cs1-33v4.vk-cdn.net/p7/9425146e172ef6.mp3',artist:'Ska',track:'It s My Life  '},{url:'https://cs1-32v4.vk-cdn.net/p7/1eafb72bdd55d4.mp3',artist:'Ska',track:'Любите девушки ( Браво SKA-Punk cover )  '},{url:'https://cs1-33v4.vk-cdn.net/p18/6dc312b3ef15ca.mp3',artist:'Ska',track:'La Colmena'},{url:'https://cs1-37v4.vk-cdn.net/p13/d14713cd0557b9.mp3',artist:'Ska',track:'Sweet Dreams'},{url:'https://cs1-34v4.vk-cdn.net/p9/eae8b98dffa9d8.mp3',artist:'Ska',track:'I Ran'},{url:'https://cs1-35v4.vk-cdn.net/p6/6da4829277a9fc.mp3',artist:'SKA',track:' Лето Ska'},{url:'https://cs1-33v4.vk-cdn.net/p9/e991eaafac95e9.mp3',artist:'ska',track:'Kemalo'},{url:'https://cs1-37v4.vk-cdn.net/p12/949e2fb161f526.mp3',artist:'СКА',track:'Ska-Pa - 99%'},{url:'https://cs1-42v4.vk-cdn.net/p23/7077dedbc027c9.mp3',artist:'ska',track:'Jingle Bells'},{url:'https://cs1-38v4.vk-cdn.net/p15/cb38c51d4873ae.mp3',artist:'Ska',track:'Ska and Oi!'},{url:'https://cs1-38v4.vk-cdn.net/p23/870515b63d6df7.mp3',artist:'Ska',track:'All that she wants (Ska-punk cover)  '},{url:'https://cs1-34v4.vk-cdn.net/p5/58f74ad7301c58.mp3',artist:'Ska',track:'Ты не пришла ну и хуй с тобой!!!'},{url:'https://cs1-31v4.vk-cdn.net/p6/1dc7598aa1c04e.mp3',artist:'Ska',track:'На трамвае - на Гаваи    '},{url:'https://cs1-35v4.vk-cdn.net/p24/b4412235fc727e.mp3',artist:'Ska',track:'Vandalo'},{url:'https://cs1-32v4.vk-cdn.net/p10/a8b3cf11fbe05f.mp3',artist:'Ska',track:'Tsumasaki'},{url:'https://cs1-35v4.vk-cdn.net/p21/64adc17f51f10f.mp3',artist:'Ska',track:'Romero El Madero'},{url:'https://cs1-33v4.vk-cdn.net/p10/22062a6e2068c3.mp3',artist:'Ska',track:'Old Devil Moon'},{url:'https://cs1-48v4.vk-cdn.net/p20/3d03efaa9ddf50.mp3',artist:'Ska',track:'Ore Ska Band-Pinocchio'},{url:'https://cs1-51v4.vk-cdn.net/p22/d3ace136ff1341.mp3',artist:'Ska',track:'El Imperio Caera'},{url:'https://cs1-40v4.vk-cdn.net/p20/2fbb20e48c8746.mp3',artist:'Ska',track:'Se acabó'},{url:'https://cs1-38v4.vk-cdn.net/p22/03549e8d6a86ee.mp3',artist:'Ska',track:'Испорченное Настроение [...Целый день, Целый день, Целый день С мрачным лицом я себя винил, Ну, зачем я приемник включил...Утешало слегка Что вечером ждет 140Вт и кресло. Громкий добрый Punk rock, Многоликий Hard core И, конечно же Не стареющее Ska...]'},{url:'https://cs1-46v4.vk-cdn.net/p13/b953c3fbd1456f.mp3',artist:'Ska',track:'Fight, Rebel and &amp; Riot'},{url:'https://cs1-34v4.vk-cdn.net/p3/285c6f74621337.mp3',artist:'Ska',track:'Crimen sollicitationis ..такой чисто испанский Рок :-D'},{url:'https://cs1-41v4.vk-cdn.net/p16/cfafb8d8930707.mp3',artist:'Ska',track:'I Dont Want To Miss A Thing'},{url:'https://cs1-31v4.vk-cdn.net/p12/aa269430477388.mp3',artist:'Ska',track:'Paramilitar'}];
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