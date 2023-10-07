const menu_toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

menu_toggle.addEventListener('click', ()=>
{
    if(nav.classList.contains('active'))
    {
        nav.classList.remove('active');
        menu_toggle.classList.remove('menu-cross');
    }

    else
    {
        nav.classList.add('active');
        menu_toggle.classList.add('menu-cross');
    }
})
