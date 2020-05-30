function open_nav(x) {
    x.classList.toggle("change");
    let dropdown = document.getElementById('dropdown_menu_id');
    dropdown.style.height = dropdown.style.height == '100%' ? '0%' : '100%';
}

function theme_banner_light() {
    document.getElementById('themes_title').innerHTML = "— Light";
    document.getElementById('themes_title').style.color = "#c0c6cf";
    document.getElementById('themes_banner').src="images/themes/light.jpg";
}

function theme_banner_olivia() {
    document.getElementById('themes_title').innerHTML = "— Olivia";
    document.getElementById('themes_title').style.color = "#e8c4b8";
    document.getElementById('themes_banner').src="images/themes/olivia.jpg";
}

function theme_banner_mizu() {
    document.getElementById('themes_title').innerHTML = "— Mizu";
    document.getElementById('themes_title').style.color = "#b9d9eb";
    document.getElementById('themes_banner').src="images/themes/mizu.jpg";
}

function theme_banner_alter() {
    document.getElementById('themes_title').innerHTML = "— Alter";
    document.getElementById('themes_title').style.color = "#d72f1f";
    document.getElementById('themes_banner').src="images/themes/alter.jpg";
}

function theme_banner_nautilus() {
    document.getElementById('themes_title').innerHTML = "— Nautilus";
    document.getElementById('themes_title').style.color = "#eac004";
    document.getElementById('themes_banner').src="images/themes/nautilus.jpg";
}