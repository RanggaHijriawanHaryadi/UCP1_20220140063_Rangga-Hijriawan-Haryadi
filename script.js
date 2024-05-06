function showAlert(){
    alert(tampil(),show())
    function tampil() {
        alert(" heheheh")
    } 
}

function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    // Menambahkan angka 0 di depan jika angka kurang dari 10
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;

    // Menampilkan jam di dalam elemen dengan id "clock"
    var clockElement = document.getElementById("clock");
    clockElement.innerHTML = hours + ":" + minutes + ":" + seconds;

    // Grading jam berdasarkan zona waktu Indonesia (WIB)
    var grading = "";
    if (hours >= 0 && hours < 6) {
        grading = "Malam";
    } else if (hours >= 6 && hours < 12) {
        grading = "Pagi";
    } else if (hours >= 12 && hours < 18) {
        grading = "Siang";
    } else {
        grading = "Malam";
    }
    
    // Menampilkan grading di dalam elemen dengan id "grading"
    var gradingElement = document.getElementById("grading");
    gradingElement.innerHTML = "Grading Jam (WIB): " + grading;
    
}

// Memperbarui jam setiap detik
setInterval(updateClock, 1000);

// Memanggil fungsi updateClock untuk pertama kali agar jam terupdate segera
updateClock();




let currentSlide = 0;
const slides = document.querySelectorAll('.card');

function showSlide(n) {
  slides[currentSlide].style.display = 'none';
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].style.display = 'block';
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

showSlide(currentSlide); // Memastikan slide pertama ditampilkan saat halaman dimuat

