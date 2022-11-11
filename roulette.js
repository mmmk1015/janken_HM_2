document.addEventListener('DOMContentLoaded', function () {
    //円周上に表示
    let num = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    //html表示
    let roulette = document.getElementById('roulette');
    //円形に並べる
    let item_length = num.length;
    //roulette半径
    let r = roulette.clientWidth / 2;
    //360度÷配置要素数
    let deg = 360.0 / item_length;
    //角度をラジアンに変更
    let rad = (deg * Math.PI / 180.0);

    //要素追加&表示させる
    for (var i = 0; i < num.length; i++) {
        let div = document.createElement('div');
        div.className = 'cil';
        div.id = 'cil' + i;
        div.innerHTML = num[i];
        const x = Math.cos(rad * i) * r + r - 42;
        const y = Math.sin(rad * i) * r + r - 30;
        let circle = roulette.appendChild(div);
        circle.style.left = x + 'px';
        circle.style.top = y + 'px';
    }
    let interval;
    let first = false;
    let number = 1;
    let grid = 0;

    function start_set() {
        document.getElementById('start').disabled = true;
        document.getElementById('stop').disabled = false;
        document.getElementById("reset").disabled = false;
        if (first === false) {
            interval = setInterval(start_go, 100);
            first = true;
        }
    }
    function start_go() {
        for (var k = 0; k < item_length; k++) {
            let div_number = document.getElementById('cil' + [k]);
            div_number.classList.remove('red');
        }
        grid = Math.floor(Math.random() * num.length);
        number = num[grid];
        div_number = document.getElementById('cil' + number);
        div_number.classList.add('red');
    }
    function stop_set() {
        document.getElementById('stop').disabled = true;
        document.getElementById('start').disabled = false;
        clearInterval(interval);
        first = false;
        let red_number = document.querySelector('.red');
        num.splice(grid, 1);
        red_number.classlist.remove('red');
        red_number.classlist.add('pink');
        if (num.length === 0) {
            document.getElementById('start').disabled = true;
        }
    }

    function reset_set() {
        clearInterval(interval);
        first = false;
        document.getElementById("start").disabled = false;
        for (var j = 0; j < 9; j++) {
            let all = document.getElementById("cil" + j);
            all.classList.remove('pink');
            all.classList.remove('red');
            $('#feeling').text('今日はどこの');
            $('#img').html('<img src="img/eat.png" alt="?" style="width:200px; height:200px;"> ');
            $('#recomend').text('何食べさす？');
        }
        num = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    }


    const starter = document.getElementById('start');
    const stopper = document.getElementById('stop');
    const resetter = document.getElementById("reset");
    starter.addEventListener('click', start_set, false);
    stopper.addEventListener('click', stop_set, false);
    resetter.addEventListener('click', reset_set, false);
    document.getElementById("stop").disabled = true;
    document.getElementById("reset").disabled = true;
});



$('#stop').on('click', function () {
    const randomNumber = Math.floor(Math.random() * 9);
    if (randomNumber === 0) {
        $('#feeling').text('〜今日は名古屋メシ〜');
        $('#img').html('<a href="https://www.kibun.co.jp/recipes/14056/index.html"><img src="img/dengaku.png" alt="田楽" style="width:150px; height:150px;"></a> ');
        $('#recomend').text('菜飯田楽');
    }
    else if (randomNumber === 1) {
        $('#feeling').text('〜今日は金沢メシ〜');
        $('#img').html('<a href="https://www.kurashiru.com/recipes/8e61e9f2-91e2-4f44-8a07-69453f16d85a"><img src="img/hanton.png" alt="ハントン" style="width:150px; height:130px;"></a> ');
        $('#recomend').text('ハントンライス');
    }
    else if (randomNumber === 2) {
        $('#feeling').text('〜今日は三河メシ〜');
        $('#img').html('<a href="http://www.curry.or.jp/cooking/imgs/winter21_recipe02-min.pdf"><img src="img/udon-curry.png" alt="カレーうどん" style="width:150px; height:150px;"></a> ');
        $('#recomend').text('豊橋カレーうどん');
    }
    else if (randomNumber === 3) {
        $('#feeling').text('〜今日は能登メシ〜');
        $('#img').html('<a href="https://www.maff.go.jp/j/keikaku/syokubunka/k_ryouri/search_menu/menu/ishirunabe_ishikawa.html"><img src="img/nabe.png" alt="鍋" style="width:150px; height:130px;"></a> ');
        $('#recomend').text('いしる鍋');
    }
    else if (randomNumber === 4) {
        $('#feeling').text('〜今日は名古屋メシ〜');
        $('#img').html('<a href="https://www.tsuganature.com/misokatsu/recipe.html"><img src="img/misokatsu.png" alt="味噌カツ" style="width:150px; height:150px;"></a> ');
        $('#recomend').text('味噌カツ');
    }
    else if (randomNumber === 5) {
        $('#feeling').text('〜今日は三河メシ〜');
        $('#img').html('<a href="https://sakanaouen-recipe.jp/archives/20356"><img src="img/asari.png" alt="アサリ" style="width:150px; height:130px;"></a> ');
        $('#recomend').text('大アサリの酒蒸し');
    }
    else if (randomNumber === 6) {
        $('#feeling').text('〜今日は金沢メシ〜');
        $('#img').html('<a href="https://www.toriyasaimiso.jp/recipe/212.html"><img src="img/toriyasai.png" alt="とり野菜" style="width:150px; height:150px;"></a> ');
        $('#recomend').text('とり野菜鍋');
    }
    else if (randomNumber === 7) {
        $('#feeling').text('〜今日は岐阜メシ〜');
        $('#img').html('<a href="https://park.ajinomoto.co.jp/recipe/card/704417/"><img src="img/tsukemono.png" alt="漬物" style="width:250px; height:250px;"></a> ');
        $('#recomend').text('漬物ステーキ');
    }
    else if (randomNumber === 8) {
        $('#feeling').text('〜今日は岐阜メシ〜');
        $('#img').html('<a href="https://oceans-nadia.com/user/11375/recipe/163302"><img src="img/keichan.png" alt="ケイちゃん" style="width:250px; height:250px;"></a> ');
        $('#recomend').text('ケイちゃん');
    }
    else {
        $('#feeling').text('それ以外');
    }
});

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

/*モーダルclose*/
$(function () {
    $('.js-open').click(function () {
        $('#overlay, .modal-window').fadeIn();
    });
    $('.js-close , #overlay').click(function () {
        $('#overlay, .modal-window').fadeOut();
    });
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
        window.location = shop.html;
    }, 300);
}


document.addEventListener('DOMContentLoaded', () => {
    if (wrapper.classList.contains('fadeout')) {
        wrapper.classList.remove('fadeout');
    }
});