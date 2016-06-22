function showInOutput(str, newLn = true, tab = 0) {
    var out = $('#output');
    if (newLn) out.append('<br>');
    for (var i = 0; i < tab; i++) out.append('    ');
    out.append(str);
}



($(document).ready(function () {
    $('#output').html("Output:<br>");
}));

function calculate() {

    getAllPrimes(parseInt($('#numberInput').val()));
}

function getAllPrimes(n = 50) {
    showInOutput('<br>Primes of ' + n.toString());
    while (n % 2 == 0) {
        showInOutput('    2');
        n = n / 2;
    }
    for (var i = 3; i <= Math.sqrt(n); i = i + 2) {
        // While i divides n, print i and divide n
        while (n % i == 0) {
            showInOutput(i.toString());
            n = n / i;
        }
    }

    // This condition is to handle the case whien n is a prime number
    // greater than 2
    if (n > 2)
        showInOutput(n.toString());
}
