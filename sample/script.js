async function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;

    if (amount === '' || amount <= 0) {
        alert('Please enter a valid amount');
        return;
    }

    const apiKey = '71ed9842885ae119211f7371'; // Replace with your API key
    const url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        const rate = data.rates[toCurrency];
        const convertedAmount = (amount * rate).toFixed(2);
        document.getElementById('result').innerText = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
        
        // Show the result box by adding the 'visible' class
        document.getElementById('result-box').classList.remove('hidden');
        document.getElementById('result-box').classList.add('visible');
    } catch (error) {
        console.error('Error fetching exchange rates:', error);
        alert('Error fetching exchange rates. Please try again later.');
    }
}
