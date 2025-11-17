$(document).ready(function () {
    setTimeout(function () {
        $('#popup').show();
    }, 1000);
    $(document).on('click', '.bt-dk', function (e) {
        var name = $('#name').val();
        var phone = $('#phone').val();
        var type = $('#type').val();
        if (name == '' || name == undefined) {
            $('.name-error').show();
            return false
        }
        if (phone == '' || phone == undefined) {
            $('.phone-error').show();
            return false
        }

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
var _home = {
    showname: function () {
        var name = $('#name').val();
        if (name == '' || name == undefined) {
            $('.name-error').show();
            
        } else {
            $('.name-error').hide();
        }
        
    },
    showphone: function () {

        var phone = $('#phone').val();
        const phoneRegex = /^(0[3|5|7|8|9])[0-9]{8}$/;
        if (!phoneRegex.test(phone.value.trim())) {
            $('.phone-error').html("Số điện thoại không đúng định dạng.");         
        }
        if (phone == '' || phone == undefined) {
            $('.phone-error').html("Số điện thoại không được bỏ trống.");
            $('.phone-error').show();
            
        } else {
            $('.phone-error').hide();
        }
    }
}