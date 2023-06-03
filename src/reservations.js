import * as text from './text.js'

function createReservation(){
    const reservation = document.createElement('div')
    reservation.setAttribute('class', 'div-reservation');
    reservation.appendChild(text.createHeader('h1', 'Reservations', 'reservation-header'))
    reservation.appendChild(text.createParagraph(text.reservationText, 'reservation-paragraph'))
    reservation.appendChild(text.createLabel())
}