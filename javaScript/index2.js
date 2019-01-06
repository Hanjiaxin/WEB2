//放大镜的显示
var img  = document.getElementById('img');
var btn1 = document.getElementById('btn1');
var btn = document.getElementById('btn');
var bt  = document.getElementById('bt');
var bt1 = document.getElementById('bt1');
btn1.onclick = function(){
    btn.style.border = "1px solid #ff9003";
    bt.style.border = "1px solid #ffffff";
    img.src = "img/pp0.jpeg";
    Bimg.src = "img/pp0.jpeg";
}
btn.onmouseover = function(){
    btn.style.border = "1px solid #ff9003";
    bt.style.border = "1px solid #ffffff";
    img.src = "img/pp0.jpeg";
    Img.src = "img/pp0.jpeg";
}
bt.onmouseover = function(){
    bt.style.border = "1px solid #ff9003";
    btn.style.border = "1px solid #ffffff";
    img.src = "img/pp1.jpeg";
    Img.src = "img/pp1.jpeg";
}
bt1.onclick = function(){
    bt.style.border = "1px solid #ff9003";
    btn.style.border = "1px solid #ffffff";
    img.src = "img/pp1.jpeg";
    Bimg.src = "img/pp1.jpeg";
}
var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var slider = document.getElementById("slider");
var Bimg = document.getElementById("Bimg");
var bannerc1aa = document.getElementById('bannerc1aa');
            
img1.onmouseover = function () {
    slider.style.display = 'block';
    img2.style.display = 'block';
}
img1.onmouseout = function () {
    slider.style.display = 'none';
    img2.style.display = 'none';
}

img1.onmousemove = function (ev) {
    var ev = ev || window.event;
    var oL = ev.clientX - bannerc1aa.offsetLeft - slider.offsetWidth / 2;
    var oT = ev.clientY - bannerc1aa.offsetTop - slider.offsetHeight / 2;
    var oMaxw = img1.offsetWidth - slider.offsetWidth;
    var oMaxh = img1.offsetHeight - slider.offsetHeight;
    oL = oL > oMaxw ? oMaxw : oL < 0 ? 0 : oL;
    oT = oT > oMaxh ? oMaxh : oT < 0 ? 0 : oT;
    slider.style.left = oL + 'px';
    slider.style.top = oT + 'px';
    var scale = img2.offsetWidth / slider.offsetWidth;
    Bimg.style.left = -scale * oL + 'px'
    Bimg.style.top = -scale * oT + 'px'
}
//商品规格的选择
var bannerc1b8 = document.getElementById("bannerc1b8");
var bannerc1b9 = document.getElementById("bannerc1b9");
var bannerc1b10 = document.getElementById("bannerc1b10");
var count=0;
bannerc1b10.onclick = function () {
    count = count + 1;
    bannerc1b9.innerHTML = count;
}
bannerc1b8.onclick = function () {
    count = count - 1;
     bannerc1b9.innerHTML = count;
}
var js=document.getElementById('js');
var jsp=document.getElementById('jsp');
var bannerc1b5=document.getElementById('bannerc1b5');
var bannerc1b6=document.getElementById('bannerc1b6');
var xuan=document.getElementById('pic1');
var xuan1=document.getElementById('pic2');
js.onclick=function(){
    bannerc1b6.style.display="none";
    bannerc1b5.style.display="block";
    js.style.display="none";
    jsp.style.display="block";
    xuan.style.display="block";
    xuan1.style.display="none";
}
jsp.onclick=function(){
    js.style.display="block";
    bannerc1b5.style.display="none";
    bannerc1b6.style.display="block";
    jsp.style.display="none";
    xuan1.style.display="block";
    xuan.style.display="none";
}
//点击按钮弹出图片
function acc(){
    document.getElementById('olmg').style.display="block"
}
