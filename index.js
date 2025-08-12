$(document).ready(function(){

    $('.pager li').first().css('color','red');

    setInterval(leftmove, 4000);

    // 페이지 로드 시 첫 번째 txt-box에 active 추가
    $('.txt-box').eq(0).addClass('active');

    // 페이지 로드 시 첫 번째 불릿(btn0) 활성화
    $('.swiper-pagination-bullet').css('opacity', '0.2');
    $('#btn0').css('opacity', '1');

    // var autocall = setInterval(leftmove, 3000);

    /* $('.slide-box').mouseenter(function(){
        clearInterval(autocall);
    }).mouseleave(function(){
        autocall = setInterval(function(){
            leftmove();
        },3000);
    }); */
});

var page = 0;

function leftmove () {

    page++;

    if(page === 4) {

        $('.wood-bed').css({
            left : 0
        });

        page = 1;       // 첫번째 슬라이드로 이동   

    }

    $('.wood-bed').animate({
        left : -(1920*page)
    }, 1300);


    // 모든 불릿을 opacity 0.2로 설정
    $('.swiper-pagination-bullet').css('opacity', '0.2');

    // 현재 슬라이드에 맞는 불릿을 opacity 1로 설정
    if(page === 1) {
        $('#btn0').css('opacity', '1');  // 첫 번째 슬라이드
    } else if(page === 2) {
        $('#btn1').css('opacity', '1');  // 두 번째 슬라이드
    } else if(page === 3) {
        $('#btn2').css('opacity', '1');  // 세 번째 슬라이드
    }


    if(page === 3){
        $('#btn0').css('color','red')
    }

    // 슬라이드 애니메이션 완료 후 기존 텍스트 제거하고 새 텍스트 추가
    setTimeout(function() {
        $('.txt-box').removeClass('active');
        $('.txt-box').eq(page).addClass('active');
    }, 1300);
}

