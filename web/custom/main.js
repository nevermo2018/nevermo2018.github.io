var data = [
	{
		id:1,
		q:'如何添加服务地址？'
	},
	{
		id:2,
		q:'没有我需要的服务项目怎么办？'
	},
	{
		id:3,
		q:'日常家庭保洁服务范围包含擦玻璃吗？'
	},
	{
		id:4,
		q:'如何预约周期服务？'
	}
]
;(function(w,$){
	bindData(data);
})(window,jQuery);

function bindData(data){
	var str = '';
	for(var i = 0 ; i < data.length ; i++){
		str +='<li><a href="detail?id='+data[i].id+'">'+data[i].q+'</a></li>';
	}
	$('.q').html(str);
}
