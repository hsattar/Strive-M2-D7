// EX11) Write a function to add a new link into the navbar

const addLinkToNavbar = () => {
    const navbar = document.querySelector('nav.nav')
    const newLink = document.createElement('a')
    newLink.className = 'p-2 text-muted'
    newLink.innerText = 'New Link'
    navbar.appendChild(newLink)
}

addLinkToNavbar()

// EX12) Write a function to change the color of the main title

const changeMainTItle = () => {
    const mainTitle = document.querySelector('h1')
    mainTitle.innerText = 'I Changed The Title'
}

changeMainTItle()

// EX13) Write a function to change the background of the jumbotron

const changeJumbotronBackground = () => {
    const jumbotron = document.querySelector('.jumbotron')
    console.log(jumbotron)
    jumbotron.classList.remove('bg-dark')
    jumbotron.classList.add('bg-primary')
}

changeJumbotronBackground()

// EX14) Write a function to remove all the links under "Elsewhere"




// EX15) Write a function to change the column size for heading in jumbotron




// EX16) Write a function to remove the "Search" magnifying glass icon




// EX17) Write a function to trim just the first 50 characters in the first paragraph for each blog post




// EX18) Write a function and attach it to the "Newer" button, to add new Blog Post (just div and title)




// EX19) Write a function and attach it to the "Older" button, to remove the last Blog Post




// EX20) Write an alert with the name of the author every time the user hover with the mouse over an author name




