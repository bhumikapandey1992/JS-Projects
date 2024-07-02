async function convertCurrency(){

    const amount = document.getElementById('amount').value;
    const fromcurrency = document.getElementById('from-currency').value;
    const tocurrency = document.getElementById('to-currency').value;

    const apikey = '71ed9842885ae119211f7371';
    const url = `https://api.exchangerate-api.com/v4/latest/${fromcurrency}`;

    const response = await fetch(url);
    const data = await response.json();

    const rate = data.rates[tocurrency];

    const convertedAmount = (amount * rate).toFixed(2);

    document.getElementById('result').innerText = `${amount} ${fromcurrency} = ${convertedAmount} ${tocurrency}`;

    document.getElementById('result-box').classList.remove('hidden');
    document.getElementById('result-box').classList.add('visible');

}