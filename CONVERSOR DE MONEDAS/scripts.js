const convertButton = document.querySelector(".convert-button");
const currencySelectB = document.querySelector(".selector");
const currencySelectA = document.querySelector(".selector1");
function convertValues() {
  const inputCurrencyValue = document.querySelector(".input-currency").value;
  const currencyValueToConvert = document.querySelector(".currency-value");
  const currencyValuConverted = document.querySelector(
    ".currency-value-converted"
  );

  const dolarToday = 5.2;
  const euroToday = 6.2;
  const realToday = 1.5;

  if (currencySelectA.value == "dollar") {
    currencyValuConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue / dolarToday);
  }
  if (currencySelectA.value == "euro") {
    currencyValuConverted.innerHTML = new Intl.NumberFormat("en-UK", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue / euroToday);
  }
  if (currencySelectA.value == "real") {
    currencyValuConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputCurrencyValue * realToday);
  }

  if (currencySelectB.value == "dollar") {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue)
  }
  if (currencySelectB.value == "euro") {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-UK", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue)
  }
  if (currencySelectB.value == "real") {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputCurrencyValue)
  }
}

function changeCurrency() {
  const currencyNameA = document.getElementById("currency-initial");
  const currencyName = document.getElementById("currency-name");
  const currencyImgA = document.querySelector(".flag1");
  const currencyImg = document.querySelector(".flag2");

  if (currencySelectA.value == "dollar") {
    currencyNameA.innerHTML = "American Dollar";
    currencyImgA.src = "./assets/usa-flag.png";
  }

  if (currencySelectA.value == "euro") {
    currencyNameA.innerHTML = "Euro";
    currencyImgA.src = "./assets/euro-flag.png";
  }

  if (currencySelectA.value == "real") {
    currencyNameA.innerHTML = "Brazilian Real";
    currencyImgA.src = "./assets/brasil-flag.png";
  }

  if (currencySelectB.value == "dollar") {
    currencyName.innerHTML = "American Dollar";
    currencyImg.src = "./assets/usa-flag.png";
  }

  if (currencySelectB.value == "euro") {
    currencyName.innerHTML = "Euro";
    currencyImg.src = "./assets/euro-flag.png";
  }

  if (currencySelectB.value == "real") {
    currencyName.innerHTML = "Brazilian Real";
    currencyImg.src = "./assets/brasil-flag.png";
  }

  convertValues();
}

currencySelectA.addEventListener("change", changeCurrency);
currencySelectB.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);
