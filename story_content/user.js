function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6ggsmv2kXko":
        Script1();
        break;
      case "6KzPBdiHWCl":
        Script2();
        break;
      case "6alZrZpdZIL":
        Script3();
        break;
      case "6KmzKOmudNe":
        Script4();
        break;
      case "6SM9IhVfdIE":
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

