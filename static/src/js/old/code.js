// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap-sprockets
//= require quagga
//= require_tree .
//import Quagga from 'quagga'

//const Quagga = require('quagga').default;
var scannerCamEl = document.getElementsByClassName('scanner-cam')[0];
//          document.getElementById("scannerCamEl").innerHTML = scannerCamEl;

function order_by_occurrence(arr) {
  var counts = {};
  arr.forEach(function(value){
      if(!counts[value]) {
          counts[value] = 0;
      }
      counts[value]++;
  });

  return Object.keys(counts).sort(function(curKey,nextKey) {
      return counts[curKey] < counts[nextKey];
  });
}

function load_quagga(){
    console.log('load_quagga');
  if ($('#scanner-cam').length > 0 && navigator.mediaDevices ) {
//  if ($('#scanner-cam').length > 0 && navigator.mediaDevices && typeof navigator.mediaDevices.getUserMedia === 'function') {
    var last_result = [];
        console.log('initialized');
    if (Quagga.initialized == undefined) {
      Quagga.onDetected(function(result) {
        var last_code = result.codeResult.code;
        console.log('last_code',last_code);

        last_result.push(last_code);
        console.log('last_result',last_result);
        document.getElementById("qr-out1").innerHTML = last_result[0];

        if (last_result.length > 20) {
            console.log('if (last_result.length > 20)');

          code = order_by_occurrence(last_result)[0];
          document.getElementById("qr-out2").innerHTML = code;

          last_result = [];
//          Quagga.stop();
//          $.ajax({
//            type: "POST",
//            url: '/products/get_barcode',
//            data: { upc: code }
//          });
        }
      });
    }

    Quagga.init({
      inputStream : {
        name : "Live",
        type : "LiveStream",
        constraints: {
            width: {min: 1920},
            height: {min: 1080},
            facingMode: "environment",
//            aspectRatio: {min: 1, max: 2}
            },
        numOfWorkers: navigator.hardwareConcurrency,
        target: document.querySelector('#scanner-cam')
      },
      frequency: 4,
      decoder: {
          readers : ['code_128_reader']
//          readers : ['code_128_reader','ean_reader','ean_8_reader','code_39_reader','code_39_vin_reader','codabar_reader','upc_reader','upc_e_reader']
      },
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
  singleChannel: false // true: only the red color-channel is read
    },function(err) {
        if (err) { console.log(err); return }
        Quagga.initialized = true;
            console.log('start');

        Quagga.start();
    });

  }
};


//$(document).on('turbolinks:load', load_quagga);
$(document).ready(load_quagga);
    console.log('$(document)');
