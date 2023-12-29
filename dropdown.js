function changeSong() {
  var selectElement = document.getElementById("songSelector");
  var audioSourceElement = document.getElementById("audioSource");

  var selectedValue = selectElement.value;
  audioSourceElement.src = selectedValue;

  var audioPlayer = document.getElementById("audioPlayer");
  audioPlayer.load();
  audioPlayer.play();
}
