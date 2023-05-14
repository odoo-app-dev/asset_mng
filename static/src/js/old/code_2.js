var scanBeep = new Audio('./static/src/sound/scan-beep.mp3');
var scannerCamEl = document.querySelector('#scanner-cam');
//var scannerCamEl = document.getElementsByClassName('scanner-cam')[0];
var App = {
    init: function() {
        var self = this;

        Quagga.init(this.config, function(err) {
            if (err) {
                return self.handleError(err);
                }
            Quagga.initialized = true;
            console.log('start');
            Quagga.start();
            });
        },
    handleError: function(err) {
        console.log(err);
        },
    config: {
        inputStream: {
            name : "Live",
            type : "LiveStream",
            constraints: {
                width: {min: 1920},
                height: {min: 1080},
                facingMode: "environment",
                aspectRatio: {min: 1, max: 2}
                },
            numOfWorkers: navigator.hardwareConcurrency,
            target: document.querySelector('#scanner-cam'),
            },
        frequency: 10,
        decoder: {
            readers : ['code_128_reader']
            },
            zoom: true,
        locate: true,
        locator: {
                patchSize: "large", // x-small, small, medium, large, x-large
                halfSample: false,
                },
        area: { // defines rectangle of the detection/localization area
            top: "20%",    // top offset
            right: "20%",  // right offset
            left: "20%",   // left offset
            bottom: "20%"  // bottom offset
            },
        singleChannel: false,
        }
    };

App.init();

function scanItem(code) {
  scanBeep.play();
  var el = document.createElement('li');
  el.innerText = code;
  document.getElementsByClassName('codes-list')[0].appendChild(el);
  scannerCamEl.classList.add('scanner-cam--scanned');
}

var debouncedScanner = _.debounce(scanItem, 1000, true);
var styleTimer;

Quagga.onDetected((result) => {
  var code = result.codeResult.code;
          document.getElementById("qr-out2").innerHTML = code;

  if (!code.match(/[0-9]+\/[0-9]+\/[A-Z]+\/[0-9]+/g)) {
          console.log('code', code);
           return;
           }
  debouncedScanner(code);
  clearTimeout(styleTimer);

  styleTimer = setTimeout(function() {
    scannerCamEl.classList.remove('scanner-cam--scanned');
  }, 1000);


});