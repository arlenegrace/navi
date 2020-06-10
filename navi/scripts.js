
function open_nav() {
    /* MANUALLY CALCULATE DROPDOWN WIDTH (LINE 11 & 25) */
    /* AUTO DOESN'T PLAY CLOSING TRANSITION */
    let sidenav = document.getElementById('sidenav');
    let dropdown = document.getElementById('sidenav_container_id');
    let bg = document.getElementById('sidenav_bg');
    let header_logo = document.getElementById('header_logo');
    let body = document.getElementsByTagName("body")[0];
    let main = document.getElementsByTagName("main")[0];
    const opened = dropdown.style.width == '230px' ? true : false;

    document.getElementById('hamburger').classList.toggle("change");

    if (opened) {
        dropdown.style.width = '0vw';
        sidenav.style.width = '0vw';
        bg.style.width = '0vw';
        body.style.overflow = 'auto';
        main.style.opacity = '1';
        main.style.filter = 'blur(0px)';
        header_logo.style.opacity = '1';
        header_logo.style.filter = 'blur(0px)';
    } else {
        dropdown.style.width = '230px';
        sidenav.style.width = '100vw';
        bg.style.width = '100vw';
        body.style.overflow = 'hidden';
        main.style.opacity = '0.3';
        main.style.filter = 'blur(6px)';
        header_logo.style.opacity = '0.4';
        header_logo.style.filter = 'blur(6px)';
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