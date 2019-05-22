$(function () {
    $('.cart').width(innerWidth)

    var index=$.cookie('index')

        // $('.type-slider li').eq(index).addClass('active')

  if (index){ // 有点击，有下标
        $('.type-slider li').eq(index).addClass('active')
    } else {
        $('.type-slider li:first').addClass('active')
    }

      $('.type-slider li').click(function () {


        $.cookie('index',$(this).index(),{expires:3,path:'/'})

    })

    var categoryShow=false
    $('#category-bt').click(function () {

        categoryShow = !categoryShow
        categoryShow ? categoryViewShow() : categoryViewHide()

        console.log('子类点击')

    })

 function categoryViewShow() {
        $('.category-view').show()
        $('#category-bt i').removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down')

        sortViewHide()
        sortShow = false
    }

    function categoryViewHide() {
        $('.category-view').hide()
        $('#category-bt i').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up')
    }



     var sortShow = false
    $('#sort-bt').click(function () {
        sortShow = !sortShow
        sortShow ? sortViewShow() : sortViewHide()

        console.log('排序点击')
    })

    function sortViewShow() {
        $('.sort-view').show()
        $('#sort-bt i').removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down')

        categoryViewHide()
        categoryShow = false
    }

    function sortViewHide() {
        $('.sort-view').hide()
        $('#sort-bt i').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up')
    }
    // #灰色蒙层
     $('.bounce-view').click(function () {
        sortViewHide()
        sortShow = false

        categoryViewHide()
        categoryShow = false
    })
//添加到购物车 点击功能

    $('.bt-wrapper>.glyphicon-chevron-right').click(function () {
        console.log('点击成功')
        goodid=$(this).attr('data-id')
        console.log(goodid)
        request_data={
            'goodid':goodid

        }
        var $that = $(this)
        $.get('/axf/addcart/',request_data,function (response) {
            console.log(response)

            if (response.statue==-1)
                window.open('/axf/login/','_self')
            else  if (response.statue ==1 ){
                $that.prev().html(response.number)

                console.log(45456)
            }
                $.cookie('back','market',{expires: 3,path: '/'})
        })

    //删除商品

    })

      $('.bt-wrapper>.glyphicon-chevron-left').click(function () {
            console.log('删减成功')
          var $that = $(this)
          goodid=$(this).attr('data-id')
          console.log(goodid)
          request_data={
                'goodid':goodid
          }

          $.get('/axf/subcart/',request_data,function (response) {

              console.log(response)
              if (response.statue==-2)
                window.open('/axf/login/','_self')
              else if(response.statue==1){
                  $that.next().html(response.number)
              }
                $.cookie('back','market',{expires: 3,path: '/'})
            //  else if (response.statue == 1) {
            //     // // $that.next().html(response.number
            //     // console.log(response.number))
            // }
          })




        })
})

