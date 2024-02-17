document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('btn-bmi').addEventListener('click', function(){
    var tinggi = parseInt(document.getElementById('tinggi').value);
    var berat = parseInt(document.getElementById('berat').value);
    var hasil = (berat / (tinggi * tinggi) * 10000);
    hasil = hasil.toFixed(2);
    document.getElementById('hasil').innerHTML = hasil;
    var bmi = hasil; 
    if (bmi < 18.5) {
        document.getElementById('status').innerHTML = "Kurus";
    } else if (bmi < 25) {
        document.getElementById('status').innerHTML = "Normal";
    } else if (bmi < 30) {
        document.getElementById('status').innerHTML = "Kelebihan";
    } else {
        document.getElementById('status').innerHTML = "Obesitas";
    }
});
});
