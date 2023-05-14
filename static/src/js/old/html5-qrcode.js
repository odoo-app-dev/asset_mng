
function onScanSuccess(decodedText, decodedResult) {
                        console.log(`Code scanned = ${decodedText}`, decodedResult);
                        document.getElementById("qr-out").innerHTML = decodedText;
                        }

var html5QrcodeScanner = new Html5QrcodeScanner(
                            "qr-reader", { videoConstraints:{
                            facingMode: { ideal: "environment" }},
                            width: {min: 3200},
                            height: {min: 1920},
                            });
                            html5QrcodeScanner.render(onScanSuccess);