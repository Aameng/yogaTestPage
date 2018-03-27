(function (doc, win) {
        var docEl = doc.documentElement,
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            recalc = function () {
                var clientWidth = docEl.clientWidth;
                if (!clientWidth) return;
                if(clientWidth>=640){
                    docEl.style.fontSize = '100px';
                }else{
                    docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
                }
            };

        if (!doc.addEventListener) return;
        win.addEventListener(resizeEvt, recalc, false);
        doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

    $(document).ready(function(){
    	$(".menuIcon").on("click touch",function(){
    		if($(".hideMenu").is(":hidden")){$(".hideMenu").slideDown();}
    		else{$(".hideMenu").slideUp();}   		
    	});   	
    	$(".closeIcon").on("click touch",function(){
    		$(".hideMenu").slideUp();
    	});
    	setTimeout(function(){
          minH();
        },100);
    	
    });
    window.onresize=function(){
    	minH();
    }
    function minH(){
    	//var minH=document.documentElement.clientHeight-Number($("html").css("font-size").substring(0,$("html").css("font-size").length-2))*1.5;
	    var bottomH=$(".bottomFixed").height();
	    var minH=document.documentElement.clientHeight-$(".topFixed").height()-bottomH;
	    //console.log($("html").css("font-size").substring(0,$("html").css("font-size").length-2));
    	// 用元素高度測試，加上marginBottom。
    	//console.log(minH);
    	$(".wrap").css({"min-height":minH,"margin-bottom":bottomH});
    }
    