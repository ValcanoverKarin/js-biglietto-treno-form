// funzionalità del bottone genera
var generateButton = document.getElementById('generate_button')
generateButton.addEventListener('click', function() {
    //operazioni da svolgere al click
    //alert('click funziona')

    //nome passeggero, leggo input generator_name
    var generatorNameElement = document.getElementById('generator_name');
    var userName = generatorNameElement.value;
    console.log(userName);

    //stampare nome
    document.getElementById('ticket_name').innerHTML = userName;
    
    //offerta, leggo input generator_age, faccio if
    // se maggiorenne, minorenne o over
    var generatorAge = document.getElementById('generator_age');
    var userAge = generatorAge.value;
    console.log(userAge);
    var userOffer = 'Prezzo standard';
    if ( userAge == 'minorenne') {
        userOffer = 'Sconto minorenne';
    } else if ( userAge == 'over') {
        userOffer = 'Sconto over';
    }
    console.log(userOffer);

    //stampare sconto età 
    document.getElementById('ticket_offer').innerHTML = userOffer;

    //carrozza
    var ticketNumber = Math.floor(Math.random() * 10) + 1;

    //stampare numero carrozza
    document.getElementById('ticket_number').innerHTML = ticketNumber;

    //codice
    //prezzo
    
});