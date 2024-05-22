const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu-list");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");


menuBtn.onclick = () =>{
   menu.classList.add("active");
   menuBtn.classList.add("hide");
   cancelBtn.classList.remove("hide");
}
cancelBtn.onclick = () =>{
   menu.classList.remove("active");
   cancelBtn.classList.add("hide");
   menuBtn.classList.remove("hide");
}


window.onscroll = ()=>{
   this.scrollY > 50 ? navbar.classList.add("sticky"): navbar.classList.remove("sticky");
}

window.addEventListener('scroll', function() {
   const navbar = document.getElementById('navbar');
   const sections = document.querySelectorAll('div[id]');
   
   sections.forEach(section => {
       const sectionTop = section.offsetTop - navbar.offsetHeight;
       const sectionBottom = sectionTop + section.offsetHeight;

       if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
           const sectionId = section.getAttribute('id');
           const activeLink = document.querySelector(`.navbar a[href="#${sectionId}"]`);
           
           document.querySelectorAll('.navbar a').forEach(link => {
               link.classList.remove('active', 'underline');
           });

           activeLink.classList.add('active', 'underline');
       }
   });
});

document.getElementById('vid').play();