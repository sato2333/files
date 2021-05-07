/*feifei js plus
update:2017.11.11*/
var feifei_plus = {
	'news_content':function(){//资讯详情页图片
		$('.news-detail .news-content img').addClass("img-responsive");
	},
	'user_login':function(){//静态登录处理
		if($('.ff-user').length && (cms.urlhtml == 1)){
			$('.ff-user').html($('.ff-user').html().replace('登录','我的'));
		}
	},
	'fixed_ads':function(){//悬浮广告
		$(".ff-fixed").each(function(i){
			feifei.scroll.fixed($(this).attr('id'), 60);
		});
	},
	'index_tabs':function(){//首页分类AJAX
		$(".index").on('click', '.nav-tabs a', function(){
			$id = $(this).attr("data-target");
			$url = $(this).attr('data-url');
			$($id).html('<p class="text-center"><i class="fa fa-spinner fa-spin"></i> loading...</p>');
			$(".ff-page-more").hide();
			$.get($url, function(data){
				if(data){
					$($id).html(data);
					$($id+" .ff-img").lazyload();
					$(".ff-page-more").attr("data-page",1).attr("data-url", $url).show();
				}else{
					$($id).html('暂无数据。');
					$(".ff-page-more").hide();
				}
			},'html');
		});
	}
}
$(document).ready(function(){
	//feifei.cms.pre();
	feifei_plus.user_login();
	feifei_plus.fixed_ads();
	feifei_plus.index_tabs();
	feifei_plus.news_content();
})
$(function () {//弹出二维码
	$("[data-toggle='popover']").popover();
});