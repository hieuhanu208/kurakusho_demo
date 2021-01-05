import Kuroshiro from 'kuroshiro';
import KuromojiAnalyzer from 'kuroshiro-analyzer-kuromoji';
const kuroshiro = new Kuroshiro();

async function test() {
    kuroshiro.init(new KuromojiAnalyzer({}))
        .then(function () {
            return kuroshiro.convert("感じ取れたら手を繋ごう、重なるのは人生のライン and レミリア最高！", {mode:"okurigana", to:"hiragana"});
        })
        .then(function(result){
            console.log(result);
        })
}

test();
