let video = document.querySelector("#video")
const constraints = {
  audio: false,
  video: true,
    width: {min: 640, ideal: 1280},
  height: {min: 480, ideal: 720},
  advanced: [
    {width: 1920, height: 1280},
    {aspectRatio: 1.333}
  ]
};
if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia){
    navigator.mediaDevices.getUserMedia(constraints).then(
        (stream) =>{
            const videoTracks = stream.getVideoTracks();
            console.log('Got stream with constraints:', constraints);
            console.log(`Using video device: ${videoTracks[0].label}`);
              const track = mediaStream.getVideoTracks()[0];
              track.applyConstraints(constraints)
              .then(() => {
                    // Do something with the track such as using the Image Capture API.
                  })
                  .catch((e) => {
                    // The constraints could not be satisfied by the available devices.
                  });




            video.srcObject = stream;
            video.play();
        }
    )};