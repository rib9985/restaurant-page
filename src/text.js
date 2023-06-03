import { ContextExclusionPlugin } from "webpack"

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
    const anchor = document.createElement(a)
    anchor.setAttribute('class', `${cssClassName}`)
    anchor.setAttribute('id', `${id}`)
    anchor.setAttribute('href',`${htmlLink}`)
    anchor.textContent = text
    return anchor
}



function createLabel(labelname, text){
 const label = document.createElement('label')
 label.setAttribute('for', `${labelname}`)
 label.setAttribute('class', `${labelname}`)
 label.textContent = text
return label
}

function createInput(typeOfInput, id, cssClassName){
    const input = document.createElement('input')
    input.setAttribute('type', `${typeOfInput}`)
    input.setAttribute('id',`${id}`)
    input.setAttribute('class',`${cssClassName}`)
    input.setAttribute('value',`${value}`)
    return input
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
    contentDiv.textContent = ''
}

//Text Used in the Menu Module




//Text Used in the Reservations Module
const reservationText = 'Have someone special you would like to invite? How about a special occassion? Feel free to reserve a table below!'



//Text used in the Home Module
const aboutParagraph = 'This is story about how Italy and its cuisine was made. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed diam euismod, vulputate ante nec, euismod diam. Vivamus bibendum libero lorem, id sodales nunc auctor nec.'
const moreAboutUs = 'Check out more about us on this website! Feel free to navigate! Lorem ipsum dolor sit amet, consectetur adipiscing elit'


export {aboutParagraph, moreAboutUs, createHeader, createParagraph, createImage, createAnchorLink, emptyContentDiv}