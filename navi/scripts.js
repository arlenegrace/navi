function open_nav() {
    let sidenav = document.getElementById('sidenav');
    let dropdown = document.getElementById('sidenav_container_id');
    let bg = document.getElementById('sidenav_bg');
    const opened = dropdown.style.width == '70vw' ? true : false;

    document.getElementById('hamburger').classList.toggle("change");

    if (opened) {
        bg.style.width = '0vw';
        bg.style.opacity = '0';
        dropdown.style.width = '0vw';
        sidenav.style.width = '0vw';
    } else {
        dropdown.style.width = '70vw';
        bg.style.width = '100vw';
        bg.style.opacity = '1';
        sidenav.style.width = '100vw';
    }
}

function theme_banner_light() {
    document.getElementById('themes_title').innerHTML = "— LIGHT";
    document.getElementById('themes_title').style.color = "#c0c6cf";
    document.getElementById('themes_banner').src="images/themes/light.jpg";
}

function theme_banner_olivia() {
    document.getElementById('themes_title').innerHTML = "— OLIVIA";
    document.getElementById('themes_title').style.color = "#e8c4b8";
    document.getElementById('themes_banner').src="images/themes/olivia.jpg";
}

function theme_banner_mizu() {
    document.getElementById('themes_title').innerHTML = "— MIZU";
    document.getElementById('themes_title').style.color = "#b9d9eb";
    document.getElementById('themes_banner').src="images/themes/mizu.jpg";
}

function theme_banner_alter() {
    document.getElementById('themes_title').innerHTML = "— ALTER";
    document.getElementById('themes_title').style.color = "#d72f1f";
    document.getElementById('themes_banner').src="images/themes/alter.jpg";
}

function theme_banner_nautilus() {
    document.getElementById('themes_title').innerHTML = "— NAUTILUS";
    document.getElementById('themes_title').style.color = "#eac004";
    document.getElementById('themes_banner').src="images/themes/nautilus.jpg";
}