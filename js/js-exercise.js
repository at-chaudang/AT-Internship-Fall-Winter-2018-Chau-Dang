function Ex1(a = 0, b = 0){
  if (a == b) return a*6;
  return +a + (+b);
}
function Ex2(a = 0){
  if (a > 19) return (a - 19) * 3;
  return 19 - a;
}
function Ex3(a = 0, num = 1){
  let temp,result = [];
  for (var j = 0; j <= 9; j++) {
    temp = a.replace('*',j);
    if(!(+temp%num)) {
      result.push(temp);
      j += num - 1;
    }
  }
  return result;
}
function rs_ex1(){
  var ex1_a = document.getElementById("ex1_a").value;
  var ex1_b = document.getElementById("ex1_b").value;
  document.getElementById("ex1_rs").innerHTML = Ex1(ex1_a,ex1_b);
}
function rs_ex2(){
  var ex2_a = document.getElementById("ex2_a").value;
  document.getElementById("ex2_rs").innerHTML = Ex2(ex2_a);
}
function rs_ex3(){
  var ex3_a = document.getElementById("ex3_a").value;
  document.getElementById("ex3_rs").innerHTML = Ex3(ex3_a,3);
}
function rs_ex4(){
  var ex4_a = document.getElementById("ex4_a").value;
  document.getElementById("ex4_rs").innerHTML = Ex3(ex4_a,6);
}
