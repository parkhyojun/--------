$(".loginbtn").on("click",function(event){
    event.preventDefault();
    $(".modal").css("display","flex");
});
$(".material-symbols-outlined").on("click",function(){
    $(".modal").css("display","none");
});

