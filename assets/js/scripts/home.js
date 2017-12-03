$(function() {
    $(document).on('show.bs.modal', '.modal', function () {
        var zIndex = 1040 + (10 * $('.modal:visible').length);
        $(this).css('z-index', zIndex);
        setTimeout(function() {
            $('.modal-backdrop').not('.modal-stack').css('z-index', zIndex - 1).addClass('modal-stack');
        }, 0);
    });

    $(".attr_plus").click(function(){
        var input = $(this).parent().parent().find('input');
        var val = input.val();
        input.val(parseInt(val) + 1);
    });

    $(".attr_minus").click(function(){
        var input = $(this).parent().parent().find('input');
        var val = input.val();
        input.val(parseInt(val) - 1);
    });

    $(".addArmor").click(function(){
        var html = '<tr>'+
                    '<td>' +
                        '<input class = "form-control" value = "">'+
                    '</td>' +
                    '<td>'+
                        '<input class = "form-control" value = "">'+
                    '</td>'+
                    '<td>'+
                    '<button class = "btn btn-danger dropRow">Drop</button>'+
                    '</td>'+
                    '</tr>';
        $("#armor_table").append(html);
    });

    $(".addWeapon").click(function(){
        var html = '<tr>'+
            '<td>' +
            '<input class = "form-control" value = "">'+
            '</td>' +
            '<td>'+
            '<input class = "form-control" value = "">'+
            '</td>'+
            '<td>'+
            '<button class = "btn btn-danger dropRow">Drop</button>'+
            '</td>'+
            '</tr>';
        $("#weapon_table").append(html);
    });

    $(".dropRow").click(function(){
        $(this).parent().parent().remove();
    });

    $(".dice_roll_btn").click(function(){
       $(".dice_result").html(Math.floor((Math.random() * 100) + 1));
    });

    tinymce.init({
        selector: '#storyline_description',
        height: 100,
        theme: 'modern',
        plugins: [
            'advlist autolink lists link image charmap print preview hr anchor pagebreak',
            'searchreplace wordcount visualblocks visualchars code fullscreen',
            'insertdatetime media nonbreaking save table contextmenu directionality',
            'emoticons template paste textcolor colorpicker textpattern imagetools codesample toc help'
        ],
        toolbar1: 'undo redo | insert | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
        toolbar2: 'print preview media | forecolor backcolor emoticons | codesample help',
        image_advtab: true,
        templates: [
            { title: 'Test template 1', content: 'Test 1' },
            { title: 'Test template 2', content: 'Test 2' }
        ],
        content_css: [
            '//fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
            '//www.tinymce.com/css/codepen.min.css'
        ]
    });

});