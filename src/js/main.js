window.addEventListener("load", () => {
  const sectionForm = document.querySelector(".section__form");
  const valueInput = document.querySelector(".form__input--text");
  const message = document.querySelector(".form__message-errors");

  const symbolsNotAllowed = "&$#*%?!*'\" ";

  sectionForm.addEventListener("submit", (e) => {
    message.style.color = "#fb3e3e";
    e.preventDefault();

    const lengthEmail = valueInput.value.length;
    const isEmail = valueInput.value.endsWith("@gmail.com");

    const emailArray = valueInput.value.split("");
    const index = emailArray.at(-10);
    const result = emailArray.splice(0, emailArray.lastIndexOf(index));

    if (lengthEmail === 0) {
      message.textContent = "Oops! Please add your email";
      return;
    }

    if (lengthEmail <= 10) {
      message.textContent = "Oops! Please add a complete email address";
      return;
    }

    const isContainsSymbol = result.some((symbol) => symbolsNotAllowed.includes(symbol));
    if (isContainsSymbol) {
      message.textContent = "Symbols not allowed";
      return;
    }

    if (!isEmail) {
      message.textContent = "Oops! Please check your email";
      return;
    }

    if (result.includes(index)) {
      message.textContent = "Oops! Two or more '@' are not allowed";
      return;
    }

    message.textContent = "Access Granted";
    message.style.color = "#00FF00";
  });
});
