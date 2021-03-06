window.onload = function() {
    document.getElementById('content').innerHTML="";
    var addElement = function(id, name, tid, desc, limit, now, cate) {
        var element = `
            <div class="col col-md-3 col-sm-4 col-xs-6">
              <div class="courseFrame" onclick=" coursePopToggle(`+id+`)">
                <div class="profile"><img src="`+"img/subject/"+cate+".jpg"+`" alt="`+cate+`" class="profileImg"></div>
                <div class="courseInfo">
                  <input type="hidden" name="classid" value="`+id+`">
                  <input type="hidden" name="tid" value="`+tid+`">
                  <input type="hidden" name="cate" value="`+cate+`">
                  <input type="hidden" name="name" value="`+name+`">
                  <input type="hidden" name="desc" value="`+desc+`">
                  <input type="hidden" name="limit" value="`+limit+`">
                  <input type="hidden" name="now" value="`+now+`">
                  <div class="coursePartic">
                    <nobr>
                      人數: `+now+`/`+limit+`</nobr>
                  </div>
                  <div class="courseName">
                    <nobr>課程名稱:`+name+`</nobr>
                  </div>
                </div>
              </div>
            </div>`;
        return element;
    }
    var url = "http://HappyLearnDataBase.eu-gb.mybluemix.net/Class";


    var posting = $.ajax({
        dataType: "text",
        url: url,
        success: function(data) {
            // alert("fff");
            console.log(data);
            var jsonArray = $.parseJSON(data);

            for (var i in jsonArray) {
                var json = jsonArray[i];
                console.log(json);
                var id = json.ID;
                var name = json.NAME;
                var desc = json.DESCRIPTION;
                var limit = json.LIMIT;
                var now = json.NOW;
                var cate = json.CATEGORY;
                var tid = json.TEACHERID;
                $("#content").append(addElement(id, name, tid, desc, limit, now, cate));
            }
            coursePopSetup();
        },
        error: function(xhr, status, message) {
            var errorM = "fail to get class info because: " + message;
            alert(errorM);
        }
    });
}
