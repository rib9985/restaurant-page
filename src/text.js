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


function emptyContentDiv(id){
    const contentDiv = document.getElementById(`${id}`)
    contentDiv.textContent = ''
}

//Text Used in the Menu Module




//Text Used in the Reservations Module




//Text used in the Home Module
const aboutParagraph = 'This is story about how Italy and its cuisine was made. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed diam euismod, vulputate ante nec, euismod diam. Vivamus bibendum libero lorem, id sodales nunc auctor nec.'
const moreAboutUs = 'Check out more about us on this website! Feel free to navigate! Lorem ipsum dolor sit amet, consectetur adipiscing elit'


export {aboutParagraph, moreAboutUs, createHeader, createParagraph, createImage, createAnchorLink, emptyContentDiv}