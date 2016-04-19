$(document).ready(
    function() {
        var login = function() {
            $('#login').attr("disabled", true);
            var email = document.getElementsByName('email')[0].value;
            var password = document.getElementsByName('password')[0].value;
            var url = "http://HappyLearnDataBase.eu-gb.mybluemix.net/Account?email=" + email + "&password=" + password;
            alert(url);
            var posting = $.ajax({
                dataType: "text",
                url: url,
                success: function(data) {
                    alert("fff"+data+"fff");
                    if (data === "[]") {
                        alert("json is null");
                        $('#login').attr("disabled", false);
                        return;
                    }
                    var json = jQuery.parseJSON(data);
                    document.location.href = "profile.html";
                },
                error: function(xhr, status, message) {
                    var errorM = "fail to login because: " + message;
                    alert(errorM);
                },
                async: false
            });
        }

        $('#login').click(login);
    }
);
