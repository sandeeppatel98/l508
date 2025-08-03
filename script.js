const quotes = [
  "Believe you can and you're halfway there. — Theodore Roosevelt",
  "Push yourself, because no one else is going to do it for you.",
  "Great things never come from comfort zones.",
  "Success doesn’t just find you. You have to go out and get it.",
  "Don’t watch the clock; do what it does. Keep going. — Sam Levenson"
];

function showQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("newQuote").innerText = quotes[randomIndex];
}
