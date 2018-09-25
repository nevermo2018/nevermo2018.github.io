;(function(){
	initData()
})();
function initData(){
	// 这是主营业务和各个分页面的点击跳转链接的json数据key=a.id,value=域名
	var urlArr = {
		"ri_cbj":"ri_cbj",
		"kong_fkh":"kong_fkh",
		"zhuan_ycbl":"zhuan_ycbl",
		"chu_fxz":"chu_fxz",
		"di_bdl":"di_bdl",
		"di_tqx":"di_tqx",
		"chuang_lqx":"chuang_lqx",
		"jia_jby":"jia_jby",
		"sha_fby":"sha_fby",
		"wei_sjxd":"wei_sjxd",
		"fang_wxd":"fang_wxd",
		"chuang_dqx":"chuang_dqx",
		"shi_ccst":"shi_ccst",
		"ci_zmf":"ci_zmf",
		"jing_mcl":"jing_mcl",
		"jia_qcl":"jia_qcl",
		"guan_dst":"guan_dst",
		"you_yj":"you_yj",
		"deng_jqx":"deng_jqx",
		"geng_dfw":"more"
	};
	// 这是banner和主营业务icon的轮播
	var mySwiper = new Swiper('.swiper-container');
	// 这是礼品卡的轮播
	var swiper = new Swiper('.card-swiper', {
			slidesPerView: 'auto',
			centeredSlides: true,
			paginationClickable: true,
	});
	// 这是给每一个主营业务的a标签填充href属性
	addUrl();
	// 这是页面底部的4个按钮的点击事件，点击更换样式(加上小黄点)
	changeStyle();


	function addUrl(){
		var arr = $('.bussiness .icon-list .icon-detail').children('a');
		var arr1 = [];
		var arr2 = [];
		for(var i in urlArr){
			arr1.push(i);
			arr2.push(urlArr[i]);
		}
		for(var i=0;i<arr.length;i++){
			// console.log(arr[i]);
			if(arr1[i] == arr[i].id){
				var str = '';
				str += 'web/mainType/'+arr2[i];
				arr[i].href = str;
			}

		}
	}
	function changeStyle(){
		$('.footer ul li').on('click',function(){
			$('.footer ul .active').removeClass('active');
			$(this).addClass('active');
		});
	}
}
// 这里装着旧版本
/**
var urlArr = {
	"ri_cbj":"ri_cbj",
	"kong_fkh":"kong_fkh",
	"zhuan_ycbl":"zhuan_ycbl",
	"chu_fxz":"chu_fxz",
	"di_bdl":"di_bdl",
	"di_tqx":"di_tqx",
	"chuang_lqx":"chuang_lqx",
	"jia_jby":"jia_jby",
	"sha_fby":"sha_fby",
	"wei_sjxd":"wei_sjxd",
	"fang_wxd":"fang_wxd",
	"chuang_dqx":"chuang_dqx",
	"shi_ccst":"shi_ccst",
	"ci_zmf":"ci_zmf",
	"jing_mcl":"jing_mcl",
	"jia_qcl":"jia_qcl",
	"guan_dst":"guan_dst",
	"you_yjqx":"you_yjqx",
	"deng_jqx":"deng_jqx",
	"geng_dfw":"geng_dfw"
};
// 这是banner和主营业务icon的轮播
var mySwiper = new Swiper('.swiper-container');
// 这是礼品卡的轮播
var swiper = new Swiper('.card-swiper', {
		slidesPerView: 'auto',
		centeredSlides: true,
		paginationClickable: true,
});
// 这是主营业务和各个分页面的点击跳转链接
function addUrl(){
	var arr = $('.bussiness .icon-list .icon-detail').children('a');
	var arr1 = [];
	var arr2 = [];
	for(var i in urlArr){
		arr1.push(i);
		arr2.push(urlArr[i]);
	}
	for(var i=0;i<arr.length;i++){
		// console.log(arr[i]);
		if(arr1[i] == arr[i].id){
			var str = '';
			str += 'web/mainType/'+arr2[i];
			arr[i].href = str;
		}

	}
}
addUrl();
// 这是页面底部的4个按钮的点击事件，点击更换样式(加上小黄点)
$('.footer ul li').on('click',function(){
	$('.footer ul .active').removeClass('active');
	$(this).addClass('active');
});
**/
