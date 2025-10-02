/**
 * 클릭이벤트 구현
 */

//버튼 저장
const startBtn = document.getElementById("start");
const resetBtn = document.getElementById("reset");

const minInput = document.getElementById("minute");
const secInput = document.getElementById("second");

minInput.value = "0";
secInput.value = "0";

let timerInterval;

/**
 * 두 개의 매개변수 존재함
 * 1. 이벤트 종류(클릭, 변경, 수정 등) : 문자열
 * 2. 실행할 함수
 *      2-1. 일반함수: function(){}
 *      2-2. 화살표함수: ()=>{}
 */

//시작버튼
startBtn.addEventListener("click", () => {
    // 시작 시 매번 기존 인터벌 삭제하여 인터벌 중첩 방지
    clearInterval(timerInterval);
    // 분, 초에 입력된 값 가져와서 #timer에다가 때려박고 타이머 돌리면되겠죠?
    const timer = document.getElementById("timer");

    //값 가져오기
    let min = minInput.value;
    let sec = secInput.value;

    //타이머에 넣기    
    timer.textContent = `${min<10 ? "0"+min : min}:${sec<10 ? "0"+sec : sec}`;

    /**
     * setInterval 함수
     * 정해진 시간마다 코드를 반복하는 함수
     * 2개의 매개변수 존재
     *      1. 익명함수(callback함수)
     *      2. 시간(ms)
     */
    timerInterval = setInterval(() => {
        sec--;
        if(min == 0 && sec == 0){
            clearInterval(timerInterval);   //타이머 종료
            timer.textContent = "00:00";
            minInput.value = "0";
            secInput.value = "0";
        }
        timer.textContent = `${min<10 ? "0"+min : min}:${sec<10 ? "0"+sec : sec}`;
        if(min > 0 && sec == 0){
            sec = 60;
            min--;
        }
    }, 1000);

});

//리셋버튼
resetBtn.addEventListener("click", () => {
    clearInterval(timerInterval);
    timer.textContent = "00:00";
    minInput.value = "0";
    secInput.value = "0";
});



/**
     * setTimeOut 함수
     * 지정된 시간이 지나면 함수실행 후 종료
     */
    // let auto = setTimeout(() => {
        
    // }, 30000);

