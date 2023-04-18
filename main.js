function playAudio() {
    alert("Musik di mainkan, maafin aku ada bug di tombol yang ngga bisa di solve :(")
    var audio = document.getElementById("myAudio");
    audio.play();
  }  

function putar() {
    var audio1 = document.getElementById("song");
    audio1.play();
}
function buka(){
  document.getElementById('surat').classList.add('sembunyi');
  alert('SELAMAT ULANG TAHUN ICA NUR FAIDZAH !');
  document.getElementById('card').classList.remove('sembunyi');
  var audio1 = document.getElementById("song");
    audio1.play();
}