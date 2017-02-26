/*按钮换肤*/
function ChangeSkin(colorStr) {
    var wl = window.localStorage;
    switch (colorStr) {
        case "red":
        case "yellow":
        case "blue":
        case "green":
        case "purple":
            document.getElementById("topMenuDiv").style.borderTopColor = colorStr;
            document.getElementById("fstLi").style.background = colorStr;
            var topMenuSpanArr = document.getElementsByClassName("topMenuSpan");
            for (var i = 0; i < topMenuSpanArr.length; i++) {
                topMenuSpanArr[i].onmouseenter = function adf() {
                    this.style.color = colorStr;
                }
                topMenuSpanArr[i].onmouseleave = function qwe() {
                    this.style.color = "black";
                }
            }

            document.getElementById("secMenuDiv").style.borderColor = colorStr;
            document.getElementById("secMenuDiv").style.borderTopColor = "transparent";
            document.getElementById("fstA").style.color = colorStr;
            document.getElementById("webDiv").style.borderColor = colorStr;

            var webAArr = document.getElementsByClassName("webA");
            for (var i = 0; i < webAArr.length; i++) {
                webAArr[i].style.color = colorStr;
            }
            wl["color"] = colorStr;
            break;
        default:
            break;
    }
}


/*初始化皮肤*/
function initSkin() {
    var wl = window.localStorage;
    switch (wl["color"]) {
        case "red":
        case "yellow":
        case "blue":
        case "green":
        case "purple":
            break;
        default:
            wl["color"] = "green";
            break;
    }
    document.getElementById("topMenuDiv").style.borderTopColor = wl["color"];
    document.getElementById("fstLi").style.background = wl["color"];
    var topMenuSpanArr = document.getElementsByClassName("topMenuSpan");
    for (var i = 0; i < topMenuSpanArr.length; i++) {
        topMenuSpanArr[i].onmouseenter = function adf() {
            this.style.color = wl["color"];
        }
        topMenuSpanArr[i].onmouseleave = function qwe() {
            this.style.color = "black";
        }
    }

    document.getElementById("secMenuDiv").style.borderColor = wl["color"];
    document.getElementById("secMenuDiv").style.borderTopColor = "transparent";
    document.getElementById("fstA").style.color = wl["color"];
    document.getElementById("webDiv").style.borderColor = wl["color"];

    var webAArr = document.getElementsByClassName("webA");
    for (var i = 0; i < webAArr.length; i++) {
        webAArr[i].style.color = wl["color"];
    }
}
initSkin();
