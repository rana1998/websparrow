$(function(){

    $('body').on("change","select[name='theme_id']",function () {
        var id= $(this).val();
        $.get("/ajax/theme/"+id+"/image",function (data) {
            $('#load_preview_data').html(data);
        });
    });

    var id= $('select[name="theme_id"]').val();
    if( id ) {
        if (id.length > 0) {
            $.get("/ajax/theme/" + id + "/image", function (data) {
                $('#load_preview_data').html(data);
            });
        }
    }

    $('#contact_form form').on("submit",function (e) {
        $(this).find("p.loading").show();
        e.preventDefault();
        $.ajax({
            "url" : "/contact",
            "type"    :   "POST",
            "data"   :   $(this).serialize(),
            "success" : function (data) {
                alert(data.message);
            },
            "error" : function (xhr, status, error) {
                var text = "";

                text += "";
                $.each(xhr.responseJSON.errors, function (i, key) {
                    text += key+"\n";
                });
                alert(text);
            },
            "complete": function (data) {
                $("#contact_form").find("p.loading").hide();
            }
        });
    });


});
