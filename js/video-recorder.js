/* eslint-disable */
var options = {
    controls: true,
    width: 800,
    height: 600,
    fluid: false,
    controlBar: {
        volumePanel: false
    },
    plugins: {
        record: {
            audio: false,
            video: true,
            maxLength: 10,
            debug: true
        }
    }
};

// apply some workarounds for opera browser
applyVideoWorkaround();

var player = videojs('myVideo', options, function() {
    // print version information at startup
    var msg = 'Using video.js ' + videojs.VERSION +
        ' with videojs-record ' + videojs.getPluginVersion('record') +
        ' and recordrtc ' + RecordRTC.version;
    videojs.log(msg);
});

// error handling
player.on('deviceError', function() {
    console.warn('device error:', player.deviceErrorCode);
});

player.on('error', function(element, error) {
    console.error(error);
});

// user clicked the record button and started recording
player.on('startRecord', function() {
    console.log('started recording!');
});

// user completed recording and stream is available
player.on('finishRecord', function() {
    console.log('finished recording:', player.recordedData);

    var data = player.recordedData;
    var serverUrl = '/upload';
    var formData = new FormData();
    formData.append('file', data, data.name);

    console.log('uploading recording:', data.name);

    $.ajax({
          url: serverUrl,
          type: 'POST',
          data: formData,
          processData: false,
          contentType: false,
          success: function (data) {
            console.log(data);
          }
        }).done((data) => {
            console.log('complete')
        })
});
