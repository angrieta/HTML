// 연결연산자와 더하기 연산자
let data1 = 'hello'+ 'js'; //문자+문자 (연결연산자)
let data2 = '1'+2; // 문자+숫자 (연결연산자)
let data3 = (1+1)+'number';
let data4 = 'num'+(2-2)+'ber';// 문자+(숫자-숫자)+문자
let data5 = 4; //재료 변수
let data6 = 2; //재료 변수
let result = data5+data6; //재료 이용 결과 담는 변수

let data7 = 10;
let data8 = 3;
let result2 = data7 / data8;

let data9 = 5;
let data10 = data9 + 10;
let result3 = data10;
console.log(result3);

console.log(result2);
result2 = data7 % data8;
console.log(result2);

console.log(result);
result = data5 - data6;
console.log(result);
result = data5 * data6;
console.log(result);
result = data5 / data6;
console.log(result);
result = data5 % data6;
console.log(result);
console.log(data1, typeof data1); //변수값확인, 변수데이터 종류 확인
console.log(data2, typeof data2); //12 string
console.log(data3, typeof data3); //2number string
console.log(data4, typeof data4); //num0ber string

//==================================이항 연산자 활용 더하기만 되는 계산기 
const firstInput = document.querySelector('#val2') 
//1 첫번째 값을 담는 input /값 인식속성 value
const secondInput = document.querySelector('#val1')
//2 두번째 값을 담는 input /값 인식속성 value
const clacBtn = document.querySelector('#btn')
//3 위 1, 2번을 인식하는 결정버튼 /이벤트 click
const totalP = document.querySelector('#result');
//4 3번의 버튼 조건 달성 시 1, 2 값을 담는 결과 변수

function todayFunc(){}
//5 4번의 결과변수를 p 출력 명령
clacBtn.addEventListener('click',function(){
    //2 입력한 값을 더한 값을 결과값으로 만들기
    let total = Number(firstInput.value) + Number(secondInput.value);
    //3 그 값을 버튼을 눌렀을 때 나오게 하기
    totalP.innerHTML = total // 변수를 태그,ID,class에 대입할 땐 .innerHTML 
})
/* console.log(firstInput,secondInput,clacBtn)
console.log(totalP); */

//==================================================================증감연산자 공부
let x = 5;
let y = ++x; //x++ 증가연산자(1씩증가) 후위연산자
console.log(x,y); // 6 5
y = x++;
console.log(x,y); // 7 6
x = ++y;
console.log(x,y); // 7 7
x++;
console.log(x);

let a = 10;
let b = 20;
let c = 30;
let d = 40;

//=======a,b,c,d의 값은? / 정답:10 20 30 40
a++;
b--;
c++;
d--;
console.log(a,b,c,d)
//=======a,b,c,d의 값은? / 정답:11,19,31,39
a = ++b; //20 20
b = a++; 
console.log(a,b,c,d)
//=======a,b,c,d의 값은? / 정답: 21 20 31,39
c = a+b; //41
d = ++c; //42 42
console.log(a,b,c,d)
//=======a,b,c,d의 값은? / 정답:21 20 42 42
a = ++c+10; // 53,43
b = --d+1; // 42 41
console.log(a,b,c,d)
//=======a,b,c,d의 값은? / 정답:53 42 43 41

//====================================================복합대입연산자
let number = 10;
//number = number + 5;
number += 5;
console.log(number) //15

number -= 5;
console.log(number) //10
number *= 5;
console.log(number) //50
number /= 5;
console.log(number) //10
number %= 5; 
console.log(number) //0


//1. 비용 변수 설정 value
const transPrice = document.querySelector('#money1') 
const foodPrice = document.querySelector('#money2')
const coffeePrice = document.querySelector('#money3')
//2. 버튼 변수 설정
const totalBtn = document.querySelector('#totalBtn')
//3. 출력 0 변수
const resultS = document.querySelector('.todayResult span')

function todayFunc(){
    //4.1 1번 변수들을 모두 더한다
    let totalPrice = Number(transPrice.value)+Number(foodPrice.value)+Number(coffeePrice.value);
    console.log(totalPrice)
    //5.todayResult 0 변수 출력
    resultS.innerHTML = totalPrice;
}
//4. 버튼 눌렀을 때 이벤트 생성
totalBtn.addEventListener('click', todayFunc) 


