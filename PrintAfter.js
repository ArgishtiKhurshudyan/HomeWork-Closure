function printAfter() {
    alert("hello world");
    return function() {
      alert("ellon musk");
    }
  }
  console.log(printAfter()());
  