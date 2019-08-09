import { assert } from 'chai';
/**
 * ES6 style test
 * 
 * @returns {undefined}
 */

import { expect } from 'chai';
import sinon from 'sinon';


describe('Test use of babel', () => {
    let testValue = 100;

    beforeEach(() => {
        testValue = 100;
    });


    it('basic test', () => {
        var t = testValue / 5;

        assert.equal(t, 20);
    });

});



