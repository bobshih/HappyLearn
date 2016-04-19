window.onload = function() {
    document.getElementById('content').innerHTML="";
    var addElement = function(id, name, tid, desc, limit, now, cate) {
        var element = `
            <div class="col col-md-4 col-sm-4 col-xs-6">
                <div class="courseFrame">
                    <div class="profile"><img src="`+"img/subject/"+cate+".jpg"+`" alt="`+cate+`" class="profileImg"></div>
                    <div class="courseInfo">
                      <input type="hidden" name="classid" value="`+id+`">
                      <input type="hidden" name="tid" value="`+tid+`">
                        <div class="coursePartic">
                            <nobr>
                                participants:`+now+`/`+limit+`</nobr>
                        </div>
                        <div class="courseName">
                            <nobr>course name:`+name+`</nobr>
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
        },
        error: function(xhr, status, message) {
            var errorM = "fail to get class info because: " + message;
            alert(errorM);
        }
    });
}
