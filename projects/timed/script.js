
// Timed showing html contents

const func = function (str1, str2) {
  document.querySelector(str2).textContent = str1;
}

  
window.setTimeout(function() {func("This is my page", "#head1")} ,3000);
window.setTimeout(function() {func("Welcome to my page", "#head2")} ,5000);
