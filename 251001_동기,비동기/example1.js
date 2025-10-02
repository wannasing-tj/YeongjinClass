//동기방식
console.log("===동기방식===");
console.log("1. 라면 장보기");
console.log("2. 물 끓이기");
console.log("3. 라면,스프 넣기");
console.log("4. 완성");

console.log("==비동기방식===");
setTimeout(() => {
  console.log("a. 장보기");
}, 3000);
console.log("b. 물 끓이기");
console.log("c. 스프,라면넣기");
console.log("d. 완성");
