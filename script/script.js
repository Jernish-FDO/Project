var sidenav = document.querySelector(".side-navbar")

function showNavbar() {
    sidenav.style.left = "0"

}

function closeNavbar() {
    sidenav.style.left = "-60%"
}

// Toogle Button Light , Dark

// document.body.classList.add('light');
// document.getElementById('theme-btn').addEventListener('click', () =>{
//     document.body.classList.toggle('dark')
//     document.body.classList.toggle('light')
// })