
$(".contentdetail").eq(1).hide();  


$("#allAgreement").on("click",function(){
    const chk = $(this).is(":checked");
    if(chk){
        $(".agreeCheck").prop('checked',true);
    } else{
        $(".agreeCheck").prop('checked',false);
    }
});

    const nextbtn = $(".nextBtn");
    nextbtn.on("click",function(){
        const status = $("#privacyAgreement").is(":checked");
        if(status){
            const tab = $(".tabs>li");
            tab.css("color","#2c2d34").css("background-color","#fff");
            const tabs = $(".tabs>li").next();
            tabs.css("color","#fff").css("background-color","#E5A2A8");
            let index = nextbtn.index(this);
                $(".contentdetail").hide();
                $(".contentdetail").eq(1).show();         
        } else{
            alert("약관에 동의해주세요");
        }
    });


const members = ["user01","user02","user03"];
let idChkResult = false;
let pwChkResult = false;
let pwReChkResult= false;
let nameChkResult = false;
let phoneChkResult = false;


$("#id").on("keyup",function(event){
    //아이디 공백 확인
    const id = $("#id");
    const idComment = id.next();
    const idValue = id.val();
    if(idValue == ""){
        idComment.text("사용할 아이디를 입력하세요");
        idComment.css("color","red");
        idChkResult = false;
        event.preventDefault();
    }else{
        //아이디 유효성검사
        const idReg = /^[a-zA-Z0-9]{6,12}$/;
        if(idReg.test(idValue)){
            const searchIndex = members.indexOf(idValue);
            if(searchIndex== -1){
                idComment.text("사용 가능한 아이디 입니다");
                idComment.css("color","blue");
                idChkResult = true;
            }else{
                idComment.text("이미 사용중인 아이디입니다");
                idComment.css("color","red");
                idChkResult = false;
                event.preventDefault();
            }
        }else{
            idComment.text("아이디는 영어/숫자 조합으로 6~12글자 입니다.");
            idComment.css("color","red");
            idChkResult = false;
            event.preventDefault();
        }
    }
});

$("#pw").on("keyup",function(event){
    const pw = $("#pw");
    const pwComment = pw.next();
    const pwValue = pw.val();
    const pwReg = /^[a-zA-Z0-9]{8,12}$/;
    //비밀번호 공백확인
    if(pwValue == ""){
        pwComment.text("비밀번호를 입력하세요");
        pwComment.css("color","red");
        pwChkResult = false;
        event.preventDefault();
    }else if(pwReg.test(pwValue)){
        pwComment.text("사용가능합니다");
        pwComment.css("color","blue");
        pwChkResult = true;
    }else{
        pwComment.text("비밀번호는 영문자/숫자로 8~12글자 입니다.");
        pwComment.css("color","red");
        pwChkResult = false;
        event.preventDefault();
    }

});

$("#pwRe").on("keyup",function(event){
    const pw = $("#pw");
    const pwValue = pw.val();
    const pwRe = $("#pwRe");
    const pwRecomment = pwRe.next();
    const pwReValue = pwRe.val();
     //비밀번호 확인
    if(pwValue == pwReValue){
        //일치하는 비밀번호
        pwRecomment.text("비밀번호가 일치합니다.");
        pwRecomment.css("color","blue");
        pwReChkResult= true;
    }else{
        //일치하지 않는 비밀번호
        pwRecomment.text("비밀번호가 일치하지 않습니다");
        pwRecomment.css("color","red");
        pwReChkResult= false;
        event.preventDefault();
    }
});

$("#name").on("keyup",function(event){
    const name = $("#name");
    const nameValue = name.val();
    const nameComment = name.next();
    const nameReg = /^[가-힣]{2,7}$/
    //이름 공백 확인
    if(nameValue == ""){
        nameComment.text("이름을 입력해주세요");
        nameComment.css("color","red");
        nameChkResult = false;
        event.preventDefault();
    }else{
        if(nameReg.test(nameValue)){
            nameComment.text("사용가능합니다");
            nameComment.css("color","blue");
            nameChkResult = true;
        }else{
            nameComment.text("이름은 한글로 2~7글자 입니다.");
            nameComment.css("color","red");
            nameChkResult = false;
            event.preventDefault();
        }
    }
});

$("#phone").on("keyup",function(event){
    const phone = $("#phone");
    const phoneValue = phone.val();
    const phoneComment = phone.next();
    const phoneReg = /^[0-9]{10,12}$/
    //공백 확인
    if(phoneValue == ""){
        phoneComment.text("번호를 입력해주세요");
        phoneComment.css("color","red");
        phoneChkResult = false;
        event.preventDefault();
    }else{
        if(phoneReg.test(phoneValue)){
            phoneComment.text("사용가능합니다");
            phoneComment.css("color","blue");
            phoneChkResult = true;
        }else{
            phoneComment.text("번호를 다시 입력해주세요");
            phoneComment.css("color","red");
            phoneChkResult = false;
            event.preventDefault();
        }
    }
});

$(".btn").on("click",function(event){
    if(idChkResult && pwChkResult && pwReChkResult && nameChkResult && phoneChkResult){
        alert("가입에 성공하였습니다.");
    }else{
        alert("입력값을 확인하세요");
        // location.reload();
        event.preventDefault();
    }
});