/*
Bob is a lackadaisical teenager. In conversation, his responses are very limited.
Bob answers 'Sure.' if you ask him a question.
He answers 'Whoa, chill out!' if you yell at him.
He retorts 'Calm down, I know what I'm doing!' if you yell a question at him.
He says 'Fine. Be that way!' if you address him without actually saying anything.
He answers 'Whatever.' to anything else.
*/
function isUpperCaseOrNumeric(x) {
  let substr = x.substr(1, x.length-2);
  if (!isNaN(substr * 1)) {
    return 1;
  } else if (x === x.toUpperCase()) {
    return 2;
  } else {
    return false;
  }
}

function hey (msg) {
  let reply = '';
  
  if (isUpperCaseOrNumeric(msg) === 2 && msg[msg.length - 1] === '?') { // if you yell a question at him
    reply = 'Calm down, I know what I\'m doing!';
  } else if (isUpperCaseOrNumeric(msg) === 2) { // if you yell at him.
    reply = 'Whoa, chill out!';
  } else if (msg[msg.length - 1] === '?' || isUpperCaseOrNumeric(msg) === 1) { // if you ask him a question
    reply = "Sure.";
  } else if (msg === 'Bob') { //if you address him without actually saying anything
    reply = 'Fine. Be that way!';
  } else { // to anything else
    reply = "Whatever.";
  }
  return reply;  
}

(_ => {
  console.log('Running hey...');
  // Stating Something
  console.log(hey('Tom-ay-to, tom-aaaah-to.') === 'Whatever.');

  // Shouting
  console.log(hey('WATCH OUT!') === 'Whoa, chill out!');

  // Shouting Gibberish
  console.log(hey('FCECDFCAAB') === 'Whoa, chill out!');

  // Asking a question
  console.log(hey('Does this cryogenic chamber make me look fat?') === 'Sure.');

  // Asking a numeric question
  console.log(hey('You are, what, like 15?') === 'Sure.');

  // Asking gibberish
  console.log(hey('fffbbcbeab?') === 'Sure.');

  // Talking forcefully
  console.log(hey("Let's go make out behind the gym!") === 'Whatever.');

  // Using acronyms in regular speech
  console.log(hey("It's OK if you don't want to go to the DMV.") === 'Whatever.');

  // Forceful question
  console.log(hey('WHAT THE HELL WERE YOU THINKING?') === 'Calm down, I know what I\'m doing!');

  // Shouting numbers
  console.log(hey('1, 2, 3 GO!') === 'Whoa, chill out!');

  // Only numbers
  console.log(hey('4?') === 'Sure.');

  // Shouting with special characters
  console.log(hey('ZOMG THE %^*@#$(*^ ZOMBIES ARE COMING!!11!!1!') === 'Whoa, chill out!');
})();
