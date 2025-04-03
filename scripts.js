//Cotação da moeda
const USD = 5.62
const EUR = 6.20
const GBP = 7.35

//Obtendo elementos do formulario
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")
//Manipulando o input amount par areceber somente numeros
amount.addEventListener("input", () => {

  const hasCharactersRegex = /\D+/g
  amount.value = amount.value.replace(hasCharactersRegex,"")
})


//Capturando o evendo de submit (enviar) do formulario
form.onsubmit = () => {
  event.preventDefault()

  switch(currency.value){
    case "USD":
      convertCurrency(amount.value, USD, "US$")
      break
    case "EUR":
      convertCurrency(amount.value, EUR, "€")
      break
    case "GBP":
      convertCurrency(amount.value, GBP, "£")
      break
  }
}

//função para converter a moeda
function convertCurrency(amount, price, symbol){
  try{
    //exibindo a cotação da moeda selecionada
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

    //calcula o total
    let total = amount * price
    total = formatCurrencyBRL(total).replace("R$","")

    //exibindo resultado
    result.textContent = `${total} Reais`

    //aplica a classe footer
    footer.classList.add("show-result")
  } catch (error){
    footer.classList.remove("show-result")
    alert("Não foi possivel converter")
  }
}

//formata a moeda para Real BR
function formatCurrencyBRL(value){
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })
}
