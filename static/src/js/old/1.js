var scanBeep = new Audio('./static/src/sound/scan-beep.mp3');
var scannerCamEl = document.getElementsByClassName('scanner-cam')[0];
var console_log = []
console.log('App.init', scannerCamEl)

document.getElementById('cameraList').onchange = async function() {
    try {
        await scanner.setCurrentCamera(document.getElementById('cameraList').value);
    } catch (ex) {
        alert('Play video failed: ' + (ex.message || ex));
    }
};
var App = {
    init: function() {
        var self = this;
        Quagga.init(this.config, function(err) {
            if (err) {
                return self.handleError(err);
                }
            Quagga.start();
            });
        },
    handleError: function(err) {
        console.log(err);
        },
    config: {
        inputStream: {
            target: scannerCamEl,
            type : "LiveStream",
            constraints: {
                    width: {min: 1920 },
                    height: {min: 1080},
//                    frameRate: 10,
//                    ResizeMode: "none",
//                    facingMode: "environment",
//                    aspectRatio: 1
                    }
            },
        locate: true,
        locator: {
            patchSize: "x-large",
            halfSample: false
            },
        numOfWorkers: 2,
        frequency: 4,
        decoder: {
            readers : [{
            format: "code_128_reader",
            config: {}
            }]
            },
        }
    };
App.init();
console.log('App.init', scannerCamEl)
document.getElementById("consoleLog").innerHTML = scannerCamEl;

function scanItem(code) {
        console.log('scanItem')

    scanBeep.play();
    var el = document.createElement('li');
    el.innerText = code;

    document.getElementsByClassName('codes-list')[0].appendChild(el);
    scannerCamEl.classList.add('scanner-cam--scanned');
    }


//var debouncedScanner = this.debounce(scanItem, 1000, true);
var styleTimer;
//
Quagga.onDetected((result) => {
    var code = result.codeResult.code;

    if (!code.match(/[0-9]+\/[0-9]+\/[A-Z]+\/[0-9]+/g)) {
                console.log(code);
                document.getElementById("qr-out").innerHTML = code;
                return;
                }
    debouncedScanner(code);
    clearTimeout(styleTimer);

    styleTimer = setTimeout(function() {
                            scannerCamEl.classList.remove('scanner-cam--scanned');
                            }, 1000);
    });