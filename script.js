lightbox.option({
  resizeDuration: 200,
  wrapAround: true,
  disableScrolling: true,
});

const hero = document.querySelector("#hero")
const btnHero = document.querySelector("#btn-hero")
const home = document.querySelector("#home");

document.addEventListener('DOMContentLoaded', function() {
  // Sembunyikan navbar pada awal
  const navbar = document.querySelector('.navbar');
  navbar.style.display = 'none';
});

btnHero.addEventListener("click", function(){
  // Tambahkan class 'hide' untuk memulai transisi
  hero.classList.add("hide");

  // Tunggu transisi selesai
  setTimeout(() => {
    // Hapus hero setelah transisi selesai
    hero.remove();

    // Scroll smooth ke section home
    home.scrollIntoView({ behavior: 'smooth' });

    
  }, 1000); // Pastikan durasi sesuai dengan transisi CSS
})

btnHero.addEventListener("click", function(){
  // Tampilkan navbar
  const navbar = document.querySelector('.navbar');
  navbar.style.display = 'flex'// Atau 'block' tergantung pada layout CSS kamu
})



// Tambahkan ini di script.js
const allGiftButtons = document.querySelectorAll('.btn-gifts');

allGiftButtons.forEach(button => {
  button.addEventListener('click', function() {
    const accountNumber = this.getAttribute('data-account');
    
    navigator.clipboard.writeText(accountNumber).then(() => {
      // Simpan teks asli tombol
      const originalText = this.innerHTML;
      
      // Ubah teks tombol untuk memberi feedback
      this.innerHTML = 'Berhasil Disalin!';
      
      // Kembalikan ke teks semula setelah beberapa detik
      setTimeout(() => {
        this.innerHTML = originalText;
      }, 2000); // 2 detik
      
    }).catch(err => {
      console.error('Gagal menyalin: ', err);
      alert('Gagal menyalin nomor rekening.');
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Membuat objek untuk membaca parameter dari URL.
    const urlParams = new URLSearchParams(window.location.search);
    
    // 2. Mengambil nama tamu dari parameter 'untuk'.
    //    Contoh URL: .../index.html?untuk=Andi+Saputra
    const namaTamu = urlParams.get('untuk');

    // 3. Hanya jalankan kode jika parameter 'untuk' ditemukan di URL.
    if (namaTamu) {
      // 4. Cari elemen di HTML yang memiliki id="nama-tamu".
      const elemenNamaTamu = document.getElementById('nama-tamu');
      
      // 5. Pastikan elemennya ada, lalu ganti isinya dengan nama tamu.
      if (elemenNamaTamu) {
        // Mengganti kode '+' dari URL menjadi spasi ' ' agar nama tampil benar.
        elemenNamaTamu.innerText = namaTamu.replace(/\+/g, ' ');
      }
    }
    
  });
