jQuery(function ($) {
    $('.js-question-title-accordion').on('click', function () {
        /*クリックでコンテンツを開閉*/
        $(this).next().slideToggle(200);
        /*矢印の向きを変更*/
        $(this).toggleClass('open', 200);
    });

    });



    // 最上部から現在位置までの距離を取得して、変数[now]に格納

$( window ).scroll(function(){
    var position = $( window ).scrollTop();

    if(position > 100) {
        $("#backtop").fadeIn("slow");
    }else{
        $("#backtop").fadeOut("slow");
    }
});