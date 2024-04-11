//referensi dari w3 school
//untuk fungsi filter berita dan artikel
function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    if (c == "all") {
        c = ""; //atur kembali nilai c menjadi string kosong agar dapat menampilkan semua elemen
    }
    for (i = 0; i < x.length; i++) {
        if (c == "" || x[i].classList.contains(c)) {
            x[i].style.display = "block"; //menampilkan elemen jika string kosong atau kelas sesuai
        } else {
            x[i].style.display = "none"; //menyembunyikan elemen jika kelas tidak sesuai
        }
    }
}

//tambah dan hapus kelas aktif dari tombol filter
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = btnContainer.getElementsByClassName("active");
        current[0].classList.remove("active");
        this.classList.add("active");
    });
}
