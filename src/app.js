let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

window.onload = function generate() {
  let who_num = Math.floor(Math.random() * 3);
  let action_num = Math.floor(Math.random() * 3);
  let what_num = Math.floor(Math.random() * 2);
  let when_num = Math.floor(Math.random() * 5);
  let new_frase =
    who[who_num] +
    " " +
    action[action_num] +
    " " +
    what[what_num] +
    " " +
    when[when_num];
  document.querySelector("#excuse").innerHTML = new_frase;
};
