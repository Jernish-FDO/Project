const navlink = document.querySelectorAll('header nav a');
const logolink = document.querySelector('.logo');
const sections = document.querySelectorAll('section');
const menuicon = document.querySelector('#menu-icon');
const navbar = document.querySelector('header nav');

menuicon.addEventListener('click', () => {
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

const activepage = () => {
    const heading = document.querySelector('header');
    const barbox = document.querySelector('.bar-box');

    heading.classList.remove('active');
    setTimeout(() => {
        heading.classList.add('active');
        
    }, 1100);

    navlink.forEach(link => {
        link.classList.remove('active');
    });

    barbox.classList.remove('active');
    setTimeout(() => {
        barbox.classList.add('active');
        
    }, 1100);

    sections.forEach(section => {
        section.classList.remove('active');
    });

    menuicon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

navlink.forEach((link, idx) => {
    link.addEventListener('click', () => {
        if (!link.classList.contains('active')){
            activepage();

            link.classList.add('active');

            setTimeout(() => {
                sections[idx].classList.add('active');
            }, 1100);
        }
    });
});

logolink.addEventListener('click', () => {
    if (!navlink[0].classList.contains('active')) {
        activepage();

        navlink[0],classList.add('active');

        setTimeout(() => {
            sections[0].classList.add('active');
        }, 1100);
    }
});

const resumebtn = document.querySelectorAll('.resume-btn');

resumebtn.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        const resumedetail = document.querySelectorAll('.resume-detail');

        resumebtn.forEach(btn => {
            btn.classList.remove('active');
        });
        btn.classList.add('active');

        resumedetail.forEach(detail => {
            detail.classList.remove('active');
        });
        resumedetail[idx].classList.add('active');
    });
});

const arrowright = document.querySelector('.portfolio-box .navigation .arrow-right');
const arrowleft = document.querySelector('.portfolio-box .navigation .arrow-left');

let index = 0;

const activeportfolio = () => {
    const imgslide = document.querySelector('.portfolio-carousel .img-slide');
    const portfoliodetails = document.querySelectorAll('.portfolio-detail');

    imgslide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

    portfoliodetails.forEach(detail => {
        detail.classList.remove('active');
    });
    portfoliodetails[index].classList.add('active');
}

arrowright.addEventListener('click', () => {
    if(index < 1){
        index++;
        arrowleft.classList.remove('disabled');
    }
    else{
        index = 2;
        arrowright.classList.add('disabled');
    }
    
    activeportfolio();
});
arrowleft.addEventListener('click', () => {
    if(index > 1){
        index--;
        arrowright.classList.remove('disabled');
    }
    else{
        index = 0;
        arrowleft.classList.add('disabled');
    }

    activeportfolio();
});