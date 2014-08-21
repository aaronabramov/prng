var PRNG = require('../index.js'),
    prng = new PRNG(),
    chai = require('chai'),
    expect = chai.expect;

function times(n, fn) {
    for (var i = 0; i < n; i++) {
        fn.call(this, n);
    }
}

describe('prng', function() {
    it('generates random number from 0 to N', function() {
        times(10000, function() {
            expect(prng.rand(100)).to.be.within(0, 100);
        });
    });

    it('generates random number in a range', function() {
        times(10000, function() {
            expect(prng.rand(50, 100)).to.be.within(50, 100);
        });
    });

    it('generates random number in a range with negative', function() {
        times(10000, function() {
            expect(prng.rand(-100, 100)).to.be.within(-100, 100);
        });
    });

    it('generates random number in a range with both -', function() {
        times(10000, function() {
            expect(prng.rand(-1000, -700)).to.be.within(-1000, -700);
        });
    });

    it('distributes numbers evenly', function() {
        var TIMES = 1000000,
            RANGE = 129,
            RATIO = RANGE / TIMES,
            occur = {},
            r;

        for (var i = 0; i < TIMES; i++) {
            r = prng.rand(RANGE);
            occur[r] || (occur[r] = 0);
            occur[r]++;
        }
        for (r in occur) {
            expect(occur[r] / TIMES).to.be.closeTo(RATIO, 0.01);
        }
    });
});
