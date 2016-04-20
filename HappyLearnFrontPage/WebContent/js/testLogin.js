$(document).ready(
    function() {
        var id = location.search.split('id=')[1];
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
