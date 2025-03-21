function switchPage(n) {
    const home = document.getElementById("home")
    home.style.transform = `translateY(${-n*100}%)`
    
    const work = document.getElementById("work")
    work.style.transform = `translateY(${-n*100}%)`

    const about = document.getElementById("about")
    about.style.transform = `translateY(${-n*100}%)`

}