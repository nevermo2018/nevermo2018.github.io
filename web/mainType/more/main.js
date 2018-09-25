;(function(){
  initData('bjfw');
})();
function initData(id){
  var data ={
      bjfw:['家庭保洁','空房保洁','专业擦玻璃','房屋消毒','房屋消毒(含保洁)'],
      jjby:['家具包养','地板打蜡','厨房深度保洁','沙发保养','卫生间深度保洁'],
      qxfw:['窗帘清洗','地毯清洗','洗衣机清洗','空调清洗','燃气灶清洗','灯具清洗','消毒柜清洗','床垫清洗','热水器清洗','冰箱清洗'],
      jkyh:['管道疏通','甲醛处理','石材晶面处理','石材地板美缝','石材地板除渗透']
    }
  bindActive(id);
  bindHtml(id);

  function bindHtml(id){
    var str = '';
    var arr = data[id];
    for(var i = 0 ; i < arr.length-1 ; i++){
      str += '<span class="type-block">'+arr[i]+'</span>';
    }
    $('.content-body').html(str);
  }
  function bindActive(id){
    $('.aside .active').removeClass('active');
    $('#'+id).parent().addClass('active');
  }
}
