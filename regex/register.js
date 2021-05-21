// userid : 영문 대소문자, 숫자, 길이 6~12, 무조건 입력
// password : 영문 대소문자, 숫자, 특수문자(!@#$%*) 길이 8~16, 무조건 입력
// confirm_password : 영문 대소문자, 숫자, 특수문자(!@#$%*) 길이 8~16, 무조건 입력, password와 동일해야 함
// name : 2 ~ 4자리 허용, 한글
// gender : 둘 중 하나 무조건 입력
// email : 이메일 규칙 적용(emailregex.com)
// (?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])

// form submit 되면 form_validate()와 연결
document.querySelector("form").addEventListener("submit", form_validate);

function form_validate(event) {
    event.preventDefault(); // submit 되지 않도록 이벤트 제어

    // userid 가져오기
    let userid = document.querySelector("#userid");

    // 1234abc, Abc1234
    const userid_reg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,12}$/;

    if(!userid_reg.test(userid.value)) {
        document.querySelector("small[id='userid']").innerHTML="아이디를 확인하세요";
    } else {
        document.querySelector("small[id='userid']").innerHTML="";
    }
    
    
    // password 가져오기
    let password = document.querySelector("#password");
    let confirm_password = document.querySelector("#confirm_password");
    
    const password_reg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%*])[A-Za-z\d!@#$%*]{8,16}$/;

    if(!password_reg.test(password.value)) {
        document.querySelector("small[id='password']").innerHTML="비밀번호를 확인하세요";
    } else {
        document.querySelector("small[id='password']").innerHTML="";
    }
    
    if(!password_reg.test(confirm_password.value)) {
        document.querySelector("small[id='confirm_password']").innerHTML="비밀번호를 확인하세요";
    } else {
        if(password.value !== confirm_password.value) {
            document.querySelector("small[id='confirm_password']").innerHTML="이전 비밀번호를 확인하세요";
        } else {
            document.querySelector("small[id='confirm_password']").innerHTML="";
        }
    }
     // name 가져오기
    let name = document.querySelector("#name");

    const name_reg = /^[가-힣]{2,4}$/;
 
    if(!name_reg.test(name.value)) {
        document.querySelector("small[id='name']").innerHTML="이름을 확인하세요";
    } else {
        document.querySelector("small[id='name']").innerHTML="";
    }
    
     // 성별
    let gender = document.querySelectorAll("input[type='radio']");
    console.log(gender);

    let checked=false;
    for(var i=0;i<gender.length;i++) {
        if(gender[i].checked) {
            checked=true;
            break;
        }
    }

    if(!checked){
        document.querySelector("small[id='gender']").innerHTML="성별을 확인하세요";
    } else {
        document.querySelector("small[id='gender']").innerHTML="";
    }

     // email 가져오기
    let email = document.querySelector("#email");

    const email_reg = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  
    if(!email_reg.test(email.value)) {
        document.querySelector("small[id='email']").innerHTML="이메일을 확인하세요";
    } else {
        document.querySelector("small[id='email']").innerHTML="";
    }
}