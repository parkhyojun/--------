const li = $(".step-ul>li");
li.on("click", function(){
    li.removeClass("active-tab");
    $(this).addClass("active-tab");
    const index = li.index(this);
    const content = $(".step-content");
    content.css("display", "none");
    content.eq(index).css("display", "block");
});

li.eq(0).click(); // 첫 탭메뉴 강제 실행

const stepBtn = $(".step-btn");
stepBtn.on("click", function(){
    const index = stepBtn.index(this);
    if(index != stepBtn.length-1) { // step 마지막 인덱스가 아니면
        li.eq(index+1).click();
        if(index == stepBtn.length-2) {
            stepBtn.eq(index+1).text("방문 예약");
        }
    } else { // step 마지막 인덱스면
        $(".adopt-modal-wrap").css("display", "flex");
    }
});

$("#adopt-close").on("click", function(){
    $(".adopt-modal-wrap").css("display", "none");
});

$("#adopt-submit").on("click", function(event){
    // 이름 한글로 2~5글자
    const nameReg = /^[가-힣]{2,5}$/;
    const name = $("#adopt-name");
    const nameValue = name.val();
    const nameLabel = $("#adopt-name-label");

    const phoneReg = /^[0-9]{10,11}$/;
    const phone = $("#adopt-phone");
    const phoneValue = phone.val();
    const phoneLabel = $("#adopt-phone-label");
    
    phoneLabel.css("color", "black");
    nameLabel.css("color", "black");

    if(!nameReg.test(nameValue)) {
        nameLabel.css("color", "red");
        event.preventDefault();
    } else {
        nameLabel.css("color", "black");
        if(!phoneReg.test(phoneValue)) {
            phoneLabel.css("color", "red");
            event.preventDefault();
        } else {
            phoneLabel.css("color", "black");
        }
    }
});