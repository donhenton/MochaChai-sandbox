import { assert } from 'chai';
import { expect } from 'chai';
import sinon from 'sinon';
import sinonTest from 'sinon-test';


sinon.test = sinonTest.configureTest(sinon);
sinon.testCase = sinonTest.configureTestCase(sinon);

var saveUser = (user, callback) =>  {
  $.post('/users', {
    first: user.firstname,
    last: user.lastname
  }, callback);
}


describe('saveUser', function() {
  it('should call callback after saving', function() {

    //We'll stub $.post so a request is not sent
    var post = sinon.stub($, 'post');
    post.yields();

    //We can use a spy as the callback so it's easy to verify
    var callback = sinon.spy();

    saveUser({ firstname: 'Han', lastname: 'Solo' }, callback);

    post.restore();
    sinon.assert.calledOnce(callback);
  });
});