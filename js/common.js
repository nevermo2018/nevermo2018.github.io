;(function(w,$){

  function Bufan(){
    //初始化
    this.init();
  }
  Bufan.prototype = {
    init:function(){
      // this._mask().open();
      //初始化html字体大小 rem使用
      this.initHtmlSize();
      //页面大小改变 初始化
  		w.onresize = function(){
  			w.bufan.initHtmlSize();
  		}
      //初始化head标签的返回事件
      this.goBack($('.goback'));

    },
    initHtmlSize:function(){
      document.documentElement.style.fontSize = document.documentElement.clientWidth/10+'px';
    },
    stop:function(){
      $.smartScroll = function(container, selectorScrollable) {
      	// 如果没有滚动容器选择器，或者已经绑定了滚动时间，忽略
      	if (!selectorScrollable || container.data('isBindScroll')) {
      		return;
      	}

      	// 是否是搓浏览器
      	// 自己在这里添加判断和筛选
      	var isSBBrowser;

      	var data = {
      		posY: 0,
      		maxscroll: 0
      	};

      	// 事件处理
      	container.on({
      		touchstart: function (event) {
      			var events = event.touches[0] || event;

      			// 先求得是不是滚动元素或者滚动元素的子元素
      			var elTarget = $(event.target);

      			if (!elTarget.length) {
      				return;
      			}

      			var elScroll;

      			// 获取标记的滚动元素，自身或子元素皆可
      			if (elTarget.is(selectorScrollable)) {
      				elScroll = elTarget;
      			} else if ((elScroll = elTarget.parents(selectorScrollable)).length == 0) {
      				elScroll = null;
      			}

      			if (!elScroll) {
      				return;
      			}

      			// 当前滚动元素标记
      			data.elScroll = elScroll;

      			// 垂直位置标记
      			data.posY = events.pageY;
      			data.scrollY = elScroll.scrollTop();
      			// 是否可以滚动
      			data.maxscroll = elScroll[0].scrollHeight - elScroll[0].clientHeight;
      		},
      		touchmove: function () {
      			// 如果不足于滚动，则禁止触发整个窗体元素的滚动
      			if (data.maxscroll <= 0 || isSBBrowser) {
      				// 禁止滚动
      				event.preventDefault();
      			}
      			// 滚动元素
      			var elScroll = data.elScroll;
      			// 当前的滚动高度
      			var scrollTop = elScroll.scrollTop();

      			// 现在移动的垂直位置，用来判断是往上移动还是往下
      			var events = event.touches[0] || event;
      			// 移动距离
      			var distanceY = events.pageY - data.posY;

      			if (isSBBrowser) {
      				elScroll.scrollTop(data.scrollY - distanceY);
      				elScroll.trigger('scroll');
      				return;
      			}

      			// 上下边缘检测
      			if (distanceY > 0 && scrollTop == 0) {
      				// 往上滑，并且到头
      				// 禁止滚动的默认行为
      				event.preventDefault();
      				return;
      			}

      			// 下边缘检测
      			if (distanceY < 0 && (scrollTop + 1 >= data.maxscroll)) {
      				// 往下滑，并且到头
      				// 禁止滚动的默认行为
      				event.preventDefault();
      				return;
      			}
      		},
      		touchend: function () {
      			data.maxscroll = 0;
      		}
      	});

      	// 防止多次重复绑定
      	container.data('isBindScroll', true);
      };
    },
    goBack:function($el){
      $el.on('click',function(){
        w.history.go(-1);
      })
    },
    initLoading:function(option){
        var count = 0 ;
        var imgs = option.imgs;
        var dir = option.dir;
        var that = this;
        var t1 = new Date().getTime();
        for(var i= 0 ; i <imgs.length ; i ++){
            var img = new Image();
            img.src = dir.replace(/\\$/,'')+'/'+imgs[i];
            var t2 = new Date().getTime();
            if(t2-t1>4000){
              that._mask().close();
              return;
            }
            img.error=img.onload = function(){
                count++;
                if(count===imgs.length){
                  that._mask().close()

                }
            }
        }
    },
    _mask:function(){
      function open(){

      }
      function close(){
        $('.loading-mask').remove();
      }
      return {
        open:open,
        close:close
      }
    }

  }
  w.bufan = new Bufan();
})(window,jQuery);
