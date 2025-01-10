//240110 - 구구단 함수 복습
//1."danInput" input 요소에 사용자가 원하는 구구단 입력 후
//2."danBtn" button요소 클릭 시
//3."dan99" 2번 조건달성 시 호출할 수 있는 구구단 함수 생성
//3-1 (함수 안) 함수 실행 시 마다 위 1번의 입력값을 받기 위해 '매개변수' 생성
//3-2 (함수 안) 매개변수를 이용 구구단 식 제작 2x1=2 ~ 2x9
//3-3 (함수 안) 출력하기위한 "danResult" 변수 생성
//3-4 (함수 안) 위 변수에 대입 후 완성
const danInput = document.querySelector('#dan');
const danBtn = document.querySelector('#danBtn')
const danResult = document.querySelector('.danResult')
console.log(danInput,danBtn,danResult, typeof danInput)
danBtn.addEventListener('click', function(){ dan99(danInput.value); })
function dan99(dan){
    let total = '';
    total = `${dan}X1=${dan*1}<br>`;
    total +=`${dan}X2=${dan*2}<br>`;
    total +=`${dan}X3=${dan*3}<br>`;
    total +=`${dan}X4=${dan*4}<br>`;
    total +=`${dan}X5=${dan*5}<br>`;
    total +=`${dan}X6=${dan*6}<br>`;
    total +=`${dan}X7=${dan*7}<br>`;
    total +=`${dan}X8=${dan*8}<br>`;
    total +=`${dan}X9=${dan*9}`;
    return danResult.innerHTML = total;
    /* danResult.innerHTML =`${dan}X1=${dan*1}<br>`; //함수가 실행될 때 이전 값을 지우고 생성하기 위해서 첫쨰줄은 복합함수는 +=가 아닌 =로 사용한다. 
    danResult.innerHTML +=`${dan}X2=${dan*2}<br>` ;
    danResult.innerHTML +=`${dan}X3=${dan*3}<br>`;
    danResult.innerHTML +=`${dan}X4=${dan*4}<br>`;
    danResult.innerHTML +=`${dan}X5=${dan*5}<br>`;
    danResult.innerHTML +=`${dan}X6=${dan*6}<br>`;
    danResult.innerHTML +=`${dan}X7=${dan*7}<br>`;
    danResult.innerHTML +=`${dan}X8=${dan*8}<br>`;
    danResult.innerHTML +=`${dan}X9=${dan*9}`; */
    //return console.log(dan*4); // (dan+4) <- +같은경우는 Number를 사용하지 않으면 문자로 인식이된다/ */- 같은 경우는 Number사용 없이도 숫자로 인식되어 편하게 사용 가능하다.
}