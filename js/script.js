const dropList = document.querySelectorAll(".dropList select");
formCurrency = document.querySelector(".from select");
toCurrency = document.querySelector(".to select");
const getButton = document.getElementById("btn");
console.log(formCurrency);
console.log(toCurrency);


for (let i = 0; i < dropList.length; i++) {
    for (currency_code in country_code) {
        let selected
        if (i == 0 ) {
            selected = currency_code == "USD" ? "selected" : "" ;
        } else if (i == 1) {
            selected = currency_code == "NPR" ? "selected" : "" ;

        }
        let optionTag = `<option value="${currency_code}" ${selected} >${currency_code}</option>`
        dropList[i].insertAdjacentHTML("beforeend", optionTag)
    }
getButton.addEventListener("click" , e =>{
    e.preventDefault();
    getExchangeRate();

})}

function getExchangeRate() {
    const amount = document.getElementById("input")
    let amountVal = amount.value;
    if (amountVal == ""|| amountVal == "0") {
        amount.value = '1'
        amountVal = 1;
    }
    let url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency.value}`;
    fetch(url)
    .then(response => response.json())
    .then(result => {
        let exchangeRate = result.conversion_rates[toCurrency.value]
        console.log(exchangeRate);
    })
}