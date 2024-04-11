//form login
document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  //data untuk login
  var validUsername = "fidela";
  var validPassword = "1234";

  if (username === validUsername && password === validPassword) {
    alert("Login berhasil!");
    //untuk mengalihkan pengguna ke halaman index.html apabila berhasil login
    window.location.href = "index.html";
  } else if (username !== validUsername || password !== validPassword) {
    window.location.href = "register.html";
  } else {
    alert("Username atau password salah!");
  }
});

//fungsi untuk mengarahkan ke halaman beranda apabila menekan button back
function goToLoginPage() {
  window.location.href = "index.html";
}

//event listener pada tombol login
document.getElementById("btnBack").addEventListener("click", function(event) {
    event.preventDefault(); //menghentikan aksi default (submit form)
    goToLoginPage(); //panggil fungsi untuk mengarahkan ke halaman login
});