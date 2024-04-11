//form registrasi
document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    //ambil nilai dari semua input
    var namaLengkap = document.getElementById("reg_namalengkap").value;
    var username = document.getElementById("reg_username").value;
    var email = document.getElementById("reg_email").value;
    var password = document.getElementById("reg_password").value;
    var jenisKelamin = document.querySelector('input[name="reg_jeniskelamin"]:checked');
    var tanggalLahir = document.getElementById("reg_tanggallahir").value;
    var agama = document.getElementById("reg_agama").value;
    var alamat = document.getElementById("reg_alamat").value;
  
    var dataRegistrasi = {
      "Fidela Azzahra": namaLengkap,
      "fidela": username,
      "fidela@gmail.com": email,
      "1234": password,
      "P": jenisKelamin.value,
      "11/16/2002": tanggalLahir,
      "Islam": agama,
      "Jalan taman Sri Rejeki Selatan 8 No 16": alamat
    };
  
    //validasi input
    if (namaLengkap && username && email && password && jenisKelamin && tanggalLahir && agama && alamat) {
      alert("Registrasi Berhasil");
      //untuk mengalihkan pengguna ke halaman login apabila berhasil registrasi
      window.location.href = "login.html";
    } else {
      alert("Mohon isi semua kolom pada form registrasi.");
    }
  
    console.log("Data Registrasi:", dataRegistrasi);
  });


//fungsi untuk mengarahkan ke halaman login apabila menekan button login
  function goToLoginPage() {
  window.location.href = "login.html";
}

//event listener pada tombol login
document.getElementById("btnLogin").addEventListener("click", function(event) {
    event.preventDefault(); //menghentikan aksi default (submit form)
    goToLoginPage(); //panggil fungsi untuk mengarahkan ke halaman login
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