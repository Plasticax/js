// STRING FUNCTIONS

function reverseString(str) {
    return str.split('').reverse().join('');
}

function countCharacters(str) {
    return str.length;
}

function capitalizeWords(sentence) {
    return sentence
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}


// ARRAY FUNCTIONS

function findMax(arr) {
    return Math.max(...arr);
}

function findMin(arr) {
    return Math.min(...arr);
}

function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

function filterArray(arr) {
    return arr.filter(num => num % 2 === 0);
}


// MATHEMATICAL FUNCTIONS

function factorial(n) {
    let result = 1;

    for (let i = 1; i <= n; i++) {
        result *= i;
    }

    return result;
}

function isPrime(num) {
    if (num <= 1) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

function fibonacci(n) {
    let sequence = [0, 1];

    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }

    return sequence;
}


// DISPLAY RESULTS ON PAGE

const output = document.getElementById("output");

output.innerHTML = `
    <div class="result">
        <strong>Reverse String:</strong> ${reverseString("hello")}
    </div>

    <div class="result">
        <strong>Character Count:</strong> ${countCharacters("JavaScript")}
    </div>

    <div class="result">
        <strong>Capitalized Words:</strong> ${capitalizeWords("hello world from javascript")}
    </div>

    <div class="result">
        <strong>Maximum Value:</strong> ${findMax([10, 5, 20, 8])}
    </div>

    <div class="result">
        <strong>Minimum Value:</strong> ${findMin([10, 5, 20, 8])}
    </div>

    <div class="result">
        <strong>Sum of Array:</strong> ${sumArray([1, 2, 3, 4, 5])}
    </div>

    <div class="result">
        <strong>Filtered Array (Even Numbers):</strong> ${filterArray([1,2,3,4,5,6]).join(", ")}
    </div>

    <div class="result">
        <strong>Factorial of 5:</strong> ${factorial(5)}
    </div>

    <div class="result">
        <strong>Is 7 Prime?</strong> ${isPrime(7)}
    </div>

    <div class="result">
        <strong>Fibonacci Sequence (10 Terms):</strong> ${fibonacci(10).join(", ")}
    </div>
`;