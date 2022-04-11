$(function () {
    //1.点击"去注册"
    $('#link_reg').on('click', function (e) {
        //  console.log(e.type);
        $(this).parent().hide().next().show()

    })
    //2.点击"去登陆"
    $('#link_login').on('click', function (e) {
        //  console.log(e.type);
        $(this).parent().hide().prev().show()
    })

})