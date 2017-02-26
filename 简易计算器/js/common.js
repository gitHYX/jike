function func() {
    var num1 = Number(document.getElementById("num1").value); //第一个数字
    var num2 = Number(document.getElementById("num2").value); //第二个数字
    var op = document.getElementById("operator").value; //操作符

    //数字校验
    if (isNaN(num1) ||
        document.getElementById("num1").value == "" ||
        isNaN(num2) ||
        document.getElementById("num2").value == "") {
        alert("请正确填写数字");
        return;
    } else if (num2 == 0 && op == "/") {
        alert("除数不能为0");
        return;
    }
    document.getElementById("result").innerText = "计算结果：" + String(calculate(num1, num2, op));
}

function calculate(num1, num2, op) {
    switch (op) {
        case "*":
            return parseFloat((num1 * num2).toFixed(8));
        case "/":
            return parseFloat((num1 / num2).toFixed(8));
        case "+":
            return parseFloat((num1 + num2).toFixed(8));
        case "-":
            return parseFloat((num1 - num2).toFixed(8));
        default:
            break;
    }
}
