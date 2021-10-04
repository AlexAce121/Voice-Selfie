  var speechRecognition = window.webkitSpeechRecognition;
  var recognition = new speechRecognition();

  function Start(){
      document.getElementById("hello").value = "";
      recognition.start();
  }

  recognition.onresult = function LeoResult(event){
      console.log(event);
      var content = event.results[0][0].transcript;
      console.log(content);
      if(content== "Take my selfie."){
      document.getElementById("hello").value = content;
      speak();
      }
  }

  function speak(){
     var s = window.speechSynthesis;
     var speak_data = "Taking your selfie in 10 seconds";
     var utter = new SpeechSynthesisUtterance(speak_data);
     s.speak(utter);

     Webcam.attach(Chimera);
     setTimeout(leo,10000);

  }

  Webcam.set({
      width:360 ,
      height:250, 
      image_format:'png',
      png_quality:200
  });

  var Chimera = document.getElementById("camera");

  function leo(){
      console.log("Sup Boi");
      take_snapshots()
      save()
  }

  function take_snapshots() {
      Webcam.snap(function(data_uri){
          document.getElementById("result").innerHTML="<img id='selfie' src="+data_uri+">";
      })
  }

  function save(){
     var l  = document.getElementById("link");
     var img = document.getElementById("selfie").src;
     l.href=img;
     l.click();
  }