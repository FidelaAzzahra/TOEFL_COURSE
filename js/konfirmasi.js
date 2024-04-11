//form konfirmasi
document.getElementById("btnBack").addEventListener("click", function(event) {
    event.preventDefault();
  
    //fungsi untuk mengarahkan ke halaman beranda apabila menekan button back
    function goToIndexPage() {
        window.location.href = "index.html";
    }

    // Panggil fungsi goToIndexPage() saat tombol diklik
    goToIndexPage();
})
