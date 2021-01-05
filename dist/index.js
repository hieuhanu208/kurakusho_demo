'use strict';

var _kuroshiro = require('kuroshiro');

var _kuroshiro2 = _interopRequireDefault(_kuroshiro);

var _kuroshiroAnalyzerKuromoji = require('kuroshiro-analyzer-kuromoji');

var _kuroshiroAnalyzerKuromoji2 = _interopRequireDefault(_kuroshiroAnalyzerKuromoji);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var kuroshiro = new _kuroshiro2.default();

async function test() {
    kuroshiro.init(new _kuroshiroAnalyzerKuromoji2.default({})).then(function () {
        return kuroshiro.convert("感じ取れたら手を繋ごう、重なるのは人生のライン and レミリア最高！", { mode: "okurigana", to: "hiragana" });
    }).then(function (result) {
        console.log(result);
    });
}

test();