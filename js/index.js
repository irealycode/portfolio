function switchPage(n) {
    const home = document.getElementById("home")
    home.style.transform = `translateY(${-n*100}%)`

    const work = document.getElementById("work")
    work.style.transform = `translateY(${-n*100}%)`

    const about = document.getElementById("about")
    about.style.transform = `translateY(${-n*100}%)`
}

function switchContact(on) {
    const home = document.getElementById("home")
    home.style.transform = `translateX(${on*-100}%)`

    const contact = document.getElementById("contact")
    contact.style.transform = `translateX(${on*-100}%)`
}

var last_opened = -1

function showOrHideProject(n) {
    const desc = document.getElementById(`desc-${n}`)
    // console.log(desc.style)
    desc.style.maxHeight = desc.style.maxHeight === "" || desc.style.maxHeight === "0px"?'160px':'0px'

    if (last_opened !== -1 && last_opened !== n) {
        const desc = document.getElementById(`desc-${last_opened}`)
       desc.style.maxHeight = '0px'
    }

    last_opened = n
}