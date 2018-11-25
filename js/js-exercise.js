function Ex1(a = 0, b = 0) {
  let a_tmp = Number(a);
  let b_tmp = Number(b);
  if (isNaN(a_tmp) || isNaN(b_tmp)) {
    return 'Im sorry. Please check number again.';
  }
  return (a_tmp === b_tmp) ? a_tmp * 6 : a_tmp + b_tmp;
}
function Ex2(a = 0) {
  let a_tmp = Number(a);
  if (isNaN(a_tmp)) return 'Im sorry. Please check number again.';
  return (a_tmp > 19) ? (a_tmp - 19) * 3 : 19 - a_tmp;
}
function Ex3(a = 0, num = 1) {
  let result = [];
  let jump = 1;
  let sum = 0;
  let validate = -1;
  let result_item;
  let i;
  if (!a) return result;
  for (i = 0; i < a.length; i++) {
    if (a[i] !== '*') {
      sum += Number(a);
    } else {
      validate++;
    }
  }
  if (validate) return 'Please check only one (*) again.';
  for (i = 0; i < 10; i += jump) {
    if (!((sum + i) % 3)) {
      result.push(a.replace('*', i));
      jump = 3;
    }
  }
  if (num === 6) {
    for (i = 0; i < result.length; i++) {
      result_item = result[i];
      if (result_item.charAt(result_item.length - 1) % 2) {
        result.splice(i, 1);
      };
    }
  }
  return result.join(' , ');
}
function rs_ex1() {
  var ex1_a = document.getElementById("ex1_a").value;
  var ex1_b = document.getElementById("ex1_b").value;
  document.getElementById("ex1_rs").innerHTML = Ex1(ex1_a,ex1_b);
}
function rs_ex2() {
  var ex2_a = document.getElementById("ex2_a").value;
  document.getElementById("ex2_rs").innerHTML = Ex2(ex2_a);
}
function rs_ex3() {
  var ex3_a = document.getElementById("ex3_a").value;
  document.getElementById("ex3_rs").innerHTML = Ex3(ex3_a,3);
}
function rs_ex4() {
  var ex4_a = document.getElementById("ex4_a").value;
  document.getElementById("ex4_rs").innerHTML = Ex3(ex4_a,6);
}
