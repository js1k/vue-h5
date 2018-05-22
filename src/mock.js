//引入mockjs
const Mock=require('mockjs')
//获取mock.Random对象
const Random=Mock.Random;
const produceNewsData=function(){
  let articles=[];
  const picLink=[
    'https://image.baidu.com/search/detail?z=0&word=%E6%91%84%E5%BD%B1%E5%B8%88%E8%8D%B7%E8%8E%B2&hs=0&pn=0&spn=0&di=0&pi=53931394704&tn=baiduimagedetail&is=0%2C0&ie=utf-8&oe=utf-8&cs=1348896323%2C1916191248&os=&simid=&adpicid=0&lpn=0&fm=&sme=&cg=&bdtype=-1&oriquery=&objurl=http%3A%2F%2Fa.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F10dfa9ec8a136327f216788d9d8fa0ec09fac791.jpg&fromurl=&gsm=0&catename=pcindexhot&islist=&querylist=',
    'https://image.baidu.com/search/detail?z=0&word=%E6%91%84%E5%BD%B1%E5%B8%88JamesMa&hs=0&pn=2&spn=0&di=0&pi=54034477561&tn=baiduimagedetail&is=0%2C0&ie=utf-8&oe=utf-8&cs=2553181625%2C943865378&os=&simid=&adpicid=0&lpn=0&fm=&sme=&cg=&bdtype=-1&oriquery=&objurl=http%3A%2F%2Fb.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F314e251f95cad1c85e377d83733e6709c83d5182.jpg&fromurl=&gsm=0&catename=pcindexhot&islist=&querylist=',
    'https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E5%8D%A1%E9%80%9A%E5%9B%BE%E7%89%87&step_word=&hs=0&pn=0&spn=0&di=211856610570&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=2&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=-1&cs=258598596%2C2660707836&os=883377703%2C3179526324&simid=3418517609%2C481809404&adpicid=0&lpn=0&ln=1998&fr=&fmq=1526982387673_R&fm=result&ic=0&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fpic.58pic.com%2F58pic%2F14%2F78%2F41%2F77358PICZaq_1024.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3Bcbrtv_z%26e3Bv54AzdH3Ff7vwtAzdH3F890b9800_z%26e3Bip4s&gsm=0&rpstart=0&rpnum=0&islist=&querylist=',
    'https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E5%8D%A1%E9%80%9A%E5%9B%BE%E7%89%87&step_word=&hs=0&pn=2&spn=0&di=103040466430&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=2&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=-1&cs=1293860636%2C1088191402&os=2012481248%2C4254623767&simid=4105578368%2C562077951&adpicid=0&lpn=0&ln=1998&fr=&fmq=1526982387673_R&fm=result&ic=0&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fpic.58pic.com%2F58pic%2F13%2F04%2F21%2F31D58PICVAH.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3Bcbrtv_z%26e3Bv54AzdH3Ff7vwtAzdH3F8na9d8n8_z%26e3Bip4s&gsm=0&rpstart=0&rpnum=0&islist=&querylist=',
    'https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E5%8D%A1%E9%80%9A%E5%9B%BE%E7%89%87&step_word=&hs=0&pn=3&spn=0&di=123214843730&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=2&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=-1&cs=313907760%2C3566551337&os=1306615044%2C3104045924&simid=3324011534%2C4277407168&adpicid=0&lpn=0&ln=1998&fr=&fmq=1526982387673_R&fm=result&ic=0&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fpic27.photophoto.cn%2F20130522%2F0010023309252566_b.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3Bri5p5ri5p5_z%26e3BvgAzdH3Ffi5oAzdH3F8am0dlcd_z%26e3Bip4s&gsm=0&rpstart=0&rpnum=0&islist=&querylist=',
    'https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E5%8D%A1%E9%80%9A%E5%9B%BE%E7%89%87&step_word=&hs=0&pn=4&spn=0&di=158789335760&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=2&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=-1&cs=3291830510%2C1555984238&os=2001318482%2C246485501&simid=3027925300%2C3553475355&adpicid=0&lpn=0&ln=1998&fr=&fmq=1526982387673_R&fm=result&ic=0&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fpic.58pic.com%2F58pic%2F11%2F35%2F94%2F21P58PIC3XA.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3Bcbrtv_z%26e3Bv54AzdH3Ff7vwtAzdH3F88ncl9d8_z%26e3Bip4s&gsm=0&rpstart=0&rpnum=0&islist=&querylist=',
    'https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E5%8D%A1%E9%80%9A%E5%9B%BE%E7%89%87&step_word=&hs=0&pn=5&spn=0&di=105544919700&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=2&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=-1&cs=3077575589%2C607856429&os=1427336167%2C3133898550&simid=4174132228%2C626496677&adpicid=0&lpn=0&ln=1998&fr=&fmq=1526982387673_R&fm=result&ic=0&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fpic34.photophoto.cn%2F20150112%2F0017030539647064_b.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3Bri5p5ri5p5_z%26e3BvgAzdH3FrtvAzdH3Fabn8d9am_z%26e3Bip4s&gsm=0&rpstart=0&rpnum=0&islist=&querylist=',
  ]
  for(let i=0;i<100;i++){
    let newArticleObject={
      title:Random.csentence(5,30),
      pic:picLink[Mock.Random.integer(0,1,2,3,4,5,6)],
      authorName:Random.cname(),
      date:Random.date()+' '+Random.time()
    }
    articles.push(newArticleObject)
  }
  return {
    articles:articles
  }
}

//使用mockjs模拟数据
Mock.mock('/api/list','post',produceNewsData())
