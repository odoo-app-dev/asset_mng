

console.log("odoo.define asset_mng");

    function correct_btn(){
        document.getElementById("correctness").innerHTML = "Correct";
        }
    function notcorrect_btn(){
        document.getElementById("correctness").innerHTML = "Not Correct";
        }


    const url = "barcodeout";
    let orientation;
    const default_Width = 1920;
    const default_Height = 1920;
    let ratio = default_Height/default_Width;
    const is_portrait = window.matchMedia("(orientation: portrait)").matches;
    if(is_portrait){
        orientation = "Portrait";
    } else {
        orientation = "Landscape";
        }
    if(is_portrait && screen.width < screen.height){
        thisWidth = default_Width;
        thisHeight = default_Height;
    } else {
        thisWidth = default_Width;
        thisHeight = default_Height;
        }

    document.getElementById("orientation").innerHTML = orientation + " " + ratio + " W:" + screen.width+ " H:" + screen.height;
    document.getElementById("orientation2").innerHTML = "thisWidth:" + thisWidth + " thisHeight:" + thisHeight;
//    console.log( " ratio: " + ratio );

    function onScanSuccess(decodedText, decodedResult) {
        console.log(`Code scanned = ${decodedText}`, decodedResult);
        document.getElementById("qr-out").innerHTML = decodedText;

//        const request = new XMLHttpRequest();
//        request.open("POST", "barcodeout");
//        request.setRequestHeader("Content-Type", "application/json");
////        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//        request.onload = function() {
//            received = JSON.parse(request.responseText)
//            console.log('received:' + received);
//            document.getElementById("received_name").innerHTML = received["name"];
//            document.getElementById("received_location").innerHTML = received["location"];
//            };
//        let data = JSON.stringify({code:decodedText});
//        console.log("data:" + data);
//        request.send(data);

//        let received;
//        console.log(JSON.stringify({code:"6600-003024"}))


        fetch(url, {
                    method: "POST",
                    headers: {'Accept': 'application/json','Content-Type': 'application/json'},
                    body: JSON.stringify({code:decodedText}),
                    })
                    .then(res => { return res.json() })
                    .then(received => {
                        console.log('received: ' + received);
                        received = JSON.parse(received["result"]);
//                        received = received["result"];
                        console.log('received["result"]: ' + received);

                        document.getElementById("received_name").innerHTML = received["name"];
                        document.getElementById("received_product").innerHTML = received["product"];
                        document.getElementById("received_availability").innerHTML = received["availability"];
                        document.getElementById("received_location").innerHTML = received["location"];
                        document.getElementById("received_work_place").innerHTML = received["work_place"];
                    })
                    .catch(error => {
                    console.log(error)
                        document.getElementById("received_name").innerHTML = '*** Connection Fail! ***';
                        document.getElementById("received_product").innerHTML = '';
                        document.getElementById("received_availability").innerHTML = received["availability"];
                        document.getElementById("received_location").innerHTML = '';
                        document.getElementById("received_work_place").innerHTML = '';
                    });





        }

//    var html5QrcodeScanner = new Html5QrcodeScanner("qr-reader",
//                                 {qrbox: {width:500, height:100}, formats: ["code_128"],
//                                rememberLastUsedCamera: true,
//                                supportedScanTypes: [Html5QrcodeScanType.SCAN_TYPE_CAMERA],
//                                videoConstraints:{
//                                facingMode: "environment" ,
//                                aspectRatio: ratio,
//                                width: thisWidth,
//                                height: thisHeight,
//                                frameRate: 15,
////                                sharpness: 0.5,
////                                zoom: 3,
//                                advanced: [{
////                                sharpness: "manual",
//                                sharpness: 100 , }],
//
//                            }});
////    console.log(html5QrcodeScanner.applyVideoConstraints({frameRate: 10}));
//    html5QrcodeScanner.render(onScanSuccess);
////    console.log(html5QrcodeScanner.getState());

