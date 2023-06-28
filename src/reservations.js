import * as text from './text.js'
import callUsIcon from './img/call_FILL0_wght400_GRAD0_opsz48.svg'

function createForm(){
    const form = text.createDiv('', 'reservations-div', 'reservations-div-1')
    form.appendChild(text.createForm('https://httpbin.org/status/200', 'post'))
    form.appendChild(text.createInput('text', 'First Name', 'firstName', 'form-input'))
    form.appendChild(text.createInput('text', 'Last Name', 'lastName', 'form-input'))
    form.appendChild(text.createInput('email', 'Email', 'userEmail,', 'form-input'))
    form.appendChild(text.createInput('date', 'Date of Reservation', 'date', 'form-input'))
    form.appendChild(text.createInput('text', 'Special Requests', 'requests', 'form-input'))
    form.appendChild(text.createInput('submit', 'Submit', '', 'form-input'))
    return form
}

function createCallUsArea(){
    const callDiv = text.createDiv('', 'callUsDiv', 'callDiv')
    callDiv.appendChild(text.createImage(callUsIcon, 'telephone-icon', 'callIcon'))
    callDiv.appendChild(text.createParagraph('+1 555-111-222', 'callText'))
    return callDiv
}

function createReservationPage(){
    const reservation = document.createElement('div')
    reservation.setAttribute('class', 'div-reservation');
    reservation.appendChild(text.createHeader('h1', 'Reservations', 'reservation-header'))
    reservation.appendChild(text.createParagraph(text.reservationText, 'reservation-paragraph'))
    reservation.appendChild(createForm())
    reservation.appendChild(text.createHeader('h2', 'Or Call Us!', ))
    reservation.appendChild(createCallUsArea())
    return reservation  
}


function loadReservations(){
    const contentDiv = document.getElementById('content')
    contentDiv.appendChild(createReservationPage())
}

export {loadReservations}