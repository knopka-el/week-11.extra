function calculateSquare() {
    const num = document.getElementById("number").value;
    const square = num * num;
    document.getElementById("disabled").value = square;
}