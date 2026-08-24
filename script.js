  const text = "Hello, I am Rinsford";
  const target = document.getElementById("typed-text");
  let index = 0;

  function typeText() {
    if (target && index < text.length) {
      target.textContent += text.charAt(index);
      index++;
      setTimeout(typeText, 100);
    }
  }

  typeText();