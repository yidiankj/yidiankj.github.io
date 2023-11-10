var jsonSm=[
{
	"name":"个人导航网站 v1.0",
	"url":"https://yidiankj.github.io"
},{
	"name":"图片转换",
	"url":"https://convertio.co/zh/webp-png"
},{
	"name":"生成二维码",
	"url":"https://cli.im"
},{
	"name":"解析二维码",
	"url":"https://2vm.net.cn/home/index/jiema.html"
},{
	"name":"修改图片尺寸",
	"url":"https://img.logosc.cn/?fromUrl=www.aiapply.cn"
}]




var l0 = "\n%c "+jsonSm[0].name+"  %c "+jsonSm[0].url+" \n";
for (var i = 1; i < jsonSm.length; i++) {
	l0 += " " + jsonSm[i].name + " " + jsonSm[i].url + " \n";
}
l0 += "\n";

console.log(l0,"color: #fadfa3; background: #030307; padding:5px 0;","background: #fadfa3; padding:5px 0;");

