import aboutParagraph from "./text"

function createParagraph(text, cssClassName){
    const paragraph = document.createElement('p')
    paragraph.textContent= text
    paragraph.setAttribute('class', `${cssClassName}`)
return paragraph
}

function createImage(imageSource, alt, cssClassName){
    const image = document.createElement('img')
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

function createHome(){
    const home = document.createElement('div')
    home.setAttribute('class', 'home')
    home.appendChild(createHeader('h1','Who Are We?','home-header'))
    home.appendChild(createParagraph(aboutParagraph,'home-paragraph'))

}




function loadHome(){

}