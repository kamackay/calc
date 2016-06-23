function showInOutput(str, newLn = true, tab = 0) {
    var out = $('#output');
    if (newLn) out.append('<br>');
    for (var i = 0; i < tab; i++) out.append('    ');
    out.append(str);
}
var win = $(window);


var f = function () {
    var size = win.height() / 10;
    var mobile = isMobileDevice();
    var calc = $('body').find('.calculator');
    var numbers = calc.find('.numbers');
    var buttons = calc.find('.btn');
    if (mobile || win.height() > win.width()) calc.css('width', '100%');
    else calc.css('width', '60%');
    var w = (numbers.width() / 4) - 1;
    $.each(buttons, function (n, o) {
        $(this).css('font-size', size / 2).css('width', w);
    });
    calc.find('.console').css('height', size * 2).css('width', w * 4);
    $('#bottomButtons').css('height', size * 3);
};

($(document).ready(function () {
    $('#output').html("Output:<br>");
    f();
    $(window).resize(f);
    con = $('#numberIn');
}));

var con;

function calcButton(btn) {
    if (btn === 'clear') {
        con.html('');
    } else if (btn === 'plus') {

    } else if (btn === 'minus') {

    } else if (btn === 'equal') {

    } else if (btn === 'period') {

    } else if (btn === 'multiply') {

    } else {
        con.append(btn);
    }
}

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
        while (n % i == 0) {
            showInOutput(i.toString());
            n = n / i;
        }
    }
    if (n > 2) showInOutput(n.toString());
}
