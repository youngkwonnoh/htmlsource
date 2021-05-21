// userid : 영문 대소문자, 숫자, 길이 6~12, 무조건 입력
// password : 영문 대소문자, 숫자, 특수문자(!@#$%*) 길이 8~16, 무조건 입력
// confirm_password : 영문 대소문자, 숫자, 특수문자(!@#$%*) 길이 8~16, 무조건 입력, password와 동일해야 함
// name : 2 ~ 4자리 허용, 한글
// gender : 둘 중 하나 무조건 입력
// email : 이메일 규칙 적용(emailregex.com)
// (?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])

// form submit 되면 form_validate()와 연결
$(function() {
    $("button:submit").click(function(e) {
        e.preventDefault();
        // userid 가져오기
        let userid = $("#userid");

        // 1234abc, Abc1234
        const userid_reg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,12}$/;

       if(!userid_reg.test(userid.val())) {
            $("small[id='userid']").html("아이디를 확인하세요");
        } else {
            $("small[id='userid']").html("");
        }
        
        // password 가져오기
        let password = $("#password");
        let confirm_password = $("#confirm_password");
    
        const password_reg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%*])[A-Za-z\d!@#$%*]{8,16}$/;

        if(!password_reg.test(password.val())) {
            $("small[id='password']").html("비밀번호를 확인하세요");
        } else {
            $("small[id='password']").html("");
        }
    
        if(!password_reg.test(confirm_password.val())) {
            $("small[id='confirm_password']").html("비밀번호를 확인하세요");
        } else {
            if(password.val() !== confirm_password.val()) {
                $("small[id='confirm_password']").html("이전 비밀번호를 확인하세요");
            } else {
                $("small[id='confirm_password']").html("");
            }
        }
        // name 가져오기
        let name = $("#name");

        const name_reg = /^[가-힣]{2,4}$/;
        
        if(!name_reg.test(name.val())) {
            $("small[id='name']").html("이름을 확인하세요");
        } else {
            $("small[id='name']").html("");
        }
        
        // 성별
        let gender = $("input:checked").length;

        if(gender==0) {
            $("small[id='gender']").html("성별을 확인해 주세요");
        } else {
            $("small[id='gender']").html("");
        }

        // email 가져오기
        let email = $("#email");

        const email_reg = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
        
        if(!email_reg.test(email.val())) {
        $("small[id='email']").html("이메일을 확인하세요");
        } else {
            $("small[id='email']").html("");
        }
    })
})












