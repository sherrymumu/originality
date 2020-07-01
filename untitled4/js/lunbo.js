$(function(){
    var i=0;
    $('.shang').click(function(){
        i++;
        console.log(i);

        moveImg(i);

    });
    $('.xia').click(function(){
        i--;
        moveImg(i);

    });
    $('.nav span').click(function(){
        var _index=$(this).index();
        i=_index;
        moveImg(i);


    });
    // i的作用：决定下一张图片是谁————也就是说ul的left是多少。
    // $('.list').css({left)的值是从图a过度是此时的ul的left。
    function moveImg(){
        if (i==5) {
            i=1;
            $('.list').css({'left':'0'});
        }
        // 是第一张
        if(i==-1){
            i=4;
            $('ul').css({left:(5*-1142)});
        }
        $('.list').stop().animate({'left':-1142*i+'px'},1000);
        if (i==5) {
            $('.nav span').eq(0).addClass('on').siblings().removeClass('on');

        }
        $('.nav span').eq(i).addClass('on').siblings().removeClass('on');

    }
})
