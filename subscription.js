
let btn1 = document.getElementById("mobile");
let btn2 = document.getElementById("basic");
let btn3 = document.getElementById("standard");
let btn4 = document.getElementById("premium");
let text1 = document.getElementsByClassName('A1');
let text2 = document.getElementsByClassName('A2');
let text3 = document.getElementsByClassName('A3');
let text4 = document.getElementsByClassName('A4');

let right_yearly = document.getElementsByClassName('right_yearly');
let right_monthly = document.getElementsByClassName('right_monthly');

let yearly = document.getElementById("yearly");
let monthly = document.getElementById("monthly");

let originalYTStyle = {
    backgroundColor: yearly.style.backgroundColor
};

let originalMTStyle = {
    backgroundColor: monthly.style.backgroundColor
};

let originalBtnStyles = {
    backgroundColor: btn3.style.backgroundColor,
    color: btn3.style.color
};

function tap1() {
    revertBtn2();
    revertBtn3();
    revertBtn4();
    
    btn1.style.backgroundColor = '#4a4aec';
    btn1.style.color = '#ffffff';
    for (let i = 0; i < text1.length; i++) {
        text1[i].style.color = '#4a4aec';
    }
}

function tap2() {
    revertBtn1();
    revertBtn3();
    revertBtn4();

    btn2.style.backgroundColor = '#4a4aec';
    btn2.style.color = '#ffffff';
    for (let i = 0; i < text2.length; i++) {
        text2[i].style.color = '#4a4aec';
    }
}

function tap3() {
    revertBtn1();
    revertBtn2();
    revertBtn4();

    btn3.style.backgroundColor = '#4a4aec';
    btn3.style.color = '#ffffff';
    for (let i = 0; i < text3.length; i++) {
        text3[i].style.color = '#4a4aec';
    }
}

function tap4() {
    revertBtn1();
    revertBtn2();
    revertBtn3();

    btn4.style.backgroundColor = '#4a4aec';
    btn4.style.color = '#ffffff';
    for (let i = 0; i < text4.length; i++) {
        text4[i].style.color = '#4a4aec';
    }
}

function revertBtn1() {
    btn1.style.backgroundColor = originalBtnStyles.backgroundColor;
    btn1.style.color = originalBtnStyles.color;

    for (let i = 0; i < text1.length; i++) {
        text1[i].style.color = '';
    }
}

function revertBtn2() {
    btn2.style.backgroundColor = originalBtnStyles.backgroundColor;
    btn2.style.color = originalBtnStyles.color;

    for (let i = 0; i < text2.length; i++) {
        text2[i].style.color = '';
    }
}

function revertBtn3() {
    btn3.style.backgroundColor = originalBtnStyles.backgroundColor;
    btn3.style.color = originalBtnStyles.color;

    for (let i = 0; i < text3.length; i++) {
        text3[i].style.color = '';
    }
}

function revertBtn4() {
    btn4.style.backgroundColor = originalBtnStyles.backgroundColor;
    btn4.style.color = originalBtnStyles.color;

    for (let i = 0; i < text4.length; i++) {
        text4[i].style.color = '';
    }
}

btn1.addEventListener('click', tap1);
btn2.addEventListener('click', tap2);
btn3.addEventListener('click', tap3);
btn4.addEventListener('click', tap4);


function tapYearly() {
    tap4();
    yearly.style.backgroundColor = '#EDEAE5';
    monthly.style.backgroundColor = '#4a4aec';
    
    for (let i = 0; i < right_yearly.length; i++) {
        right_monthly[i].style.display = 'none';
        right_yearly[i].style.display = 'flex'; 
    }
}

function tapMonthly() {
    tap1();
    monthly.style.backgroundColor = '#EDEAE5';
    yearly.style.backgroundColor = '#4a4aec';
    for (let i = 0; i < right_yearly.length; i++) {
        right_monthly[i].style.display = 'flex';
        right_yearly[i].style.display = 'none';
    }
}

yearly.addEventListener('click', tapYearly);
monthly.addEventListener('click', tapMonthly);
