$(document).ready(
    function() {
        var flag;
        var testEmail = function(email) {
            // var email = $("input[name='email']").val();
            if (email.indexOf('@') == -1) {
                alert("this is not a valid email");
                return false;
            } else {
                var url = "https://HappyLearnDataBase.eu-gb.mybluemix.net/TestAddress";
                var inputdata = {
                    email: email
                };
                var posting = $.ajax({
                    type: "POST",
                    url: url,
                    data: inputdata,
                    success: function(fdata) {
                        // alert("in success");
                        if (fdata['1']) {
                            // alert(1);
                            alert("this email has been used");
                            $("#register").attr("disabled", false);
                            flag = 0;
                        }
                    },
                    datatype: "json",
                    async: false
                });
            }
            return true;
        }
        var testPassword = function(password) {
            if (password.length <= 5) {
                alert("the length of password is not enough");
                return false;
            }
            return true;
        }
        var testConfirmPassword = function(password, confirm) {
            if (password != confirm) {
                alert("Confirmation mismatched");
                return false;
            }
            return true;
        }

        var submit = function() {
            flag = 1;
            var email = $("input[name='email']").val();
            var password = $("input[name='password']").val();
            var confirm = $("input[name='confirm']").val();
            var nick = $("input[name='nickname']").val();
            var skill = $.trim($("textarea[name='skill']").val());

            $(this).attr("disabled", true);
            if (!testEmail(email)) {
                alert("email failed");
                $(this).attr("disabled", false);
                return false;
            }
            if (!testPassword(password)) {
                $(this).attr("disabled", false);
                return false;
            }
            if (!testConfirmPassword(password, confirm)) {
                $(this).attr("disabled", false);
                return false;
            }

            if (flag) {
                var insertUrl = "http://HappyLearnDataBase.eu-gb.mybluemix.net/Account";
                var temp = $.ajax({
                    type: "POST",
                    url: insertUrl,
                    data: {
                        email: email,
                        password: password,
                        nickname: nick,
                        skills: skill
                    },
                    success: function(fdata) {
                        alert("register successfully, pls login from home page");
                        document.location.href = "home.html";
                    },
                    error: function(xhr, status, message) {
                        var errorM = "fail to register because: " + message;
                        alert(errorM);
                    },
                    datatype: "json",
                    async: false
                });
            }
        }

        $("#register").click(submit);
    }
);
