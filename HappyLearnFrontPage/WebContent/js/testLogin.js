var userID = {key: 0};
$(document).ready(
    function() {
        var id = location.search.split('id=')[1];
        userID = id;
        console.log(userID);
        if (!$.isNumeric(id)) {
            alert("請先登入");
            location.href = 'login.html';
        } else {
            $(".profileA").click(function(){
                location.href='profilePage.html?id='+id;
            });
            $(".courseA").click(function(){
                location.href='courses.html?id='+id;;
            });
        }
    }
);
