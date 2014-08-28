$(function () {

    'use strict';

    var Table = function (tableId) {
        this.id = tableId;
        this.centerPt = {
            x: $("#table-"+this.id).position().left + $("#table-"+this.id).width()/2,
            y: $("#table-"+this.id).position().top + $("#table-"+this.id).height()/2,
        };
    };

    var Ball = function (ballId) {
        this.id = ballId;
        var $ball = $("#ball-"+this.id);

        // init
        $ball.css({
            top: $ball.position().top,
            left: $ball.position().left,
            position: 'absolute', 
        });
    };

    Ball.prototype.moveTo = function(table) {
        var $ball = $("#ball-"+this.id);

        $ball.animate({
            'top': (table.centerPt.y - $ball.height()/2) + 'px',
            'left': (table.centerPt.x - $ball.width()/2) + 'px',
        });
    };

    

    function ballsMove() {
        // init
        var tables = [];
        var balls = [];

        var tableIds = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
        var ballIds = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

        // random
        ballIds = _.shuffle(ballIds);
        var ballsToTables = _.zip(ballIds, tableIds);

        for (var i = 1; i <= tableIds.length; i++) {
            tables.push(new Table(i));
            balls.push(new Ball(i));
        }

        $.each(ballsToTables, function () {
            balls[this[0]-1].moveTo(tables[this[1]-1]);
        });
    }

    // 定期実行
    var intervalID;

    $(".start").on("click", function () {
        $(this).toggleClass("startClicked");

        // start
        if ($(this).hasClass("startClicked")) {
            // DOM変更
            $(this)
                .text("stop")
                .css({"background-color": "#2980b9"});

            $(".ball").removeClass("animated pulse");
    
            // Timer
            ballsMove();
            intervalID = setInterval(ballsMove, 500);
    
            // 音楽再生
            $("#mery")[0].play();
        // stop
        } else {
            // DOM変更 
            $(this)
                .text("start")
                .css({"background-color": "#e74c3c"})
                
            $(".ball").addClass("animated pulse");
                               
            // Timer削除
            clearInterval(intervalID);
    
            // 音楽再生
            $("#mery")[0].pause();
            $("#finish")[0].play();
        }
    });

});
