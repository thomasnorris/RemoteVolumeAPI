(function() {
    let _express = require('express');
    let _cp = require('child_process');
    let _app = _express();

    var _path = require('path');
    var _logger = require(_path.resolve(__dirname, 'Node-Logger', 'app.js'));

    let SETTINGS = {
        endpoint_file_pairs: [
            {
                endpoint: '/set100/',
                file: 'SetRemoteAudio100.bat'
            },
            {
                endpoint: '/set25/',
                file: 'SetRemoteAudio25.bat'
            }
        ],
        port: 1010,
        file_path: process.env.USERPROFILE + '\\Desktop\\'
    };

    SETTINGS.endpoint_file_pairs.forEach((pair, idx) => {
        _app.get(pair.endpoint, (req, res) => {
            let file_path = getFilePath(pair.file);
            _cp.exec(file_path);

            let res_str = 'Executed: ' + file_path;
            res.send(res_str);
            console.log(res_str);
        });
    });

    _app.get('/', (req, res) => {
        let res_str = 'GET: /';
        res.send(res_str);
        console.log(res_str);
    });

    _app.set('json spaces', 4);
    _app.listen(SETTINGS.port);

    console.log('Ready, listening on port ' + SETTINGS.port);

    function getFilePath(name) {
        return SETTINGS.file_path + name;
    }
})();