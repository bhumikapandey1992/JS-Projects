document.getElementById('new-quote').addEventListener('click',generateQuote);
document.getElementById('share-twitter').addEventListener('click',shareOnTwitter);
document.getElementById('share-instagram').addEventListener('click',shareOnInstagram);
document.getElementById('share-whatsapp').addEventListener('click',shareonWhatsapp);

async function generateQuote(){

    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    console.log('data..',data);

    document.getElementById('quote').textContent = `"${data.content}" - ${data.author}`;
}
function shareOnTwitter(){
    const quoteText = document.getElementById('quote').textContent;
    const twitterURL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quoteText)}`;
    window.open(twitterURL,'_blank');
}
function shareOnInstagram(){
    const quoteText = document.getElementById('quote').textContent;
    navigator.clipboard.writeText(quoteText).then(()=>{
        alert ('Quote copied, proceed to post on instagram.');
        window.open('https://www.instagram.com/','_blank');
    }, ()=>{
        alert ('Failed to copy the quote');
    });
}
function shareonWhatsapp(){
    const quoteText = document.getElementById('quote').textContent;
    const whatsappURL = `https://api.whatsapp.com/send?text=${encodeURIComponent(quoteText)}`;
    window.open(whatsappURL,'_blank');
}
generateQuote();