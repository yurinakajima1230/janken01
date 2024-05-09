
$(function () {


    $('#gu_btn').on('click', function () {

    

        var userGu = 0;
        var pc = Math.floor(Math.random() * 3);
       
        

        if (pc === 0) {
            $("#pc_hands").html('グー');
            $("#judgment").html('Draw');
        } else if (pc === 1) {
            $("#pc_hands").html('チョキ');
            $("#judgment").html('★Win★');
        } else if (pc === 2) {
            $("#pc_hands").html('パー');
            $("#judgment").html('Lose');
        }

        $('#cho_btn').on('click', function () {
            $('#gu_btn').css('background-color', '');
        })

        $('#par_btn').on('click', function () {
            $('#gu_btn').css('background-color', '');
        })

        $('#result').show();

        var position = $('#result').offset().top;

        $("html,body").animate({
            scrollTop : position
        }, {
            queue : false
        });
     


    })



    $('#cho_btn').on('click', function () {

        $('#cho_btn');
        var userCho = 1;
        var pc = Math.floor(Math.random() * 3);

        if (pc === 0) {
            $("#pc_hands").html('グー');
            $("#judgment").html('Lose');
        } else if (pc === 1) {
            $("#pc_hands").html('チョキ');
            $("#judgment").html('Draw');
        } else if (pc === 2) {
            $("#pc_hands").html('パー');
            $("#judgment").html('★Win★');
        }

        $('#gu_btn').on('click', function () {
            $('#cho_btn').css('background-color', '');
        })

        $('#par_btn').on('click', function () {
            $('#cho_btn').css('background-color', '');
        })

        $('#result').show();

         var position = $('#result').offset().top;

         $("html,body").animate({
             scrollTop : position
         }, {
             queue : false
         });

    })

    $('#par_btn').on('click', function () {

        $('#par_btn');

        var userPar = 2;
        var pc = Math.floor(Math.random() * 3);

        if (pc === 0) {
            $("#pc_hands").html('グー');
            $("#judgment").html('★Win★');
        } else if (pc === 1) {
            $("#pc_hands").html('チョキ');
            $("#judgment").html('Lose');
        } else if (pc === 2) {
            $("#pc_hands").html('パー');
            $("#judgment").html('Draw');
        }

        $('#gu_btn').on('click', function () {
            $('#par_btn').css('background-color', '');
        })

        $('#cho_btn').on('click', function () {
            $('#par_btn').css('background-color', '');
        })
        $('#result').show();

         var position = $('#result').offset().top;

         $("html,body").animate({
             scrollTop : position
         }, {
             queue : false
         });

    })


})