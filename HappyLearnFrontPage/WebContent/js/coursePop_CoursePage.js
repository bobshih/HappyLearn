var main = function() {

  $('.coursePopClose').click(function() {
    $('.coursePop').toggle();
  });
  $('#desc').elastic();
  $('.coursePop').hide();
};

$(document).ready(main);

var coursePopSetup = function() {
  /* Push the body and the nav over by 285px over */
  $('.courseFrame').click(function() {
    document.getElementById('popForm').innerHTML = "";
    // $('.coursePop').fadeIn(500);

    var getName = function(id, name) {
      return $.ajax({
        dataType: "text",
        url: "http://HappyLearnDataBase.eu-gb.mybluemix.net/Account?id=" + id,
        success: function(data) {
          if (data === "[]") {
            alert("account id is not vaild, go back to login page");
            location.href = "login.html";
          }
          var json = jQuery.parseJSON(data);
          console.log(json.NICKNAME);
          name.key = json.NICKNAME;
          // console.log(name);
        },
        error: function(xhr, status, message) {
          var errorM = "fail to login because: " + message;
          alert(errorM);
        },
        async: false
      });
    }
    var getSubject = function(cate, subject) {
      return $.ajax({
        dataType: "text",
        url: "http://HappyLearnDataBase.eu-gb.mybluemix.net/Category?id=" + cate,
        success: function(data) {
          if (data === "[]") {
            alert("category id is not vaild, go back to login page");
            location.href = "login.html";
          }
          var json = jQuery.parseJSON(data);
          console.log(json.CATEGORYNAME);
          subject.key = json.CATEGORYNAME;
        },
        error: function(xhr, status, message) {
          var errorM = "fail to login because: " + message;
          alert(errorM);
        },
        async: false
      });
    }
    var id = $(this).children('.courseInfo').children("input[name='classid']").val();
    var tid = $(this).children('.courseInfo').children("input[name='tid']").val();
    var tname = {
      key: "tt"
    };
    getName(tid, tname);
    console.log(tname);
    var cate = $(this).children('.courseInfo').children("input[name='cate']").val();
    var cname = {
      key: "ff"
    };
    getSubject(cate, cname);
    console.log(cname);
    var name = $(this).children('.courseInfo').children("input[name='name']").val();
    var desc = $(this).children('.courseInfo').children("input[name='desc']").val();
    var limit = $(this).children('.courseInfo').children("input[name='limit']").val();
    var now = $(this).children('.courseInfo').children("input[name='now']").val();
    //
    var element = `<div class="coursePopClose">X</div><div class="popProfile"><img src="` + "img/subject/" + cate + ".jpg" + `" alt="` + cate + `" class="profileImg"></div>
        <div class="popInfo">
            <input type="hidden" id="tempclassid" value="` + id + `">
            <input type="hidden" id="temptid" value="` + tid + `">
            <input type="hidden" id="tempcate" value="` + cate + `">
            <input type="hidden" id="tempname" value="` + name + `">
            <input type="hidden" id="tempdesc" value="` + desc + `">
            <input type="hidden" id="templimit" value="` + limit + `">
            <input type="hidden" id="tempnow" value="` + now + `">
            <table>
                <tr>
                    <td class="attr">
                        課程名稱:
                    </td>
                    <td class="field">
                        ` + name + `
                    </td>
                </tr>
                <tr>
                    <td class="attr">
                        講師:
                    </td>
                    <td class="field">
                        ` + tname.key + `
                    </td>
                </tr>
                <tr>
                    <td class="attr">
                        科目 :
                    </td>
                    <td class="field">
                        ` + cname.key + `
                    </td>
                </tr>
                <tr>
                    <td class="attr">
                        人數上限 :
                    </td>
                    <td class="field">
                        ` + limit + `
                    </td>
                </tr>
                <tr>
                    <td class="attr">
                        目前人數 :
                    </td>
                    <td class="field">
                        ` + now + `
                    </td>
                </tr>
                <tr class="desc">
                    <td class="attr">
                        課程說明 :
                    </td>
                    <td class="field">

                    </td>
                </tr>
            </table>

            <textarea id="desc">` + desc + `</textarea><input type="button" id="goToClass" value="參加課程">`;
    $('#popForm').append(element);
  $('.coursePop').fadeIn(500);
    $('.coursePopClose').click(function() {
      $('.coursePop').toggle();
    });

    if (limit === now) {
      $('#goToClass').attr("disabled", true);
    } else {
      $('#goToClass').click(
        function() {
          var flag = {
            key: 0
          };
          var testInClass = function(cid, sid) {
            $.ajax({
              dataType: "text",
              url: "http://HappyLearnDataBase.eu-gb.mybluemix.net/add?id=" + cid + "&sid=" + sid,
              success: function(data) {
                if (data === "[]") {
                  alert("not in class");
                  flag.key = 1;
                }
              },
              error: function(xhr, status, message) {
                var errorM = "fail to login because: " + message;
                alert(errorM);
              },
              async: false
            });
          }
          var id = $('#tempclassid').val();
          var inputdata = {
            id: id,
            studentid: userID
          };
          testInClass(id, userID);
          if (flag.key === 0) {
            alert("你已經在教室中了");
            return;
          } else {
            $.ajax({
              type: "POST",
              data: inputdata,
              url: "http://HappyLearnDataBase.eu-gb.mybluemix.net/InClass",
              dataType: "text",
              success: function(data) {
                if (data === "[]") {
                  alert("你被加進教室了");
                  location.reload();
                  // $('.coursePop').toggle();
                }
              },
              error: function(xhr, status, message) {
                var errorM = "fail to login because: " + message;
                alert(errorM);
              },
              async: false
            });
          }
        });
    }
  });
}
