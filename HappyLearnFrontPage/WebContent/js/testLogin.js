    var testSession = function() {
        var id = location.search.split('id=')[1];
        if (!$.isNumeric(id)) {
            alert("請先登入");
            document.location.href = "../login.html";
            alert("ffff");
        }
    }
