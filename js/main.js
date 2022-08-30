const ul = $(".main-slide>ul");
const lastImg = ul.children().last().clone(); // 원본 남겨두기
ul.prepend(lastImg); // ul의 첫째 자식으로 넣어줌
const firstImg = ul.children().eq(1).clone();
ul.append(firstImg);
const imgCount = ul.children().length;
const width = 1160;
ul.css("width", (width*imgCount)+"px");
let imgNo = 1;
ul.css("transform", "translateX("+(imgNo*-1160)+"px)");
let intervalId;

function autoSlide() {
    intervalId = setInterval(function(){
        $(".next").click();
    }, 3*1000);
}
autoSlide();

$(".prev").on("click", function(){
    if(imgNo != 0) {
        clearInterval(intervalId); // 버튼 클릭하자마자 인터벌을 멈춤
        imgNo--;
        const move = -imgNo*width; // ul의 처음 위치가 기준
        ul.css("transform", "translateX("+move+"px)").css("transition-duration", "1s");
        if(imgNo == 0) {
            imgNo = imgCount-2;
            setTimeout(function(){
                const move = -imgNo*width; // ul의 처음 위치가 기준임!
                ul.css("transform", "translateX("+move+"px)").css("transition-duration", "0s");
            }, 1000);
        }
        autoSlide(); // 오토슬라이드를 다시 동작시킴
    }
});

$(".next").on("click", function(){
    if(imgNo != imgCount-1) {
        clearInterval(intervalId); // 버튼 클릭하자마자 인터벌을 멈춤
        imgNo++;
        const move = -imgNo*width; // ul의 처음 위치가 기준
        ul.css("transform", "translateX("+move+"px)").css("transition-duration", "1s");
        if(imgNo == imgCount-1) {
            imgNo = 1;
            setTimeout(function(){
                const move = -imgNo*width; // ul의 처음 위치가 기준임!
                ul.css("transform", "translateX("+move+"px)").css("transition-duration", "0s");
            },1000);
        }
        autoSlide(); // 오토슬라이드를 다시 동작시킴
    }
});