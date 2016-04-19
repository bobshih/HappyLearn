window.onload = function() {
    alert("It's loaded!");
    var element = '<div class="col col-md-3 col-sm-4 col-xs-6">' + ' < div class = "courseFrame" > ' + ' < div class = "profile" > < img src = "" alt = "" class = "profileImg" > < /div>' + ' < div class = "courseInfo" > ' + ' < div class = "coursePartic" > participants: 2 / 3 < /div>' + ' < div class = "courseName" > course name: computer science1 < /div>' + ' < /div>' + ' < /div>' + ' < /div>';
    alert(element);
    // var loadClass = function() {
    //     var addElement = function(json) {
    //             // var element = '<div class="col col-md-3 col-sm-4 col-xs-6"> < div class = "courseFrame" >
    //             //     < div class = "profile" > < img src = ""
    //             // alt = ""
    //             // class = "profileImg" > < /div> < div class = "courseInfo" >
    //             //     < div class = "coursePartic" > participants: 2 / 3 < /div> < div class = "courseName" > course name: computer science1 < /div> < /div> < /div> < /div>';
    //             // alert(element);
    //         }
    //         // var jsonArray;
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
            }
        },
        error: function(xhr, status, message) {
            var errorM = "fail to get class info because: " + message;
            alert(errorM);
        }
    });
}
