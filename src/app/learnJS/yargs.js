const argv = require('yargs').argv;
const info = [];
var input = argv._[0];
// prime number
function kiem_tra_snt(n) {
    // Biến cờ hiệu
    var flag = true;
    // Nếu n bé hơn 2 tức là không phải số nguyên tố
    if (n < 2) {
        flag = false;
    }
    else {
        // lặp từ 2 tới n-1
        for (var i = 2; i < n - 1; i++) {
            if (n % i == 0) {
                flag = false;
                break;
            }
        }
    }
    // Kiểm tra biến flag
    return flag;
}
const x = kiem_tra_snt(argv._);
// console.log(x);
//----------------------------------------------

// check date
function checkDate(day, month) {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();

    if (day == dd && month == mm) {
        console.log("Date correct!");
    } else {
        if (day == dd) console.log("Day correct!");
        if (month == mm) console.log("Month correct!");
    }
}
// checkDate(argv._.getDate, argv._.getMonth);
// SUM
var sum = argv._.toString().split('').reduce(function(a, b) { return a + b; });
// console.log(sum);

// SUM NUMBER
var sum = 0;
// console.log((input/10).pa);
// while (input > 0) {
//     m = input % 10;
//     sum += m;
//     input = parseInt(input / 10);
// }
console.log(sum);

// info.push(argv);
// argv._.map(el => {
//     console.log(el);
// });
// argv._.forEach(el => {
//     console.log(el);
// });
