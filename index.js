function calculateSquare() {
    let num = document.getElementById("number").value;
    let square = num * num;
    document.getElementById("disabled").value = square;
}