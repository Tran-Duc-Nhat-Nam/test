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

function openSubNav(obj) {
  var children = obj.children;
  for (var i = 0; i < children.length; i++)
  {
    if (children[i].classList.contains('side_cate_nav_sub_item'))
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

function radio(button) {
  var b = document.querySelectorAll(".radio_size");
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