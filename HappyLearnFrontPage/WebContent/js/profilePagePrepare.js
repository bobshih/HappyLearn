$(document).ready(
    function() {
        var id = location.search.split('id=')[1];
        alert(id);
        var selfInfo = function(){
            var url = "http://HappyLearnDataBase.eu-gb.mybluemix.net/Account?id=" + id;
            var posting = $.ajax({
                dataType: "text",
                url: url,
                success: function(data) {
                    alert("here");
                    if (data === "[]") {
                        alert("json is null");
                        $('#login').attr("disabled", false);
                        return;
                    }
                    var json = jQuery.parseJSON(data);
                    console.log(json);
                    $('#uid').val(json.ID);
                    $('#pass').val(json.PASSWORD);
                    $('#unickname').text(json.NICKNAME);
                    $('#uemail').text(json.EMAIL);
                    $('#uskill').text(json.SKILLS);
                },
                error: function(xhr, status, message) {
                    var errorM = "fail to login because: " + message;
                    alert(errorM);
                },
                async: false
            });
        }
        selfInfo();

        var 
    }
);
