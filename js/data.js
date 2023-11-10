// 定义JSON数据
const jsonData = [
  {
    "urld": "https://m.bilibili.com/space/253322643",
    "urli": "https://gimg3.baidu.com/search/src=https%3A%2F%2Fgdown.baidu.com%2Fappcenter%2Fsource%2F5914787633%2F3e44b54f00e5cb7e7836ee03d898e900%2Fres%2FCGK.png&refer=http%3A%2F%2Fwww.baidu.com&app=2021&size=w150&n=0&g=0n&er=404&q=100&fmt=auto&maxorilen2heic=2000000?sec=1694192400&t=2dd085b1d2ef0b12306545d7da1d8b0a",
    "text": "国内(中国)知名的视频弹幕网站",
    "name": "哔哩哔哩"
  },{
    "urld": "https://s.xsj.qq.com/z7JeZ7kz",
    "urli": "https://gimg3.baidu.com/search/src=https%3A%2F%2Fapp-center.cdn.bcebos.com%2Fappcenter%2Fsts%2Fpcfile%2F646948909%2Fa5447c5cdb454c77935ce3fa2293d1ed.png&refer=http%3A%2F%2Fwww.baidu.com&app=2021&size=w150&n=0&g=0n&er=404&q=100&fmt=auto&maxorilen2heic=2000000?sec=1694192400&t=dd9471c20f663cd7149b164e7026fc9f",
    "text": "新不止步,乐不设限",
    "name": "QQ"
  },{
    "urld": "./html/weixin.html",
    "urli": "https://gimg3.baidu.com/search/src=https%3A%2F%2Fapp-center.cdn.bcebos.com%2Fappcenter%2Ffile%2Fupload%2Fa7c39683dd48fe24bc9df0c4ba12d260e5e9df79-72d0-4bed-9f72-fcfff23226d7.png&refer=http%3A%2F%2Fwww.baidu.com&app=2021&size=w150&n=0&g=0n&er=404&q=100&fmt=auto&maxorilen2heic=2000000?sec=1694192400&t=f4b9985c53b396e700cb43cf17be61b4",
    "text": "微信,是一个生活方式",
    "name": "微信"
  },{
    "urld": "https://www.douyin.com/user/MS4wLjABAAAAm6WtIohWBrYoWiA4YdPSOoHIfvwRr_fienpXCIkWYNEKJTnzUScfruiu4TlY0YSn",
    "urli": "https://gimg3.baidu.com/search/src=https%3A%2F%2Fgdown.baidu.com%2Fappcenter%2Fsource%2F6504715822%2F7c27f73777b6fd3d51d766469f8f79f5%2Fr%2F2g9.png&refer=http%3A%2F%2Fwww.baidu.com&app=2021&size=w150&n=0&g=0n&er=404&q=100&fmt=auto&maxorilen2heic=2000000?sec=1694192400&t=f717d317a12f9f2eeeabde52236d6679",    "text": "记录美好生活",
    "name": "抖音"
  },{
    "urld": "https://www.kuaishou.com/profile/3xi3bra259qqeqq",
    "urli": "https://gimg3.baidu.com/search/src=https%3A%2F%2Fapp-center.cdn.bcebos.com%2Fappcenter%2Fsts%2Fpcfile%2F6370323102%2Fbd5fc9243e020ab8faf81feba15a6c0e.png&refer=http%3A%2F%2Fwww.baidu.com&app=2021&size=w150&n=0&g=0n&er=404&q=100&fmt=auto&maxorilen2heic=2000000?sec=1694192400&t=03f71b197031cfd6e01be583b5f11345",    "text": "拥抱每一种生活",
    "name": "快手"
  },{
    "urld": "https://m.tb.cn/h.5dqkrBS",
    "urli": "https://gimg3.baidu.com/search/src=https%3A%2F%2Fapp-center.cdn.bcebos.com%2Fappcenter%2Fsts%2Fpcfile%2F6446944544%2F799aedb2884334c7ca725128559d4bbb.jpg&refer=http%3A%2F%2Fwww.baidu.com&app=2021&size=w150&n=0&g=0n&er=404&q=100&fmt=auto&maxorilen2heic=2000000?sec=1694192400&t=4d5bced6fcce4bc3b7a0d672a786b4c9",    "text": "淘!我喜欢",
    "name": "淘宝"
  },{
    "urld": "https://www.youtube.com/@user-mp1ei2eu1r",
    "urli": "images/icons/00000.png",
    "text": "与亲朋好友及全世界分享您的视频",
    "name": "油管"
  }
];




























// 获取要添加到的div元素
const container = document.querySelector('.flex-wrap');

// 遍历JSON数据并生成HTML代码
jsonData.forEach(item => {
  // 创建外层div元素
  const div = document.createElement('div');
  div.className = 'flex flex-col w-1/12 max-lg:w-4/12 cursor-pointer p-1 hover:scale-105 transition duration-300 ease-in-out';

  // 创建a元素
  const a = document.createElement('a');
  a.target = '_blank';
  a.href = item.urld;
  a.className = 'flex flex-col border border-gray-600 rounded-xl min-h-full items-center justify-center py-4 px-2 shadow-sm bg-gray-800';

  // 创建内层div元素
  const innerDiv = document.createElement('div');
  innerDiv.className = 'flex';

  // 创建img元素
  const img = document.createElement('img');
  img.src = item.urli;
  img.alt = item.text;
  img.className = 'w-12 rounded-xl';

  // 将img元素添加到内层div元素中
  innerDiv.appendChild(img);

  // 将内层div元素添加到a元素中
  a.appendChild(innerDiv);

  // 创建文本元素
  const text = document.createElement('div');
  text.className = 'flex text-sm font-medium pt-4 text-center text-gray-100';
  text.textContent = item.name;

  // 将文本元素添加到a元素中
  a.appendChild(text);

  // 将a元素添加到外层div元素中
  div.appendChild(a);

  // 将外层div元素添加到指定的div元素中
  container.appendChild(div);
});




//关闭丑陋的导航条
document.body.style.overflow = 'hidden';