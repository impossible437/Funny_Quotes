fetch('https://icanhazdadjoke.com/slack')
    .then(data => data.json())
    .then(quoteData => {
    const quoteAuthor = quoteData.attachments[0].text;
    const quoteElement = document.getElementById('quoteElement');

    quoteElement.innerHTML = quoteAuthor;
})








