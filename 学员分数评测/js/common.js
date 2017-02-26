function func() {
    var score = parseInt(document.getElementById("score").value);
    if (score < 0 || score > 100) {
        document.getElementById("result").innerText = "警告:请输入正确分数（0~100）";
        return;
    }

    var rank = (10 - parseInt(score / 10)) == 0 ? 1 : (10 - parseInt(score / 10)); //用三目运算符是为了把100分归结为1等生
    switch (rank) {
        case 1:
            document.getElementById("result").innerText = "该学员为1等生，属于90~100分数区间";
            break;
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
            document.getElementById("result").innerText = "该学员为" + String(rank) + "等生，属于" + String(parseInt(score / 10)) + "0~" + String(parseInt(score / 10)) + "9分数区间";
            break;
        default:
            break;
    }
}
