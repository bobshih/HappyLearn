$(document).ready(
    function() {
        var id = location.search.split('id=')[1];
        if (!$.isNumeric(id)) {
            alert("請先登入");
            location.href = 'login.html';
        }
    }
);
