//변수와 html 요소 활용
//1. 밥 주문하기 변수와 함수
var bowl; // 그릇준비
bowl = '쌀밥';
bowl = '콩밥';
// 함수 생성(버튼 클릭 시 호출 목적)
// function 생성함수명() {함수실행결과}
function cookOrder(){
    console.log('주문한', bowl,'나왔습니다.')
}

//2. 메일수신확인 변수와 함수 버튼(메일함에는 하나의 메일만 넣을 수 있다. 새로운 메일이 오면 기존 메일은 폐기된다.)
var mail;
mail = '메일';
mail = '은행 결제 확인되었습니다.';
mail = '762 포인트 적립되었습니다';
function mailRecipt() {
    console.log('메일 1건 : ', mail)
}

//3. 장바구니 변수, 함수, 버튼
//'사과'만 구입할 수 있는 쇼핑몰
//버튼을 누를 때마다 사과가 1개씩 추가되서 구입된다.
var apple;
var num;
apple = '사과';
num = 0;
function appleBuy(){
    num = num+1
    console.log(apple, num, '개 주문하였습니다.')
}

//4. 재고 수량 감소 변수, 함수, qjxms
//바나나 재고는 10개로 사용자가 1개 주문할때마다 재고가 주문수량만큼 감소한다.
//버튼 클릭 시 콘솔 출력 메세지 예) 바나나 1개 주문완료, 재고?개 남았습니다
var banana;
banana = '바나나'
var num = 10;
var order_num = 0; //주문수량
function bananaBuy(){
    order_num = order_num+1
    num = num-order_num
    console.log(banana,order_num,'개 주문완료.','재고', num,'개 남았습니다')
}