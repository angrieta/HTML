//====================함수스코프, 지역변수와 전역변수
//함수 외부(전역스코프)
let b = 20;
let c = 30;
let a = 0;
//함수 내부
//function 함수명(매개변수){반복 알고리즘;}
function test(){
    //함수 내부(지역스코프)
    a = 10;
    console.log(a+b);
}
//선언한 함수를 사용하고 싶다면 함수 외부에서 함수를 호출해야 한다!
//호출방법 : 함수명 ()
console.log(a+b);
test(); //전역 스코프에서 함수 결과를 보여줄 수 있도록 함수 호출


//=======================함수스코프 연습2
//최종 결과 값 순서가 6, 16으로 출력되도록 함수스코프와 호출을 이요한 문제 풀기
let x = 1;
let y;
func2();
function func1(){
    y = 5;
    console.log(x+y);
}
function func2(){
    func1();
    let z = 10;
    console.log(x+y+z);
}

// 홈페이지 접속 -> 버튼 발견 -> 마우스 드래그 버튼위에 가져다 놓기 -> 클릭
//1. 변수 생성 (버튼)
const helloBtn = document.getElementById('#btn1');
console.log(btn1);
//2. 변수 이벤트 생성
//이벤트대상.addEventListener('이벤트종류',이벤트 만족 시 실행함수);
//이벤트대상 = 이벤트종류를 적용하고 싶은 대상
//이벤트종류 = 태그의 인라인script로 적용시 on을 붙이고 스크립트에서 바로 작성 시 on없이 바로 이벤트만 작성한다.
btn1.addEventListener('click',function(){
    alert('hello') /* 팝업 */
})
// 버튼 클릭 -> 문제와 입력창 제공 -> 입력 답 결과 띄우기
const mathBtn = document.querySelector('#btn2');
console.log(btn2);
btn2.addEventListener('click',function(){
    //3. 1+1 답을 입력받을 수 있는 질문창 제공 ->답 받기
    let answer = prompt('1+1 값을 입력해주세요.')
    //4 3번에 받은 값을 팝업창으로 다시 띄우기
    alert(answer);
})

const valueMath = document.querySelector('#num');
const numPlus = document.querySelector('#numPlus');
const numMinus = document.querySelector('#numMinus');
console.log(valueMath, numPlus);
numPlus.addEventListener('click',function(){
    //3. 변경대상의 객체, 속성을 잘 구분하여 문법에 맞게 작성하기
    //기존 수량의 값(오른쪽)에 1을 더해서 수량칸(왼쪽)에 대입하기
    valueMath.value = Number(valueMath.value)+1 
    console.log(typeof(num.value));
})
numMinus.addEventListener('click',function(){
    valueMath.value = Number(valueMath.value)-1 
})

//=================================================
//1.월급 입력받기
const price1 = document.querySelector('#price1')
//2.보너스 입력받기
const price2 = document.querySelector('#price2')
//3.계산 버튼 클릭 시
const total = document.querySelector('#total');
total.addEventListener('click',function(){
    //4.월급+보너스 더하기
    const total_price = Number(price1.value)+Number(price2.value)
    //5.더한 결과 출력
    /* console.log(total_price); */
    alert(total_price,'원 입니다.');
})

