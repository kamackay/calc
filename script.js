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
    if (mobile || win.height() > win.width() * 1.5) calc.css('width', '100%');
    else {
        var a = win.width();
        var n = Math.min(a, a / Math.cbrt(a + 500) + 500);
        calc.css('width', n);
    }
    var w = (numbers.width() / 4) - 1;
    $.each(buttons, function (n, o) {
        var t = $(this);
        t.css('width', w).css('font-size', Math.max(size / 2, 30));
        t.css('height', Math.max(75, size));
    });
    calc.find('.smaller > *').css('height', (numbers.height() / 5));
    calc.find('.console').css('height', size * 2).css('width', w * 4).css('font-size', w / 4);
    $('#bottomButtons').css('height', size * 3);
};

($(document).ready(function () {
    $('#output').html("Output:<br>");
    $(document).on('keydown', function (e) {
        if (e.which === 190 || e.which === 110) calcButton('period');
        else if (e.which === 43 || e.which === 107) calcButton('plus');
        else if (e.which === 47) calcButton('divide');
        else if (e.which === 27 || e.which === 46) calcButton('clear');
        else {
            var a = e.which - 48;
            if (a >= 0 && a <= 9) calcButton(a);
            else if (a >= 48 && a <= 57) calcButton(a - 48);
            else alert(e.which);
        }
    });
    f();
    $(window).resize(f);
    con = $('#numberIn');
    //removeContextMenu();
}));

var con;

function calcButton(btn) {
    if (btn === 'clear') {
        con.html('0');
    } else if (btn === 'plus') {
        transfer('+');
    } else if (btn === 'minus') {
        transfer('-');
    } else if (btn === 'equal') {

    } else if (btn === 'divide') {
        transfer('&divide;');
    } else if (btn === 'period') {
        if (!con.html().includes('.')) con.append('.');
    } else if (btn === 'multiply') {
        transfer('<i style="font-size: inherit;" class="material-icons">clear</i>');
    } else {
        if (con.html() === '0') con.html('');
        con.append(btn);
    }
}

function transfer(extra = '') {
    $('#numberStore').html(con.html() + (extra ? ' ' + extra : ''));
    con.html('');
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
