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
        console.log($ball);

        $ball.animate({
            'top': (table.centerPt.y - $ball.height()/2) + 'px',
            'left': (table.centerPt.x - $ball.width()/2) + 'px',
        });
    };

    $(".start").on("click", function () {
        var table = new Table(1);
        var ball = new Ball(1);

        ball.moveTo(table);
    });

});
