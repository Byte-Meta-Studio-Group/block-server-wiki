function calcss() {
    var sc = prompt("请输入收购价格:");
    var prc = sc * 1.5;
    alert("购买价格为:" + prc);
}

function seeerbaidu() {
    var question = prompt("请输入您的问题");
    if (question == null) {} else {
        location.replace("https://www.baidu.com/s?wd=" + question);
    }
}