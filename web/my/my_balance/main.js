var $gragBlock = $('.grag-block'); //获取拖动滑块
var $jia = $('.jia'); //获取＋按钮
var $jian = $('.jian');//获取-按钮
var $num = $('#num'); //获取+ - num值 
var $sum = $('#sum');// 获取合计值

$gragBlock.on('mousedown',function(){
   $('body').mousemove(function(e){
        var e = e || window.event;
        var x = e.screenX;
        console.log(x);
        $gragBlock.css({
            left:(x-48)+'px'
        })
   })

   $('body').mouseup(function(){
       console.log('解除')
       $('body').unbind('mousemove');
   })

})

$jia.click(function(){
    // alert(typeof $num.html());
    var num = $num.html();
    num = parseInt(num)
    $num.html( ++num  )
})

$jian.click(function(){
    // alert(typeof $num.html());
    var num = $num.html();
    num = parseInt(num)
    $num.html( --num  )
})