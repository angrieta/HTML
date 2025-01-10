/* document.body.style = 'background-color:aqua'; */
document.write('250107');
//DOM
//객체는 변수에 선언해야 한다.
//변수생성키워드 생성변수명 = 변수에애딥되는값;
//변수 선언 시 [] 배열선언표시 없이 복수형 데이터를 저장하면 자동으로 배열로 인식
//배열 인식 결과 -> 각 데이터 [0] [1] 인덱스로 구분되고 length속성이 자동추가된다.
const title1 = document.getElementsByTagName('h1');
console.log(title1);
const title2 = document.getElementsByTagName('h2');
console.log(title2);
//DOM객체.속성;            속성읽기
//DOM객체.속성='값';       속성읽기
title1[0].style = 'color:red';
title1[1].style = 'color:blue';
title2[0].style = 'color:yellow'
title2[1].style = 'background-color:red; padding:20px;'
title2[2].style = 'border:1px solid #111;'
const listWrap = document.getElementsByTagName('ul')[0];
const list = listWrap.getElementsByTagName('li');
const link = document.getElementsByTagName('ul')[1];
const linkA = link.getElementsByTagName('li');
const aTag1 = linkA[0].getElementsByTagName('a');
const aTag2 = linkA[1].getElementsByTagName('a');
const aTagAll = document.getElementsByTagName('a');
console.log(listWrap);
console.log(list);
console.log(link);
console.log(linkA);
console.log(aTagAll );
/* 
html, css 작성 시 html의 가족관계를 우선시 하여 li가 형제, a는 각 외동으로 각각 인식하지만 JS는 최종 선택 대상 앞에 'document' 자리에 누굴 쓰느냐에
따라 그 안에 있는 태그 전체를 순서대로 인식하기 때문에 실제 HTML 관계에서 a가 외동이든 아니든 'ul'을 선택했다면 ul 안 모든 a를 순서대로 인식해서
인덱스 번호를 적용한다. 하지만 'li'의 경우 li 안에는 a가 하나씩 밖에 배치가 안되어있으므로 각 a를 0번째로만 인식하게된다.
 */
listWrap.style = 'background-color:aqua' //listWrap[0][0] 이 되므로 listWrap[0] <- [0]을 지워준다.
list[0].style = 'background-color:yellow';
linkA.style = 'background-color:blue';
/*  */
const subTitle = document.getElementsByClassName('sub_title')[0];
const menu = document.getElementsByClassName('menu')[0];
const menuList = menu.getElementsByTagName('li');
const menuA = menu.getElementsByTagName('a');
console.log(subTitle);
console.log(menu);
console.log(menuList);
console.log(menuA);
subTitle.style = 'background-color:pink';
menu.style = 'background-color:red';
menuList[0].style = 'background-color:blue';
menuList[1].style = 'background-color:coral';
menuA.style = 'background-color:yellow';

const notice = document.getElementById('notice');
console.log(notice);
notice.style = 'color:red'

const allBox = document.getElementById('container')
const allBoxTitle = document.getElementById('title')
const titleA1 = allBoxTitle.getElementsByTagName('a')
const allBoxContents = document.getElementById('contents')
const titleA2 = allBoxContents.getElementsByTagName('a')
console.log(allBox);
console.log(allBoxTitle);
console.log(titleA1);
console.log(titleA2);
console.log(allBoxContents);
titleA1[0].style = 'color:red; background-color:pink;' ;
titleA1[1].style = 'color:red';
titleA2[0].style = 'color:yellow';
titleA2[1].style = 'color:aqua';
console.log('============================================================')
const nav = document.getElementsByTagName('nav')[0];
console.log(nav)
const gnb = nav.getElementsByClassName('gnb')[0];
const gnbLi = gnb.getElementsByTagName('li');
console.log(gnb)
console.log(gnbLi)
const lnb = gnb.getElementsByClassName('lnb')[0];
const lnbLi = lnb.getElementsByTagName('li');
const lnbLiA = lnb.getElementsByTagName('a');
console.log(lnb)
console.log(lnbLi)
console.log(lnbLiA)
nav.style = 'background-color:pink;'
gnb.style = 'background-color:red;'
lnb.style = 'background-color:blue;'
