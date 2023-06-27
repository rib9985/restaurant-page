import * as text from './text.js'
import menuItemOne from './img/cacioepepe.jpg'
import menuItemTwo from './img/lasaghna.jpg'
import menuItemThree from './img/matriciana.jpg'


function createMenu(){
    const menu = document.createElement('div')
    menu.setAttribute('class', 'menu')
    menu.appendChild(text.createHeader('h1', 'Our Menu', 'menu-header'))
    menu.appendChild(text.createHeader('h2', 'Main Dishes', 'menu-header-main'))
    menu.appendChild(createMenuItem('one', menuItemOne, 'cacioepepe', 'menuItemOne', '1', text.cacioepepe, 'Cacio & Pepe'))
    menu.appendChild(createMenuItem('two', menuItemTwo, 'lasangha', 'menuItemTwo', '2', text.lasagna, 'Lasagna'))
    menu.appendChild(createMenuItem('three', menuItemThree, 'matriciana', 'menuItemThree', '3', text.matriciana, 'Matriciana'))


}   

function createMenuItem(item, imageSource, imageAltName, cssClassName, cssId, description, dishname){
    const menuItem = text.createDiv ('', `menu-item-${item}`, `menu-${cssId}`)
    menuItem.appendChild(text.createImage(imageSource, `${imageAltName}`, `${cssClassName}-image`))
    menuItem.appendChild(text.createHeader('h3', `${dishname}`, `${cssClassName}-title`))
    menuItem.appendChild(text.createParagraph(description, `${cssClassName}-paragraph`))
    return menuItem
}