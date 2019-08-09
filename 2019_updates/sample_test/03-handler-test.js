 'use strict';

import { assert } from "chai"
import {process} from './../../../handler';

describe(`03-handler-tests`, function() {
  it(`should test process`, function(done) {
    let event = {};
    let context = {};
    let callback = (ctx,data) => {
      let payload = JSON.parse(data.body)
      assert.deepEqual('This is a test',payload.message)
      done();
    }
    process(event,context,callback)
  });

  
});
