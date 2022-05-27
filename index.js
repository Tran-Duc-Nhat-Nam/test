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

function moveBanner(number, button) {
  var a = document.querySelectorAll(".slide");
  a.forEach((element) => {
    var i = window
      .getComputedStyle(element)
      .getPropertyValue("opacity");
    if (i == 1) {
      element.style.opacity = 0;
    }
  });
  document.getElementById("slide_" + number).style.opacity = 1;
  var b = document.querySelectorAll(".option");
  b.forEach((element) => {
    var o = window
      .getComputedStyle(element)
      .getPropertyValue("opacity");
    if (o == 1) {
      element.style.opacity = 0.5;
    }
  });
  button.style.opacity = 1;
}

function fade() {
  let e = document.getElementById('bd')
  e.style.opacity = 1;
}

function openSubNav(obj, child_class) {
  var children = obj.children;
  for (var i = 0; i < children.length; i++)
  {
    if (children[i].classList.contains(child_class))
    {
      if (window.getComputedStyle(children[i]).getPropertyValue("display") == 'none')
      {
        children[i].style.display = 'grid';
      }
      else
      {
        children[i].style.display = 'none';
      }
    }
  }
}

function radio(button, radio_button, checked_button) {
  var b = document.querySelectorAll(radio_button);
  b.forEach((element) => {
    if (element.classList.contains(checked_button)) 
    {
      element.classList.remove(checked_button);
    }
  });

  button.classList.add(checked_button)
}

function notify(text) {
  alert(text)
}

function signup(check_box_id) {
  var b = document.querySelectorAll('.signup_input');
  var check = true;

  b.forEach((element) => {
    console.log(element.value);
    if (element == null || element.value == '') 
    {
      check = false
    }
  });

  var p = document.getElementById('password_signup');
  var pc = document.getElementById('password_confirm');

  if (document.getElementById(check_box_id).checked == true && check == true && p.value == pc.value)
  {
    alert('Đăng ký tài khoản thành công');
    window.open('./index.html','_self')
  }
  else if (check == false)
  {
    alert('Vui lòng nhập đầy đủ thông tin');
  }
  else if (p.value != pc.value)
  {
    alert('Mật khẩu không trùng khớp');
  }
  else
  {   
    alert('Vui lòng chấp nhận điều khoản sử dụng');
  }
}

function login() {
  var b = document.querySelectorAll('.login_input');
  var check = true;

  b.forEach((element) => {
    console.log(element.value);
    if (element == null || element.value == '') 
    {
      check = false
    }
  });

  if (check == true)
  {
    alert('Đăng nhập thành công');
    window.open('./index.html','_self')
  }
  else
  {
    alert('Vui lòng nhập đầy đủ thông tin');
  }
}