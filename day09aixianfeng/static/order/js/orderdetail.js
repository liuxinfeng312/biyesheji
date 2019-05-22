$(function () {
    $('#alipay').click(function () {
        // 发起支付请求
        console.log('点击成功')
        // console.log($(this).attr('data-orderid')
        request_data = {
            'orderid': $(this).attr('data-orderid')
        }

        $.get('/axf/pay/', request_data, function (response) {
            console.log(response)
            if (response.status == 1){
                window.open(response.alipayurl, target='_self')
            }
        })
    })
})