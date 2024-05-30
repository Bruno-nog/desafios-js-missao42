$(document).ready(function() {
    function isInteger(value) {
        return /^\d+$/.test(value);
    }

    $('#calculateButton').click(function() {
        var leftOperand = $('#leftOperand').val();
        var operator = $('#operator').val();
        var rightOperand = $('#rightOperand').val();

        if (!isInteger(leftOperand) || !isInteger(rightOperand)) {
            alert('Error :(');
            return;
        }

        leftOperand = parseInt(leftOperand);
        rightOperand = parseInt(rightOperand);

        if ((operator === '/' || operator === '%') && rightOperand === 0) {
            alert("It's over 9000!");
            console.log("It's over 9000!");
            return;
        }

        var result;
        if (operator === '+') result = leftOperand + rightOperand;
        if (operator === '-') result = leftOperand - rightOperand;
        if (operator === '*') result = leftOperand * rightOperand;
        if (operator === '/') result = leftOperand / rightOperand;
        if (operator === '%') result = leftOperand % rightOperand;

        alert('Result: ' + result);
        console.log('Result: ' + result);
    });

    setInterval(function() {
        alert('Please, use me...');
    }, 30000);
});