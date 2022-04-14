let users = [
    {id:1,first_name:"Lauren",last_name:"Shaxby",email:"lshaxby0@php.net",created_at:"16/10/2021"},
    {id:2,first_name:"Ardenia",last_name:"Paddingdon",email:"apaddingdon1@nsw.gov.au",created_at:"27/07/2021"},
    {id:3,first_name:"Renaldo",last_name:"Alenichev",email:"ralenichev2@ftc.gov",created_at:"10/06/2021"},
    {id:4,first_name:"Nichole",last_name:"OHeneghan",email:"noheneghan3@flavors.me",created_at:"28/06/2021"},
    {id:5,first_name:"Haywood",last_name:"Daintry",email:"hdaintry4@nhs.uk",created_at:"18/03/2021"},
    {id:6,first_name:"Leslie",last_name:"Daile",email:"ldaile5@vimeo.com",created_at:"23/05/2021"},
    {id:7,first_name:"Byrann",last_name:"Slorance",email:"bslorance6@kickstarter.com",created_at:"15/05/2021"},
    {id:8,first_name:"My",last_name:"Swendell",email:"mswendell7@moonfruit.com",created_at:"15/12/2021"},
    {id:9,first_name:"Brier",last_name:"Esson",email:"besson8@usa.gov",created_at:"14/03/2021"},
    {id:10,first_name:"Seth",last_name:"Piddle",email:"spiddle9@nationalgeographic.com",created_at:"20/10/2021"},
    {id:11,first_name:"Fer",last_name:"Piddle",email:"ferspiddle9@nationalgeographic.com",created_at:"20/10/2022"},
]

let usersPadrão = [
    {id:1,first_name:"Lauren",last_name:"Shaxby",email:"lshaxby0@php.net",created_at:"16/10/2021"},
    {id:2,first_name:"Ardenia",last_name:"Paddingdon",email:"apaddingdon1@nsw.gov.au",created_at:"27/07/2021"},
    {id:3,first_name:"Renaldo",last_name:"Alenichev",email:"ralenichev2@ftc.gov",created_at:"10/06/2021"},
    {id:4,first_name:"Nichole",last_name:"OHeneghan",email:"noheneghan3@flavors.me",created_at:"28/06/2021"},
    {id:5,first_name:"Haywood",last_name:"Daintry",email:"hdaintry4@nhs.uk",created_at:"18/03/2021"},
    {id:6,first_name:"Leslie",last_name:"Daile",email:"ldaile5@vimeo.com",created_at:"23/05/2021"},
    {id:7,first_name:"Byrann",last_name:"Slorance",email:"bslorance6@kickstarter.com",created_at:"15/05/2021"},
    {id:8,first_name:"My",last_name:"Swendell",email:"mswendell7@moonfruit.com",created_at:"15/12/2021"},
    {id:9,first_name:"Brier",last_name:"Esson",email:"besson8@usa.gov",created_at:"14/03/2021"},
    {id:10,first_name:"Seth",last_name:"Piddle",email:"spiddle9@nationalgeographic.com",created_at:"20/10/2021"},
    {id:11,first_name:"Fer",last_name:"Piddle",email:"ferspiddle9@nationalgeographic.com",created_at:"20/10/2022"},
]

let currentPage = 1
const UsersPerPage = 5

function deleteUser(id){
    users = users.filter(user => user.id !== id)
    if(currentPage > Math.ceil(users.length / UsersPerPage)) {
        currentPage--
        render()
    }
    render()
  }

function getCurrentPageUsers() {
    const startIndex = (currentPage - 1) * UsersPerPage
    const endIndex  = startIndex + UsersPerPage

    return users.slice(startIndex,endIndex).map(users => {
        let row = document.createElement('tr')
        row.setAttribute('id', users.id)
    
        let userNameCell = document.createElement('td')
        userNameCell.appendChild(document.createTextNode(`${users.first_name} ${users.last_name}`))
    
        let userEmailCell = document.createElement('td')
        userEmailCell.appendChild(document.createTextNode(users.email))
    
        let userCreatedAtCell = document.createElement('td')
        userCreatedAtCell.appendChild(document.createTextNode(users.created_at))
        
        let actionsCell = document.createElement('td')
        actionsCell.classList.add('action_buttons')
    
        let editButton = document.createElement('button')
        editButton.classList.add('TextButton', 'EditButton')
        editButton.appendChild(document.createTextNode('editar'))
        
        let deleteButton = document.createElement('button')
        deleteButton.classList.add('TextButton', 'DeleteButton')
        deleteButton.appendChild(document.createTextNode('excluir'))
        deleteButton.setAttribute('type', 'button')
        deleteButton.addEventListener('click', () => deleteUser(users.id))
    
        actionsCell.appendChild(editButton)
        actionsCell.appendChild(deleteButton)
    
        row.appendChild(userNameCell)
        row.appendChild(userEmailCell)
        row.appendChild(userCreatedAtCell)
        row.appendChild(actionsCell)
    
        return row

    })
}

function Criatag(elemento) {
    return document.createElement(elemento);
}

function createButtonElemnt(textContent) {
    const buttonElement = Criatag('button')
    buttonElement.type = 'button'
    buttonElement.textContent = textContent

    return buttonElement
}
function goToLeft(){
    if (currentPage - 1 > 0){
        currentPage--
        render()
    }
}

function goToRight(){
    if (currentPage + 1 <= Math.ceil(users.length / UsersPerPage)){
        currentPage++
        render()
    }
}
function GoToPage(page){
    currentPage = page
    render()
}

function createPagina() {
    const PaginaQtn = Math.ceil(users.length / UsersPerPage)
    const buttonleft = Criatag('button')
    const buttonRight = Criatag('button')
    buttonleft.appendChild(document.createTextNode('<<'))
    buttonRight.appendChild(document.createTextNode('>>'))
    buttonleft.addEventListener("click", goToLeft)
    buttonRight.addEventListener("click", goToRight)
    const DivPagina = document.querySelector('.pagina')
    DivPagina.appendChild(buttonleft)
    for (let i = 1; i <= PaginaQtn; i++) {
        const button = Criatag('button')
        if (currentPage === i) {
            button.classList.add('active')
        }
        button.addEventListener("click", () => GoToPage(i))
        button.appendChild(document.createTextNode(i))
        DivPagina.appendChild(button)
      }
    DivPagina.appendChild(buttonRight)
}

function UsersActions(users) {
    const userActions = Criatag('div')
    userActions.classList.add('UserActions')

    const editButton = Criatag('button')
    editButton.classList.add('edit')
    editButton.type = 'button'
    editButton.textContent = 'editar'

    const deleteButton = Criatag('button')
    deleteButton.classList.add('delete')
    deleteButton.type = 'button'
    deleteButton.textContent = 'excluir'
}
function createTableActions(users) {
    const tableActions = Criatag('tr')
    tableActions.classList.add('UserActions')

}
function render(){
    const tbody = document.querySelector('tbody')
    while (tbody.hasChildNodes()){
        tbody.removeChild(tbody.lastChild)
    }
    for(let j = 0; j <getCurrentPageUsers().length; j++) {
    tbody.appendChild(getCurrentPageUsers()[j])
    }
    const DivPagina = document.querySelector('.pagina')
    while (DivPagina.hasChildNodes()){
        DivPagina.removeChild(DivPagina.lastChild)
    //isso apaga a antiga//
    }
    createPagina()
   
}

render()
