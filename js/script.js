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

    //carrozza numero random
    var ticketNumber = Math.floor(Math.random() * 10) + 1;

    //stampare numero carrozza
    document.getElementById('ticket_number').innerHTML = ticketNumber;

    //codice cp
    var ticketCp = Math.floor(Math.random() * 100000) + 50000;

    //prezzo
    document.getElementById('ticket_cp').innerHTML = ticketCp;

    //costo biglietto
    var prezzoPerKm = 0.21;
    var generatoKm = document.getElementById('generator_km');
    var userKm = parseInt (generatoKm.value);
    console.log(userKm);
    //calcolo prezzo
    var finalPrice = userKm * prezzoPerKm;
    //console.log(finalPrice);
    if( userAge == 'minorenne' ) {
        finalPrice = finalPrice - (finalPrice * 0.2);
    } else if( userAge == 'over' ) {
        finalPrice = finalPrice - (finalPrice * 0.4);
    }
    console.log(finalPrice);

    //stampare costo biglietto
    document.getElementById('ticket_price').innerHTML = finalPrice.toFixed(2);

});

// funzionalità del bottone annulla
var cancelButton = document.getElementById('cancel_button')
cancelButton.addEventListener('click', function() {
    
}