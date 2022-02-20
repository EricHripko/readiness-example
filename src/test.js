const assert = require("assert");
const axios = require("axios");

axios
  .get('http://app:8080')
  .then(res => {
    assert.equal(res.status, 200);
    assert.equal(res.data.length, 3);
    console.log("SUCCESS");
  })
  .catch(function (error) {
    console.log(error);
    assert.fail();
  });
