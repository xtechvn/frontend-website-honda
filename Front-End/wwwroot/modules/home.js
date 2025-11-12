$(document).ready(function () {
    $(document).on('click', '.bt-dk', function (e) {
        var name = $('#name').val();
        var phone = $('#phone').val();
        var type = $('#type').val();
        var selectedRadio = $('input[name="radio-401"]:checked').val(); 
        $.ajax({
            url: "/Home/Dangky",
            type: "post",
            data: { name: name, phone: phone, type: type, selectedRadio: selectedRadio },
            success: function (result) {
               
                if (result.status == 1) {
                    $('.ss-dk-dl').html(result.msg)
                    $('.ss-dk-dl').attr('style', 'color:red;display:block')
                    setTimeout(function () {
                        $('#name').val('');
                        $('#phone').val('');
                        $('#popup').attr('style', 'color:red;display:none')
                    }, 2000);
                } else {
                    $('.ss-dk-dl').html(result.msg)
                    $('.ss-dk-dl').attr('style', 'color:red;display:block')
                }
                setTimeout(function () {
                    $('.ss-dk-dl').attr('style', 'color:red;display:none')
                }, 2000);
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                console.log("Status: " + textStatus);
            }
        });
    });
});
