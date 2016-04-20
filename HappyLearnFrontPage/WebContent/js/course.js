$(document).ready(
        function() {
            $("select[name='categoryDrop']").change(
                function() {
                    var url = "http://HappyLearnDataBase.eu-gb.mybluemix.net/FilterClass?category=" + $(this).val();
                    // alert(url);
                    var posting = $.ajax({
                        dataType: "text",
                        url: url,
                        success: function(data) {
                            document.getElementById('content').innerHTML = "";
                            console.log(data);
                            if(data.indexOf('[') === -1){
                                data = "["+data+"]";
                                console.log(data);
                            }
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
            );
        }
);
