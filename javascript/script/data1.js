// --------------------------------- 변수 복습
var a = 2025; //숫자데이터
var b = "자바스크립트"; //문자데이터
var c; //undefined 값이 정의되지 않음(대입된 값이 존재안함)
console.log(a, b, c);
console.log(a+1); //2026 숫자를 가진 변수+숫자데이터
console.log(b+'공부') // 문자를 가진 변수+문자데이터 = 문자데이터
console.log(a+c); // 숫자를 가진 변수+정의되 않은 변수 Not a Number (NaN)
console.log(a+b); //숫자 변수 + 문자 변수\
c = 1;
console.log(a+c); //숫자 변수 + 숫자 변수 = 숫자
console.log(a-c); //숫자 변수 - 숫자 변수 = 숫자
console.log('------------------------------------------');
// 함수 생성 문법 function 함수명(){실행식;}
function abcPlus(){
    console.log(a+b+c);
}
//매서드() 공부
/* var d = window.prompt('1+1은?');
console.log(d); */
//prompt와 function 함수 활용
function whyAge(){
    var d = window.prompt('올해 나이를 적어주세요.');
    console.log(d+'살입니다.');
    console.log(typeof d);
}
//1. 변수 생성
//2. 함수 생성
//3. 버튼 클릭 시 2번 함수를 호출
function bloodMbti(){
    var blood = window.prompt('혈액형을 적어주세요.')
    var mbti = window.prompt('mbti를 적어주세요.')
    console.log('혈액형은', blood, '형이고 mbti는' , mbti , '입니다.')
    console.log(typeof (blood, mbti));
}
//변수 선언 var , let, const
var a; //상단에 a가 존재하는 상태로 중복 a를 만듬
console.log(a); // 중복 문제를 발견 못함
/* let g; */
console.log(b);
const e = 2024;
console.log(e);
console.log('----------------------------------');
console.log(typeof a); //a변수 데이터타입 확인 number (숫자)
console.log(typeof b); //b변수 데이터타입 확인 string (문자)
console.log(typeof(c)); //c 데이터타입 확인 
console.log(typeof(a+b)); // a와 b변수를 더한 결과 데이어타입은?
console.log(typeof(a+c)); // a와 b변수를 더한 결과 데이어타입은?
console.log('----------특수데이터 연습-----------------')
let f;
let g;
console.log(typeof(f, g))
f ='';
console.log(typeof f);
f ='아이디를 입력하세요';
console.log(typeof f);
f = null;
// 문자데이터를 초기화하는 경우 null보다 '' 빈문자데이터를 많이 활용한다.
console.log(typeof f);
g = 100;
console.log(typeof g);
g = null;// 숫자데이터 특징 사라지고 object만 남음
console.log(typeof g);
g = 0;
console.log(typeof g);
console.log('----------템플릿문자열-----------------')
let coffee = 1500;
let lunch = 6000;
let total = coffee+lunch;
//오늘 총 지출액은 ? 원입니다
/* console.log(`오늘 총 지출액은 ${total}원입니다.`);
let dan = 5;
console.log(`${dan}x1=${dan*1}`);
console.log(`${dan}x2=${dan*2}`);
console.log(`${dan}x3=${dan*3}`);
console.log(`${dan}x4=${dan*4}`);
console.log(`${dan}x5=${dan*5}`);
console.log(`${dan}x6=${dan*6}`);
console.log(`${dan}x7=${dan*7}`);
console.log(`${dan}x8=${dan*8}`);
console.log(`${dan}x9=${dan*9}`); */

function nineTable(){
    let num =  window.prompt(`구구단 몇단이 궁금하세요?`)
    console.log(`${num}x1=${num*1}`);
    console.log(`${num}x2=${num*2}`);
    console.log(`${num}x3=${num*3}`);
    console.log(`${num}x4=${num*4}`);
    console.log(`${num}x5=${num*5}`);
    console.log(`${num}x6=${num*6}`);
    console.log(`${num}x7=${num*7}`);
    console.log(`${num}x8=${num*8}`);
    console.log(`${num}x9=${num*9}`);
}