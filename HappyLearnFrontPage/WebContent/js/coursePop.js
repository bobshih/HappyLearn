var main = function() {
    $('.coursePopClose').click(function() {
        $('.coursePop').toggle();
    });
    $('#desc').elastic();
    $('.coursePop').hide();
};

$(document).ready(main);

var coursePopSetup = function(){
    /* Push the body and the nav over by 285px over */
    $('.courseFrame').click(function() {
        $('.coursePop').toggle();
        // <input type="hidden" name="classid" value="`+id+`">
        // <input type="hidden" name="tid" value="`+tid+`">
        // <input type="hidden" name="cate" value="`+cate+`">
        // <input type="hidden" name="name" value="`+name+`">
        // <input type="hidden" name="desc" value="`+desc+`">
        // <input type="hidden" name="limit" value="`+limit+`">
        // <input type="hidden" name="now" value="`+now+`">
        var getName = function(id){
            alert("id = "+id);
            var posting = $.ajax({
                dataType: "text",
                url: "http://HappyLearnDataBase.eu-gb.mybluemix.net/Account?id=" + id,
                success: function(data) {
                    if (data === "[]") {
                        alert("account id is not vaild, go back to login page");
                        location.href = "login.html";
                    }
                    var json = jQuery.parseJSON(data);
                    console.log(json.NICKNAME);
                    return json.NICKNAME;
                },
                error: function(xhr, status, message) {
                    var errorM = "fail to login because: " + message;
                    alert(errorM);
                    return -1;
                },
                async: true
            });
        }
        var getSubject = function(cate){
            alert("category id = "+cate);
            var posting = $.ajax({
                dataType: "text",
                url: "http://HappyLearnDataBase.eu-gb.mybluemix.net/Category?id=" + cate,
                success: function(data) {
                    if (data === "[]") {
                        alert("category id is not vaild, go back to login page");
                        location.href = "login.html";
                    }
                    var json = jQuery.parseJSON(data);
                    console.log(json.CATEGORYNAME);
                    return json.CATEGORYNAME;
                },
                error: function(xhr, status, message) {
                    var errorM = "fail to login because: " + message;
                    alert(errorM);
                    return -1;
                },
                async: true
            });
        }
        var id = $(this).children('.courseInfo').children("input[name='classid']").val();
        var tid = $(this).children('.courseInfo').children("input[name='tid']").val();
        var tname = getName(tid);
        alert(tname);
        var cate = $(this).children('.courseInfo').children("input[name='cate']").val();
        var cname = getSubject(cate);
        alert(cname);
        var name = $(this).children('.courseInfo').children("input[name='name']").val();
        var desc = $(this).children('.courseInfo').children("input[name='desc']").val();
        var limit = $(this).children('.courseInfo').children("input[name='limit']").val();
        var now = $(this).children('.courseInfo').children("input[name='now']").val();
        $('.popProfile').attr("src", "img/subject/"+cate+".jpg");
        // alert($('.popProfile').attr("src"));
        // $('.popInfo table tr .field')[0].val(name);
        var element = `<div class="popProfile"><img src="`+"img/subject/"+cate+".jpg"+`" alt="`+cate+`" class="profileImg"></div>
        <div class="popInfo">
            <table>
                <tr>
                    <td class="attr">
                        Coures Name:
                    </td>
                    <td class="field">
                        `+name+`
                    </td>
                </tr>
                <tr>
                    <td class="attr">
                        Teacher Name:
                    </td>
                    <td class="field">
                        `+tname+`
                    </td>
                </tr>
                <tr>
                    <td class="attr">
                        Subject :
                    </td>
                    <td class="field">
                        `+cname+`
                    </td>
                </tr>
                <tr>
                    <td class="attr">
                        Limit :
                    </td>
                    <td class="field">
                        `+limit+`
                    </td>
                </tr>
                <tr>
                    <td class="attr">
                        Participants :
                    </td>
                    <td class="field">
                        `+now+`
                    </td>
                </tr>
                <tr>
                    <td class="attr">
                        Description :
                    </td>
                    <td class="field">
                        <textarea id="desc" rows="0">`+desc+`</textarea>
                    </td>
                </tr>
            </table>`;
            alert(element);
            $('.courseForm .pop').append(element);
    });
}
