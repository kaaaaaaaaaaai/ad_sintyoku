//画像はこのURLからお借りしました
//http://lohas.nicoseiga.jp/thumb/4205698i?
//http://icondecotter.jp/data/763/22893115/9b7b5e23220157fc12eca0785a2afb3d.png
//http://livedoor.blogimg.jp/hatima/imgs/b/e/beb9b8c2.png

$(function(){
		var adsRule = [$("[id^=ads]"),$("[id^=ox_]"),$("[id^='MA']"),$("[id^=imobi]"),$("iframe [id^=aswift]"),$("[id^=google_ads_iframe]"),$("iframe [id^=google_ads_iframe]"),$("[id^=aswift]"),$("[id^=google_ads_frame]")];

	//var adsRule = [$("iframe [id^=aswift]"),$("[id^=google_ads_iframe]"),$("iframe [id^=google_ads_iframe]"),$("[id^=aswift]"),$("[id^=google_ads_frame]")];
	// var ids2 = $("iframe [id^=aswift]").length;
	// var ids3 = $("[id^=google_ads_iframe]").length;
	// var ids4 = $("iframe [id^=google_ads_iframe]").length;
	 var ids = $("body").find("[id^=aswift]").length;
	// var ids5 = $("[id^=google_ads_frame]").length;
	//alert(ids);

	$.each(adsRule, function(){
		//alert($("body").find(this).length);
    	if($("body").find(this).length >= 0){
    		//alert("ok");
    		$(this).each(function() {
			    var _url = retUrl($(this).width(),$(this).height());
			    $(this).html("<img src='" + _url + "' class='adb_img' style='max-height:"+$(this).height()+"px;max-width:"+$(this).width()+"px;'>");
			});
    		 
    	}
	});

});
//alert("aaa2");
// $("[id^=aswift]").each(function() {
    
//     var _url = retUrl($(this).width(),$(this).height());
//     $(this).html("<img src='" + _url + "' class='hoge' alt='' >");
// });


function retUrl(w,h){
	if (w <= 100){
		return "http://www.fastpic.jp/index.php?module=preview&file=4726946260.jpeg";
	}else if(w <= 200){
		return "http://www.fastpic.jp/index.php?module=preview&file=6781562344.png";
	}else if(h <= 200){
		return "http://lohas.nicoseiga.jp/thumb/4205698i?";
	}else{
		return "http://livedoor.blogimg.jp/hatima/imgs/b/e/beb9b8c2.png";
	}
}
