function setRem(){
	document.documentElement.style.fontSize = innerWidth / 20 + "px";
}
setRem();
onresize = setRem;
var Down = document.querySelector(".down"),
	Navul = document.querySelector(".nav-ul");
Down.onclick = function(){
	Navul.classList.toggle("show");
}
var More = document.querySelector(".more"),
	After = document.querySelector(".after"),
	Morec = document.querySelector(".more-c");
More.onclick = function(){
	this.innerText="正在加载…";
	setTimeout(function(){
		More.style.display="none";
		After.classList.toggle("hid");
	}, 2000);
}
/*[{"src":"http://inews.gtimg.com/newsapp_ls/0/674061045_200160/0","title":"火箭vs鹈鹕精彩视频：哈登杂耍运球送妙传 悍将神奇补扣","text":"","special":"flag11","comment":"9"},
{"src":"http://inews.gtimg.com/newsapp_ls/0/673428579_150120/0","title":"曝孙杨已有私生子 前女友独立将孩子抚养至2岁","text":"近日，全明星探接到孙杨前女友李莹念身边知情人爆...","special":"flag4","comment":"6842"},
{"src":"http://inews.gtimg.com/newsapp_ls/0/673544709_150120/0","title":"揭秘孙杨绯闻“孩子他妈” 否认是小三并已相识6年","text":"北京时间10月12日消息，据全明星探报道，运动...","special":"flag4","comment":"249"},
{"src":"http://inews.gtimg.com/newsapp_ls/0/674157945_150120/0","title":"曝孙杨前女友独自携子过中秋 住破旧小区","text":"","special":"flag11","comment":"36"},
{"src":"http://mat1.gtimg.com/www/mobi/image/loadimg.png","title":"进世界杯获1.5亿巨奖？国足贴心 4战0胜为足协省1200万","text":"","special":"flag4","comment":"1597"},
{"src":"http://mat1.gtimg.com/www/mobi/image/loadimg.png","title":"两大佬开撕？孙继海疑似回击杜威：还不能说实话了？","text":"腾讯体育10月12日昨晚12强赛第4轮，国足客...","special":"flag3","comment":"3747"},
{"src":"http://mat1.gtimg.com/www/mobi/image/loadimg.png","title":"皇马官方宣布续约克罗斯到2022 年薪2000万欧","text":"腾讯体育10月12日讯皇马(数据)官方网站正式...","special":"flag4","comment":"102"},
{"src":"http://mat1.gtimg.com/www/mobi/image/loadimg.png","title":"亚冠杯-新疆小组赛末战64分狂胜头名晋级8强 将战卡塔尔劲旅","text":"新疆小组赛全胜晋级八强腾讯体育10月12日20...","special":"flag4","comment":"257"},
{"src":"http://mat1.gtimg.com/www/mobi/image/loadimg.png","title":"NBA中国、腾讯首推NBA联盟通","text":"中国球迷可以通过移动终端和个人电脑观看NBA整...","special":"flag3","comment":"13"},
{"src":"http://mat1.gtimg.com/www/mobi/image/loadimg.png","title":"冰球盛宴来袭！腾讯全程独家网络视频直播新赛季NHL","text":"冰球盛宴来袭！腾讯全程视频直播新赛季NHL。","special":"flag4","comment":"13"},
{"src":"http://mat1.gtimg.com/www/mobi/image/loadimg.png","title":"速度比博尔特快+颜值比小贝高！这项比赛必须要看","text":"","special":"flag1","comment":"8"},
{"src":"http://mat1.gtimg.com/www/mobi/image/loadimg.png","title":"孙杨事件引发热议 网友力挺愿其不受流言影响","text":"据《全明星直播》爆料，孙杨与前女友李莹念有私生...","special":"flag3","comment":"123"},
{"src":"http://mat1.gtimg.com/www/mobi/image/loadimg.png","title":"孙杨私生子疑点重重：为何两年才曝光 不符孙母风格","text":"10月12日，中国体坛爆出一大劲爆消息，游泳领...","special":"flag","comment":"0"},
{"src":"http://mat1.gtimg.com/www/mobi/image/loadimg.png","title":"星探连线孙杨前女友遭粗暴拒绝 男子代接不置可否","text":"全明星直播电话联络孙杨前女友李莹念，一位女士听...","special":"flag3","comment":"137"},
{"src":"http://mat1.gtimg.com/www/mobi/image/loadimg.png","title":"纳达尔：赛季基本已结束 我知道该如何找回胜利","text":"上海网球大师赛的“超级星期三”，纳达尔迎来了本...","special":"flag4","comment":"1"},
{"src":"http://mat1.gtimg.com/www/mobi/image/loadimg.png","title":"3X3世锦赛-中国女队豪取两连胜 外线主力伤退","text":"中国女队逆转取胜腾讯体育10月12日2016第...","special":"flag4","comment":"509"}]*/
