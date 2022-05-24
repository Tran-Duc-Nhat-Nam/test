function login() {
    alert('Đăng ký tài khoản thành công')
}

function floatOn() {
    document.getElementById('main').style.opacity = 1;
}

let dark = false;

function darkMode() {
    let body = document.getElementById('bd');
    let form = document.getElementById('main_form');

    if (dark)
    {
        body.style.backgroundImage = 'linear-gradient(115deg, pink, skyblue)';
        body.style.backgroundColor = 'white';
        form.style.boxShadow = '6px 6px 15px gray';
        dark = false;
    }
    else 
    {
        body.style.backgroundImage = 'none';
        body.style.backgroundColor = 'black';
        form.style.boxShadow = 'none';
        dark = true;
    }
}