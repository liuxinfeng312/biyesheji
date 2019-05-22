$(function () {
    $('.mine').width(innerWidth)

    $('#login-a').click(function () {
        console.log('点击成功')
        $.cookie('back','mine',{expires:3,path:'/'})
        window.open('/axf/login/',_self)

    })

})