//====================================================================================
// 총 잔액 표시
let total = 0;
//*.입금액 변수 설정
const cashDeposit = document.querySelector('#bank_input')
//*.총 잔액 변수 설정
const depositResult = document.querySelector('#bank_total')
//*.버튼 변수 설정
const depositBtn = document.querySelector('#deposit_btn')
console.log(depositBtn, depositResult, cashDeposit)
//*.버튼을 눌렀을 때 +천원이 더해지는 복합 대입 연산자 사용
depositBtn.addEventListener('click' ,function(){bankFunc(Number(cashDeposit.value) * 0.1)
})
function bankFunc(interest){
    let deposit = Number(cashDeposit.value) + interest;
    //5.입금액 인식을 하고 이자 += 1000
    total += deposit;   
    cashDeposit.value = 0;
    /* cashDeposit.value = ''; */ // 입력하고 초기화
    //6.계산 식을 bank total에 대입
    depositResult.value = total.toLocaleString('ko-kr')
}
//1.총 잔액 표시  
//2.입금액 입력 
//3.입금하기 버튼 클릭 
//4.입금액 인식하고 이자가 더해진다  
//5.총 잔액 포함된다.
//6.총 잔액 표시된다.



//==============================================================함수의 변경되는 데이터 매개변수 공부
//function 함수명(매개변수){함수실행값} //함수선언식(선언만으로 결과는 출력안됨)
//함수명(매개변수); // 함수 호출식 (함수 선언 후 호출은 위, 아래 어디든 작성가능)

//매개변수가 없는 함수
//카페 키오스크는 아메리카노만 주문이 가능하다. 수량도 무조건 1잔만 주문 가능.
//출력 예) 아메리카노 1잔 나왔습니다.
/* function kiosk(){
    func_result.innerHTML = '아메리카노 1잔 나왔습니다.';
} */
//매개변수가 있는 함수 (수량만 변경 가능)
/* function kiosk(num){
    func_result.innerHTML = `아메리카노 ${num}잔 나왔습니다.`;
} */
//매개변수가 2개 있는 함수 (메뉴와 수량만 변경 가능)
function kiosk(menu, num){
    func_result.innerHTML = `${menu} ${num}잔 나왔습니다.`;
}
const func_btn = document.querySelector('#func_btn');
const func_result = document.querySelector('.func_result');
let user_num = 4;
let user_menu = '카페라떼';
/* func_btn.addEventListener('click',function(){kiosk()}) */
func_btn.addEventListener('click',function(){kiosk(user_menu, user_num)})

//======================================= 함수의 return(외부반환값) 공부
//function함수명(매개변수){함수 실행값} //함수선언식(선언만으로 결과는 출력안됨)
//함수명(매개변수); // 함수호출식(함수 선언 후 호출은 위, 아래 어디든 작성가능)

function func1(x, y){
    /* console.log(x + y); */
    return x+y; //실행 매서드를 포함하지 않고 외부에서 필요한 결과값만 반환한다.
    console.log('test'); // 실행 메서드를 포함하지 않고 외부에서 필요한 결과값만 반환한다.
}
func1(1, 2);
console.log(func1(1,2)); //실행식을 함수 호출 값을 가진채로 작성한다.
alert(func1(2,3));






let num1 = 10;
let num2 = 20;
function func2(x, y){
    num1 += num2; //num1 30
    num2 = x + y ; //num = 6
    num1 += num2; //nun1 = 36
    return console.log(num1);
}

//console.log(func2(2,4)); // 36
func2(2,4);

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
danBtn.addEventListener('click',function(){dan99(Number(danInput.value))}) // 1. 절차 클릭 ->function으로 


/*     console.log(`${num}x1=${num*1}`);
    console.log(`${num}x2=${num*2}`);
    console.log(`${num}x3=${num*3}`);
    console.log(`${num}x4=${num*4}`);
    console.log(`${num}x5=${num*5}`);
    console.log(`${num}x6=${num*6}`);
    console.log(`${num}x7=${num*7}`);
    console.log(`${num}x8=${num*8}`);
    console.log(`${num}x9=${num*9}`); */