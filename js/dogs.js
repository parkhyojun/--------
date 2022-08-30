const heart = $(".heart");
const heartPic = $(".material-symbols-outlined");


for(let i =0 ; i<heart.length; i++){
    heart.eq(i).on("click",function(){

        if(heartPic.eq(i).css("color") == "rgb(105, 105, 105)") {
            heartPic.eq(i).css("color","red");
            let span = $(this).children().last();
            let spanText = span.text();
            let num = Number(spanText)+1;
            span.text(num);
            
        } else if(heartPic.eq(i).css("color") == "rgb(255, 0, 0)") {
            heartPic.eq(i).css("color","dimgrey");
            let span = $(this).children().last();
            let spanText = span.text();
            let num = Number(spanText)-1;
            span.text(num);
        }
    });
}

const btn = $(".more");
const btn1 = $(".more2");
const hidden = $(".hid");

btn.on("click",function(){
    if(hidden.hasClass('vis')){
        hidden.addClass('unvis').removeClass('vis');
        btn1.text("더 보기");
    }else if(hidden.hasClass("unvis")){
        hidden.addClass('vis').removeClass("unvis");
        btn1.text("접 기");
    }
});