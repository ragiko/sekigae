$(function () {

    $(".button1").on("click", function () {

        var top = $("#table-1").position().top;
        var left = $("#table-1").position().left;
        var width = $("#table-1").width();
        var height = $("#table-1").height();
        var tableCenterPt = {
            x: left + width/2,
    y: top + height/2,
        }

        // init
        var position = $("#ball-1").position();

        $("#ball-1").css({
            top: position.top,
            left: position.left,
            position: 'absolute', 
        });


        // ball move
        $("#ball-1").animate({
            'top': (tableCenterPt.y - $("#ball-1").height()/2) + 'px',
            'left': (tableCenterPt.x - $("#ball-1").height()/2) + 'px',
        });
    });

    $(".button2").on("click", function () {

        var top = $("#table-2").position().top;
        var left = $("#table-2").position().left;
        var width = $("#table-2").width();
        var height = $("#table-2").height();
        var tableCenterPt = {
            x: left + width/2,
            y: top + height/2,
        }

        // init
        var position = $("#ball-2").position();

        $("#ball-2").css({
            top: position.top,
            left: position.left,
            position: 'absolute', 
        });

        // ball move
        $("#ball-2").animate({
            'top': (tableCenterPt.y - $("#ball-1").height()/2) + 'px',
            'left': (tableCenterPt.x - $("#ball-1").height()/2) + 'px',
        });
    });
});
