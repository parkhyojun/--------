const view = $(".view");
const img  = $(".noti-img");

for(let i=0; i<view.length; i++){
    img.eq(i).on("click",function(){
        let span = view.eq(i).children();
        let spanText = span.text();
        let num = Number(spanText)+1;
        span.text(num);
    });
}