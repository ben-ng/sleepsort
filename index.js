module.exports = function (input, cb) {
  var result = []
    , sort;

  sort = function (j) {
    setTimeout(function () {
      result.push(input[j]);

      if(result.length === input.length)
        cb(result);
    }, input[j] * 100);
  };

  for(var i=0, ii=input.length; i<ii; ++i) {
    sort(i);
  }
};
