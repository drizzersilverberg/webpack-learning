function annouce (message) {
  alert(message);
}

function log (message) {
  console.log(message);
}

export default {
  annouce: annouce,
  log: log
}

export function greet () {
  var user = prompt('Please enter your name');
  alert('Hello, ' + user);
}
