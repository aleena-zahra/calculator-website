function dis(val) {
    document.getElementById("result").value += val
}

function myFunction(event) {
    if (event.key == '+' || event.key == '-'
        || event.key == '*' || event.key == '/' || event.key == '%')
        document.getElementById("result").value += event.key;
}

var cal = document.getElementById("calcu");
cal.onkeyup = function (event) {
    if (event.keyCode === 13) {
        console.log("Enter");
        let x = document.getElementById("result").value
        console.log(x);
        solve();
    }
}

function solve() {
    let x = document.getElementById("result").value
    let y = math.evaluate(x)
    document.getElementById("result").value = y
}

function clr() {
    document.getElementById("result").value = ""
} 
