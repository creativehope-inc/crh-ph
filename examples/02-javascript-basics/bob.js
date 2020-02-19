/*
Bob is a lackadaisical teenager. In conversation, his responses are very limited.
Bob answers 'Sure.' if you ask him a question.
He answers 'Whoa, chill out!' if you yell at him.
He retorts 'Calm down, I know what I'm doing!' if you yell a question at him.
He says 'Fine. Be that way!' if you address him without actually saying anything.
He answers 'Whatever.' to anything else.
*/

function hey (convo) {
  var questioned_at = 'Sure.';
  var yelled_at = 'Whoa, chill out!';
  var yelled_question_at = 'Calm down, I know what I\'m doing!';
  var not_say_any = 'Fine';
  var whatever = 'Whatever.';

  var letter_case = isUpperCase(convo); //if true = uppercase, otherwise false
  var has_characters = hasCharacters(convo); //if false = there is no alpha characters


  if(has_characters) { // checks if the string has alphabets
    if(letter_case) {
      if(convo.indexOf('!') > -1) { //if true, you are yelling at them, possible combination of ! and ?
        return yelled_at;
      } else if(convo.indexOf('?') > -1) { // if true, you yelled a question
        return yelled_question_at;
      } else {
        return yelled_at;
      }
    } else if(convo.indexOf('?') > -1) {
      return questioned(); // if only asks question
    } else {
      return nothing_at_all();
    }
  } else if(convo.indexOf('?') > -1) {
      return questioned(); // if only asks question about numbers and symbols
  } else {
    return nothing_at_all();
  }

  function isUpperCase(str) {
    return str === str.toUpperCase();
  }

  function hasCharacters(str) {
    return str.toLowerCase() !== str.toUpperCase();
  }

  function questioned() {
    return questioned_at;
  }

  function nothing_at_all() {
    return whatever;
  }
}

(_ => {
  console.log('Running hey...');
  // Stating Something
  console.log(hey('Tom-ay-to, tom-aaaah-to.') === 'Whatever.'); // Edited to match 'Whatever.'

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
  console.log(hey('4.?') === 'Sure.');

  // Shouting with special characters
  console.log(hey('ZOMG THE %^*@#$(*^ ZOMBIES ARE COMING!!11!!1!') === 'Whoa, chill out!');
})();
