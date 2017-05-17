/**
 * Created by fabioricali on 17/05/2017.
 */

const assert = require('assert');
const vigenere = require('../index.js');

describe('vigenere encode/decode', function () {
    it('should equal string', function () {
        var originString = 'streamer@41';
        var obscured = vigenere.encode(originString, 'jgasyb8732xx3');
        var cleared = vigenere.decode(obscured, 'jgasyb8732xx3');
        console.log('from:', originString, 'to:', obscured, 'return to:', cleared);
        assert.equal(originString, cleared);
    })
});