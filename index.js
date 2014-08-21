var LFSR = require('lfsr'),
    DEFAULT_SEED = 149304961039362642461;

/**
 * @param {Number} [seed] value for LFSR
 */
function PRNG(seed) {
    this.lfsr = new LFSR(null, seed || DEFAULT_SEED);
}

PRNG.prototype = {
    /**
     * @param {Number} min value
     * @param {Number} max value
     */
    rand: function(min, max) {
        // if invoked with one value consider min to be 0
        // rand(16) == rand(0, 16)
        if (!max) {
            max = min;
            min = 0;
        }

        // swap if min > max
        if (min > max) {
            var t = max;
            max = min;
            min = t;
        }

        offset = min;

        var bits = ~~this._log2(max - offset) + 1,
            random;
        do {
            random = this.lfsr.seq(bits);
        } while (random > (max - offset));
        return random + offset;
    },
    _log2: function(n) {
        return Math.log(n) / Math.LN2;
    }
};

module.exports = PRNG;
