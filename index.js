var SEED = "" +
    "da39a3ee5e6b4b0d3255bfef95601890afd80709" +
    "462a5cf9ff2dd7a9248b301630dbce757e20c337" +
    "f636edbd4249e5c931617b7ed3752919cc921f1d" +
    "720d105caaf3cb848bc65a602c65eeb0d8df699b" +
    "f49c1722672b8cd47f298f310c59d751eeb634c3" +
    "cd6e2eb1a1c1dfca1a3032ad2bce57605203b745" +
    "3a8dff24f3f1a9738c7a9a6f9749fe09d99a1766",
    binary = "";

// gen bit stream
for (var _i = 0, _length = SEED.length; _i < _length; _i++) {
    binary += (~SEED[_i].charCodeAt(0)).toString(2).slice(1);
}

/**
 * pseudorandom bit generator based on pre-defined seed
 * @param n {Number} number of preudorandom bits
 */
var readBitStream = (function() {
    var _i = 0,
        _binary = binary;
    // @param n {Number} returning bit sequence length
    return function(n) {
        if (!n) {
            n = 1;
        }
        var res = "";
        for (var _j = 0; _j < n; _j++) {
            if (_i >= _binary.length) {
                _i = 0;
            }
            res += _binary[_i++];
        }
        return res;
    };
})();

// log base 2
function log2(n) {
    return Math.log(n) / Math.LN2;
}

/**
 * @param max {Number} maximum number
 */
function genNumber(max) {
    var n = ~~log2(max) + 1,
        num;
    do {
        num = parseInt(readBitStream(n), 2);
    } while (num > max);
    return num;
}

module.exports = {
    readBitStream: readBitStream,
    genNumber: genNumber
};
