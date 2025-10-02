// 콜백헬(callbackhell)
function callback() {
  setTimeout(() => {
    console.log("a.라면 장보기");
    setTimeout(() => {
      console.log("b. 물 끓이기");
      setTimeout(() => {
        console.log("c. 끓는물에 라면,스프넣기");
        setTimeout(() => {
          console.log("d. 완성");
        }, 3000);
      }, 3000);
    }, 3000);
  }, 3000);
}
callback();
