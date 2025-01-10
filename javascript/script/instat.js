//인스타그램 아이콘 클릭 시 활성화 이미지로 등록하기
//off -> on
//like 이미지 클릭 시 off -> on 변경 결과
/* const click = document.querySelector('.like');
const like = document.querySelector('.like img');
console.log(typeof like); //object 객체
console.log(like.src); */
//src는 속성 앞에 객체가 있어야함
//insta.css 위치에서 like_on.png 상대경로 연결
// ./images/like_on.png
// insta.js 위치에서 like_on.png 연결 시 프로젝트 최상위 폴더 기준(html기준)
/* click.addEventListener('click',function(){
    like.src = './images/like_on.png';
}) */

//mouse, mouseout 마우스 올렸을 때, 나갔을때 이벤트
//off 이미지에 마우스를 올리면 on 변경
//on 이미지에 마우스를 내리면 off 변경
const likeIcon = document.querySelector('.like img');
const commentsIcon = document.querySelector('.comments img');
const paperIcon = document.querySelector('.paper img');
console.log(likeIcon)
likeIcon.addEventListener('mouseover',function(){
    iconSrc(likeIcon, 'like', 'on')
})
    /* likeIcon.src = './images/like_on.png'; */ /* css는 클릭이 없어서, 클릭을 사용하고 싶다면 자바스크립트를 사용해야한다. */
likeIcon.addEventListener('mouseout',function(){
    iconSrc(likeIcon, 'like', 'off')
    /* likeIcon.src = './images/like_off.png'; */ /* css는 클릭이 없어서, 클릭을 사용하고 싶다면 자바스크립트를 사용해야한다. */
})
commentsIcon.addEventListener('mouseover',function(){
    iconSrc(commentsIcon, 'comment', 'on')
})
commentsIcon.addEventListener('mouseout',function(){
    iconSrc(commentsIcon, 'comment', 'off')
})
paperIcon.addEventListener('mouseover',function(){
    iconSrc(paperIcon, 'paper', 'on')
})
paperIcon.addEventListener('mouseout',function(){
    iconSrc(paperIcon, 'paper', 'off')
})

function iconSrc(target, name, status){
    return target.src = `./images/${name}_${status}.png`
}
