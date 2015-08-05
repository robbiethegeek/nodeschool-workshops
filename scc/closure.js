function foo(){
  quux = 9;
  var bar;
  function zip(){
    var quux=10;
    bar = true;
  }
  return zip;
}
