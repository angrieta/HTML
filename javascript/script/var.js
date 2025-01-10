//bowl, a, b, c 변수명 금지 - 같은 html에 적용되어 있어서 변수명이 겹치면 안됨
var box1 =1;
var box2;
box2 = 5;
var box3 = 10;
var c = 10;
//결과 출력 : 1, 5, 10
//결과 출력 : c=10
//결과 출력 : a=1, b=5, c=10
//결과 출력 : a+b = 6
//결과 출력 : b+c = 15
console.log(box1,box2,box3)
console.log('box3=',box3)
console.log('box1=',box1,'box2=',box2,'box3=',box3)
console.log('box1+box2=',box1+box2)
console.log('box2+box3=',box2+box3)