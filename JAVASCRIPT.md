<script src="./script/function2.js" defer></script> <!-- defer -->

`var` , `let`, `const` <!-- 변수 선언 --> 


`function abcPlus(){}` <!--함수 생성 문법 function 함수명(){실행식;} -->
`window.prompt`     <!-- window는 생략해서 쓰기도 함 -->
`window.document.write` <!-- window는 생략해서 쓰기도 함 -->


`typeof d`


<!-- 위 날짜 메서드를 실행하기 위한 초기 세팅으로 new Data() 메서드 반드시 선언!! -->
let now = `new Date();`
`getMonth`, `getDate`, `getFullYear`

`오늘은 ${ye}년 ${mon}월 ${day}일 입니다.` 

`document.getElementsByTagName('')`
`document.getElementsByClassName('')`
`document.getElementById('')`
`document.querySelector('')`
`addEventListener('',function(){})`

`innerHTML = `


function kiosk(`menu`, `num`){
    func_result.innerHTML = `${menu} ${num}잔 나왔습니다.`;
}
const func_btn = document.querySelector('#func_btn');
const func_result = document.querySelector('.func_result');
let `user_num` = 4;
let `user_menu` = '카페라떼';
/* func_btn.addEventListener('click',function(){kiosk()}) */
func_btn.addEventListener('click',function(){kiosk(`user_menu`, `user_num`)})

//==========================================구구단 만들기
//사용자가 2를 입력하면 2x1 ~ 2x9까지 결과가 P태그에 출력되는 결과
//사용자가 5를 입력하면 2x1 ~ 2x9까지 결과가 P태그에 출력되는 결과
//달라지는걸 매개변수로 만들어야함
const danInput = document.querySelector('#dan')
const danBtn = document.querySelector('#danBtn')
const dan99result = document.querySelector('.dan99result')
function dan99(dan){
    dan99result.innerHTML = `${dan}x1=${dan*1}<br>`
    dan99result.innerHTML += `${dan}x2=${dan*2}<br>`
    dan99result.innerHTML += `${dan}x3=${dan*3}<br>`
    dan99result.innerHTML += `${dan}x4=${dan*4}<br>`
    dan99result.innerHTML += `${dan}x5=${dan*5}<br>`
    dan99result.innerHTML += `${dan}x6=${dan*6}<br>`
    dan99result.innerHTML += `${dan}x7=${dan*7}<br>`
    dan99result.innerHTML += `${dan}x8=${dan*8}<br>`
    dan99result.innerHTML += `${dan}x9=${dan*9}`
}
danBtn.addEventListener('click',function(){dan99(Number(danInput.value))}) //