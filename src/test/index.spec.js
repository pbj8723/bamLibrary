
import prod from "../product";

const assert = require('assert');  // Node.js `assert` module



describe('test', function() {
    it('bool test', function() {
        // assert.equal(prod.to_bool("true"), true)
        assert.equal(prod.to_bool("0"), false)
    })
})