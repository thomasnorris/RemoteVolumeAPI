(function() {
    let _path = require('path');
    const CFG_FILE = _path.resolve(__dirname, 'config', 'config.json');
    let _cfg = readJson(CFG_FILE);

    let _express = require('express');
    let _cp = require('child_process');
    let _app = _express();

    let _logger = require(_path.resolve(__dirname, 'Node-Logger', 'app.js'));

    _cfg.endpoint_file_pairs.forEach((pair, idx) => {
        _app.get(pair.endpoint, (req, res) => {
            let file_path = getFilePath(pair.file);
            _cp.exec(file_path + ' ' + _cfg.sound_volume_view_dir);

            let res_str = 'Executed: ' + file_path;
            res.send(res_str);
            console.log(res_str);
            _logger.Info.Async(res_str);
        });
    });

    _app.get('/', (req, res) => {
        let res_str = 'GET: /';
        res.send(res_str);
        console.log(res_str);
        _logger.Info.Async(res_str);
    });

    _app.set('json spaces', 4);
    _app.listen(_cfg.port);

    console.log('Ready, listening on port ' + _cfg.port);

    function getFilePath(name) {
        return _cfg.scripts_dir + name;
    }

    function readJson(filePath) {
        var fs = require('fs');
        var path = require('path');
        return JSON.parse(fs.readFileSync(path.resolve(__dirname, filePath), 'utf8'));
    }
})();