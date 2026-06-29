const $user = $("#user");
const $menu = $("#user-menu");

const $navBar = $(".nav-bar");
const $menuNavBar = $("#menu-nav-bar");
const $navBarItem = $(".nav-bar-item");

$user.on("click", function (e) {
    e.stopPropagation(); // ngăn click lan ra document
    $menu.toggleClass("hidden");
});

$(document).on("click", function () {
    $menu.addClass("hidden");
});

$menu.on("click", function (e) {
    e.stopPropagation(); // click trong menu không bị đóng
});

$menuNavBar.on("click", function (e) {
    $navBar.toggleClass("w-[75px]");
    $navBar.toggleClass("w-[260px]");
    $navBar.toggleClass("z-10");
    $navBarItem.toggleClass("justify-center");
    $navBarItem.toggleClass("justify-start");
});