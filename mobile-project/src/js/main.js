(function () {
    const menu = document.getElementById('menu')
    const openMenu = document.getElementById('openMenu')
    const menuStyle = getComputedStyle(menu)

    openMenu.addEventListener('click', function () {
        if(menuStyle.display == 'none') {
            menu.classList.add('active')
            document.getElementById('openMenu').innerHTML = 'Close menu'
        } else {
            menu.classList.remove('active')
            document.getElementById('openMenu').innerHTML = 'Open menu'
        }
    })
})()