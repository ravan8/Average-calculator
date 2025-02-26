function calculateAverage() {
    let input = document.getElementById("numbers").value;
    let numbers = input.split(",").map(Number);
    
    if (numbers.some(isNaN) || numbers.length === 0) {
        document.getElementById("result").innerText = "Please enter valid numbers!";
        return;
    }
    
    let sum = numbers.reduce((acc, num) => acc + num, 0);
    let average = sum / numbers.length;
    
    document.getElementById("result").innerText = "Average: " + average.toFixed(2);
}
