const modal=document.querySelector(".modal");

// modal appears on scroll 
document.addEventListener('scroll',( )=>{
    setTimeout(( )=>{
        document.body.classList.add("open")
    },2000)
},{once:true})

// click outside the sidebar and it closes 
document.addEventListener('click', (e) => {
    if (!modal.contains(e.target)) {
        document.body.classList.remove("open");
    }
});
