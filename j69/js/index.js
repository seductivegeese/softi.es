document.querySelector('button').addEventListener('click', function() {
  var position = Math.floor(Math.random() * 300000) + 300000;
  alert("Thank you for your submission. Your position in line is " + position + ".");
  window.location.replace("https://twitter.com/realDonaldTrump");
});