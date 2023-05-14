let video = document.querySelector("#video")
const constraints = {
  audio: false,
  video: true,
  width: {min: 1920, ideal: 2790},
  height: {min: 1080, ideal: 1920},
  advanced: [
    {width: 2790, height: 1920},
    {aspectRatio: 1.333}
  ],
    facingMode: { exact: "environment" },
};

navigator.mediaDevices.getUserMedia({ video: true })
.then((mediaStream) => {
  const track = mediaStream.getVideoTracks()[0];
  track.applyConstraints(constraints)
  .then(() => {
    // Do something with the track such as using the Image Capture API.
  })
  .catch((e) => {
    // The constraints could not be satisfied by the available devices.
  });
});
if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia){
    navigator.mediaDevices.getUserMedia(constraints).then(
        (stream) =>{
            const videoTracks = stream.getVideoTracks();
            console.log('Got stream with constraints:', constraints);
            console.log(`Using video device: ${videoTracks[0].label}`);

            video.srcObject = stream;
            video.play();
        }
    )};

const constraintList = document.querySelector("#constraintList");
const supportedConstraints = navigator.mediaDevices.getSupportedConstraints();
let constraint;
for (const constraint of Object.keys(supportedConstraints)) {
  const elem = document.createElement("li");
  elem.innerHTML = `<code>${constraint}</code>`;
  constraintList.appendChild(elem);
    console.log(`constraint: ${constraint}`);

}
//    document.getElementById("qr-out").innerHTML = code;

