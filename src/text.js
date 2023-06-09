//Functions
function createParagraph(text, cssClassName){
    const paragraph = document.createElement('p')
    paragraph.textContent= text
    paragraph.setAttribute('class', `${cssClassName}`)
return paragraph
}

function createImage(imageSource, alt, cssClassName){
    const image = new Image()
    image.alt= alt
    image.src=imageSource
    image.setAttribute('class', `${cssClassName}`)
return image
}


function createHeader(typeOfHeader, text,cssClassName){
    const header = document.createElement(`${typeOfHeader}`)
    header.textContent = text
    header.setAttribute('class',`${cssClassName}`)
    return header
}

function createAnchorLink (text, htmlLink, cssClassName, id){
    const anchor = document.createElement('a')
    anchor.setAttribute('class', `${cssClassName}`)
    anchor.setAttribute('id', `${id}`)
    anchor.setAttribute('href',`${htmlLink}`)
    anchor.textContent = text
    return anchor
}

function createDiv (text, cssClassName, id){
    const div = document.createElement('div')
    div.setAttribute('class', `${cssClassName}`)
    div.setAttribute('id', `${id}`)
    div.textContent = text
    return div
}


function createLabel(labelname, text){
 const label = document.createElement('label')
 label.setAttribute('for', `${labelname}`)
 label.setAttribute('class', `${labelname}`)
 label.textContent = text
return label
}

function createInput(typeOfInput, placeholder, id, cssClassName){
    const input = document.createElement('input')
    input.setAttribute('type', `${typeOfInput}`)
    input.setAttribute('id',`${id}`)
    input.setAttribute('class',`${cssClassName}`)
    input.setAttribute('placeholder',`${placeholder}`)
    return input
}

function createForm(action, method){
    const form = document.createElement('form')
    form.setAttribute('action', `${action}`)
    form.setAttribute('method', `${method}`)
    return form
}

function createButton(typeOfButton, id, cssClassName){
    const button = document.createElement('button')
    button.setAttribute('type', `${typeOfButton}`)
    button.setAttribute('id',`${id}`)
    button.setAttribute('class',`${cssClassName}`)
    return button
}

function emptyContentDiv(id){
    const contentDiv = document.getElementById(`${id}`)
    contentDiv.innerHTML = ''
}

//Text Used in the Menu Module




//Text Used in the Reservations Module
const reservationText = 'Have someone special you would like to invite? How about a special occassion? Feel free to reserve a table below! Or give us a Call!'



//Text used in the Home Module
const aboutParagraph = 'This is story about how Italy and its cuisine was made. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed diam euismod, vulputate ante nec, euismod diam. Vivamus bibendum libero lorem, id sodales nunc auctor nec.'
const moreAboutUs = 'Check out more about us on this website! Feel free to navigate! Lorem ipsum dolor sit amet, consectetur adipiscing elit'
const cacioepepe = 'Cacio Pepe: Authentic Roman pasta dish featuring al dente spaghetti tossed in creamy pecorino and black pepper sauce, a true flavor sensation.'
const lasagna = "Lasagna: Layers of homemade pasta, rich Bolognese sauce, creamy béchamel, and melted cheese, a comforting classic worth savoring."
const matriciana = "Matriciana: Traditional Italian pasta with spicy tomato sauce, smoky pancetta, pecorino cheese, and a hint of garlic, a fiery delight."



export {aboutParagraph, moreAboutUs, reservationText, cacioepepe, lasagna, matriciana, createHeader, createParagraph, createDiv, createImage, createAnchorLink, emptyContentDiv, createForm, createLabel, createInput}