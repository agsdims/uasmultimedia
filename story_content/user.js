function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6M6pKR4Ev4L":
        Script1();
        break;
      case "6qxBSSfQLyd":
        Script2();
        break;
      case "6o2na6aE878":
        Script3();
        break;
      case "6aJpsUgtAf7":
        Script4();
        break;
      case "6Z2xeEE40Ft":
        Script5();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSong');
if (audio) {
    audio.muted = true;
}

}

function Script2()
{
  var audio = document.getElementById('bgSong');

audio.src="0703.MP3";

audio.load();

audio.play();

audio.volume=0.3;

var audio = document.getElementById('bgSong');
if (audio) {
    audio.muted = false;
}

}

function Script3()
{
  var audio = document.getElementById('bgSong');
if (audio) {
    audio.muted = false;
}

}

function Script4()
{
  var audio = document.getElementById('bgSong');
if (audio) {
    audio.muted = false;
}

}

function Script5()
{
  var audio = document.getElementById('bgSong');
if (audio) {
    audio.muted = true;
}

}

