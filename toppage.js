const before = $('.text');
const text = before.text();
const textArray = text.split('');

let after = '';
$.each(textArray, function (index, val) {
    after += "<span>" + val + "</span>";
});

before.html(after);

const textcnt = textArray.length;
const circleR = ($('.circle').height()) / 2;
const fontH = ($('.top_msg').height());
const dist = circleR - fontH;

$('span').each(function (index) {
    const num = index + 1;
    const radX = Math.sin(360 / textcnt * num * (Math.PI / 180));
    const radY = Math.sin((90 - (360 / textcnt * num)) * (Math.PI / 180));
    $(this).css('transform', 'translate(' + dist * radX + 'px, ' + -(dist * radY) + 'px) rotate(' + 360 / textcnt * num + 'deg)');
});

//ページ切り替えアニメーション
const wrapper = document.querySelector(".wrapper");
const pageTransitionDOMClass = 'jsPageTransition';
const linkEls = [
    ...document.querySelectorAll('a:not([href*="#"]):not([target])'),
    ...document.querySelectorAll('.jsPageTransition'),
];
const currentHostName = window.location.hostname;

function addFadeout(url) {
    wrapper.classList.add("fadeout");
    setTimeout(() => {
        window.location = roulette.html;
    }, 300);
}


document.addEventListener('DOMContentLoaded', () => {
    if (wrapper.classList.contains('fadeout')) {
        wrapper.classList.remove('fadeout');
    }
});

//カーソルアニメーション
let cursorR = 4;  //カーソルの半径
const cursor = document.getElementById('cursor');  //カーソル用のdivを取得
const stalker = document.getElementById('stalker'); //ストーカー用のdivを取得

//マウスに追従させる処理
document.addEventListener('mousemove', function (e) {
    stalker.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
    cursor.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
});

//aタグにホバー中かどうかの判別フラグ
let hovFlag = false;

//aタグにホバーしたときに、ストーカーにクラスを追加
const linkElem = document.querySelectorAll('a');
for (let i = 0; i < linkElem.length; i++) {
    //マウスホバー時
    linkElem[i].addEventListener('mouseover', function (e) {
        hovFlag = true;

        //ストーカーにクラスを追加
        stalker.classList.add('hov_');
    });
    //マウスホバー解除時
    linkElem[i].addEventListener('mouseout', function (e) {
        hovFlag = false;
        stalker.classList.remove('hov_');
    });
}

