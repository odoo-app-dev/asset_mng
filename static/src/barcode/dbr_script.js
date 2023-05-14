        /** LICENSE ALERT - README
         * To use the library, you need to first specify a license key using the API "license" as shown below.
         */

//        Dynamsoft.DBR.BarcodeReader.license = 'DLS2eyJoYW5kc2hha2VDb2RlIjoiMjAwMDAwLWRicl9qc19zYW1wbGVzIiwib3JnYW5pemF0aW9uSUQiOiIyMDAwMDAifQ==';

        /**
         * You can visit https://www.dynamsoft.com/customer/license/trialLicense?utm_source=github&product=dbr&package=js to get your own trial license good for 30 days.
         * Note that if you downloaded this sample from Dynamsoft while logged in, the above license key may already be your own 30-day trial license.
         * For more information, see https://www.dynamsoft.com/barcode-reader/programming/javascript/user-guide/?ver=9.3.1&utm_source=github#specify-the-license or contact support@dynamsoft.com.
         * LICENSE ALERT - THE END
         */

        // scanner for decoding video
        let pScanner = null;
        (async() => {
            //Load the library on page load to speed things up.
            try {
                document.getElementById('lib-load').hidden = false;
//                await Dynamsoft.DBR.BarcodeReader.loadWasm();
                startBarcodeScanner();
            } catch (ex) {
                let errMsg;
                if (ex.message.includes("network connection error")) {
                    errMsg = "Failed to connect to Dynamsoft License Server: network connection error. Check your Internet connection or contact Dynamsoft Support (support@dynamsoft.com) to acquire an offline license.";
                } else {
                    errMsg = ex.message||ex;
                }
                console.error(errMsg);
                alert(errMsg);
            }
            document.getElementById('result').addEventListener('dblclick', async() => {
                document.getElementById('result').value = "";
            });
            document.getElementById('showScanner').addEventListener('click', async() => {
                if (pScanner)(await pScanner).show();
            });
        })();
        // decode video from camera
        async function startBarcodeScanner() {
            try {
                let scanner = await (pScanner = pScanner);
//               let scanner = await (pScanner = pScanner || Dynamsoft.DBR.BarcodeScanner.createInstance());
                document.getElementById('showScanner').hidden = false;
                scanner.onFrameRead = (_results) => {
                    for (let result of _results) {
                        let newElements = [];
                        const format = result.barcodeFormat ? result.barcodeFormatString : result.barcodeFormatString_2;
                        newElements.push(createASpan(format + ": "));
                        newElements.push(createASpan(result.barcodeText, "resultText"));
                        newElements.push(document.createElement('br'));
                        if (result.barcodeText.indexOf("Attention(exceptionCode") != -1) {
                            newElements.push(createASpan(" Error: " + result.exception.message));
                            newElements.push(document.createElement('br'));
                        }
                        for (let span of newElements) {
                            document.getElementById('results').appendChild(span);
                        }
                        document.getElementById('results').scrollTop = document.getElementById('results').scrollHeight;
                    }
                };
                scanner.onUniqueRead = (txt, result) => {
                    const format = result.barcodeFormat ? result.barcodeFormatString : result.barcodeFormatString_2;
                    document.getElementById('result').value = format + ": " + txt;
                    document.getElementById('result').focus();
                    setTimeout(() => {
                        document.getElementById('result').blur();
                    }, 2000);
                };
                document.getElementById('UIElement').appendChild(scanner.getUIElement());
                await scanner.show();
                document.getElementById('lib-load').hidden = true;
                document.getElementById('results').style.visibility = "visible";
            } catch (ex) {
                let errMsg;
                if (ex.message.includes("network connection error")) {
                    errMsg = "Failed to connect to Dynamsoft License Server: network connection error. Check your Internet connection or contact Dynamsoft Support (support@dynamsoft.com) to acquire an offline license.";
                } else {
                    errMsg = ex.message||ex;
                }
                console.error(errMsg);
                alert(errMsg);
            }
        }

        function createASpan(txt, className) {
            let newSPAN = document.createElement("span");
            newSPAN.textContent = txt;
            if (className)
                newSPAN.className = className;
            return newSPAN;
        }