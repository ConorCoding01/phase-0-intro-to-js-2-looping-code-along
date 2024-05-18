function writeCards(names) {

    let thankYouMessages = [];
    
    for (let i = 0; i < names.length; i++) {
        thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }

    return thankYouMessages;
}



function countDown(num) {
    while (num >= 0) {
        console.log(num);
        num--;
    }
}

countDown(10);
