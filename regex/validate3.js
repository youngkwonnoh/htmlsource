$(function() {
    $("#join").validate({
        // 규칙 명시
        rules:{
            userid:{
                required : true,
                validId : true,
            },
            userpw:{
                required : true,
                validPwd : true,
            },
            confirmpw:{
                required : true,
                validPwd : true,
                equalTo : "#userpw"
            },
            gender:{
                required : true
            },
            email:{
                required : true,
                email : true
            },
            mobile:{
                required : true,
                tel : true
            }
        },

        // 메세지 명시
        messages:{
            userid:{
                required : "아이디는 필수 요소입니다."
            },
            userpw:{
                required : "비밀번호는 필수 요소입니다."
            },
            confirmpw:{
                required : "비밀번호는 필수 요소입니다.",
                equalTo : "#이전 비밀번호와 다릅니다."
            },
            gender:{
                required : "성별을 확인해 주세요."
            },
            email:{
                required : "이메일은 필수 요소입니다."
            },
            mobile:{
                required : "핸드폰 번호는 필수 요소입니다."
            }
        }
    })
})

//사용자만의 규칙 정의
$.validator.addMethod("validId",function(value){
    const regId = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,12}$/;
    return regId.test(value);
}, "아이디는 영문자, 숫자의 조합으로 6~12자리로 만들어야 합니다.");
$.validator.addMethod("validPwd",function(value){
    const regPwd = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^*])[A-Za-z\d!@#$%^*]{8,16}$/;
    return regPwd.test(value);
}, "비밀번호는 영문자, 숫자, 특수문자의 조합으로 8~16자리로 만들어야 합니다.");
$.validator.addMethod("email",function(value){
    const regEmail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    return regEmail.test(value);
}, "이메일을 확인해 주세요.");
$.validator.addMethod("tel",function(value){
    const regMobile = /^\d{3}\d{4}\d{4}$/;
    return regMobile.test(value);
}, "핸드폰 번호를 확인해 주세요.(- 제외)");