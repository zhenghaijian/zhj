  if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
            window.location.href = "http://123.60.110.85/bird/"; //手机
        }
// 获取地鼠盒子
var divs = document.getElementsByClassName('div');
// 获取√的盒子
var is = document.getElementsByClassName('i');
// 索引
var index=0;
// 分数
var score = 0;
// 开始按钮
btn.onclick=function() { 
    // 开始页面消失
    start.style.display='none';
    // 锤子显示
    box2.style.display='block';
    // 分数盒子显示
    box.style.display='block';
var dingshiq = setInterval(function(){
    // for循环，默认地鼠盒子，动画为空，display为none，添加索引为i，默认√为display:none;
    for(i=0;i<divs.length;i++){
        divs[i].style.animation='';
        divs[i].style.display='none';
        divs[i].index = i;
        is[i].style.display='none'
    }
    // 生成随机数（0-8）
    index = parseInt(Math.random()*9+0);
    // 随机地鼠盒子显示
    divs[index].style.display='block'
    // 随机盒子动画定义
    divs[index].style.animation='move 2s infinite linear'; 
    // 随机盒子点击事件
    divs[index].onclick=function(){
        // 阻止事件冒泡
        window.event? window.event.cancelBubble = true : e.stopPropagation();
        // 获取当前地鼠盒子的索引
        index = this.index;
        // 点击事件判断，当前盒子为block，点击分数加1，更改span的值
        if(this.style.display='block'){
            is[index].style.display='block';
            score+=1;
            span.innerHTML=score;
        }
        // 点击锤子旋转
        box2.style.transform='rotate(0)'    
    }
    // document点击，打不到地鼠盒子，弹出挑战失败   
    document.onclick=function(){
        // 结束盒子显示
        end.style.display='block';
        // 给分数赋值
        span1.innerHTML=score;
        // 锤子消失
        box2.style.display='none';
        // 分数盒子消失
        box.style.display='none';
        // 恢复所有的地鼠盒子
        for(var i=0;i<divs.length;i++){
            divs[i].style.animation='';
            divs[i].style.display='none';
        }
        // 停止定时器
        clearInterval(dingshiq);
        // 重新开始按钮
        btn1.onclick=function() {
        // 重新刷新数据
        location.reload(true);
        }
    } 
},2000)
// box2跟随鼠标移动
ul.onmousemove=function (e) {
    // 获取鼠标移动的位置
    var x =e.pageX - ul.offsetLeft;
    var y =e.pageY - ul.offsetTop;
    // 锤子跟随鼠标的位置进行移动
    box2.style.left = x - 25 + 'px';
    box2.style.top = y -25  + 'px';
    // 鼠标移动，锤子恢复原来状态
    box2.style.transform='rotate(40deg)';
}
}
    