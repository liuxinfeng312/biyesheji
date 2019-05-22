from django.conf.urls import url

from axf import views

urlpatterns= [


    url(r'^$',views.home,name='home'),
    url(r'^market/$',views.market,name='marketbase'),
    url(r'^market/(?P<childid>\d+)/(?P<sortid>\d+)/$',views.market,name='market'),
    url(r'^mine/$',views.mine,name='mine'),
    url(r'^cart/$',views.cart,name='cart'),
    url(r'^register/$',views.register,name='register'),
    url(r"^login/$",views.login,name='login'),
    url(r'^logout/$',views.logout,name='logout'),
    url(r'^addcart/$',views.addcart,name='addcart'),
    url(r'^subcart/$',views.subcart,name='subcart'),
    url(r'^cart/$',views.cart,name='cart'),
    url(r'^changecartselect/$',views.changecartselect,name='changecartselect'),
    url(r'^changeall/$',views.changeall,name='changeall'),
    url(r'^generateorder/$', views.generateorder, name='generateorder'),  # 生成订单
    url(r'orderlist/$', views.orderlist, name='orderlist'),  # 订单列表
    url(r'^orderdetail/(?P<identifier>[\d.]+)/$', views.orderdetail, name='orderdetail'),  # 订单详情
#支付宝
    url(r'^returnurl/$', views.returnurl, name='returnurl'),  # 支付成功后，客户端的显示
    url(r'^appnotifyurl/$', views.appnotifyurl, name='appnotifyurl'),  # 支付成功后，订单的处理
    url(r'^pay/$', views.pay, name='pay'),  # 支付

]


