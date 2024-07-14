document.getElementById('new-quote').addEventListener('click', generateQuote);
document.getElementById('share-twitter').addEventListener('click', shareOnTwitter);
document.getElementById('share-instagram').addEventListener('click', shareOnInstagram);
document.getElementById('share-whatsapp').addEventListener('click', shareOnWhatsApp);

async function generateQuote() {
    try {
        const response = await fetch('https://api.quotable.io/random');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        document.getElementById('quote').textContent = `"${data.content}" - ${data.author}`;
    } catch (error) {
        document.getElementById('quote').textContent = 'Failed to fetch a new quote. Please try again later.';
        console.error('There was a problem with the fetch operation:', error);
    }
}

function shareOnTwitter() {
    const quoteText = document.getElementById('quote').textContent;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quoteText)}`;
    window.open(twitterUrl, '_blank');
}

function shareOnInstagram() {
    const quoteText = document.getElementById('quote').textContent;
    navigator.clipboard.writeText(quoteText).then(() => {
        alert('Quote copied to clipboard! Now you can paste it on Instagram.');
        window.open('https://www.instagram.com/', '_blank');
    }, () => {
        alert('Failed to copy quote. Please try again.');
    });
}

function shareOnWhatsApp() {
    const quoteText = document.getElementById('quote').textContent;
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(quoteText)}`;
    window.open(whatsappUrl, '_blank');
}

// Generate an initial quote
generateQuote();
