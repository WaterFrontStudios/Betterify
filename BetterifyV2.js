/*
$$$$$$$\             $$\     $$\                         $$\  $$$$$$\            
$$  __$$\            $$ |    $$ |                        \__|$$  __$$\           
$$ |  $$ | $$$$$$\ $$$$$$\ $$$$$$\    $$$$$$\   $$$$$$\  $$\ $$ /  \__|$$\   $$\ 
$$$$$$$\ |$$  __$$\\_$$  _|\_$$  _|  $$  __$$\ $$  __$$\ $$ |$$$$\     $$ |  $$ |
$$  __$$\ $$$$$$$$ | $$ |    $$ |    $$$$$$$$ |$$ |  \__|$$ |$$  _|    $$ |  $$ |
$$ |  $$ |$$   ____| $$ |$$\ $$ |$$\ $$   ____|$$ |      $$ |$$ |      $$ |  $$ |
$$$$$$$  |\$$$$$$$\  \$$$$  |\$$$$  |\$$$$$$$\ $$ |      $$ |$$ |      \$$$$$$$ |
\_______/  \_______|  \____/  \____/  \_______|\__|      \__|\__|       \____$$ |
                                                                       $$\   $$ |
                                                                       \$$$$$$  |
                                                                        \______/
*/
//The open source Spotify theme client.
//The background colors support gradients and colors.
//https://waterfrontstudios.github.io/products/Betterify


/*                                              
 █▀▀ █▀█ █▄░█ █▀▀ █ █▀▀   █▀ ▀█▀ ▄▀█ █▀█ ▀█▀ █▀
 █▄▄ █▄█ █░▀█ █▀░ █ █▄█   ▄█ ░█░ █▀█ █▀▄ ░█░ ▄█ 
*/

/* Global */
const font = "Arial"; // See https://www.w3schools.com/cssref/css_websafe_fonts.php for available fonts.

/* Seekbar Colors */
const seekbarBGColor = "#7777FF";
const seekbarFGColor = "#77FF77";
const seekbarHoverColor = "#FF7777";

/* Volume bar Colors */
const volumebarBGColor = "#7777FF";
const volumebarFGColor = "#77FF77";
const volumebarHoverColor = "#FF7777";

/* Controls Colors */
const controlBackground = "linear-gradient(0deg, rgba(102,119,238,1) 0%, rgba(68,85,204,1) 100%)";

/* Nav Colors */
const sidebarBG = "linear-gradient(0deg, rgba(85,102,221,1) 0%, rgba(17,34,153,1) 100%)";
const topBar = "rgba(17,34,153,1)";
const homebackground = "#212155";
const tilescolor = "#414177";

/* Playlist Colors */
const playlistBG = "#212155";
const onScrollLabelClusterColor = "#212155";

/* Search and Library Colors */
const searchLBG = "#212155";

/*

 █▀▀ █▄░█ █▀▄   █▀█ █▀▀   █▀▀ █▀█ █▄░█ █▀▀ █ █▀▀ ░   █▀ ▀█▀ █▀█ █▀█   █░█ █▀▀ █▀█ █▀▀   █░█ █▄░█ █░░ █▀▀ █▀ █▀   █▄█ █▀█ █░█   █▄▀ █▄░█ █▀█ █░█░█   █░█░█ █░█ ▄▀█ ▀█▀   █▄█ █▀█ █░█ ▀ █▀█ █▀▀   █▀▄ █▀█ █ █▄░█ █▀▀ █ █ █
 ██▄ █░▀█ █▄▀   █▄█ █▀░   █▄▄ █▄█ █░▀█ █▀░ █ █▄█ █   ▄█ ░█░ █▄█ █▀▀   █▀█ ██▄ █▀▄ ██▄   █▄█ █░▀█ █▄▄ ██▄ ▄█ ▄█   ░█░ █▄█ █▄█   █░█ █░▀█ █▄█ ▀▄▀▄▀   ▀▄▀▄▀ █▀█ █▀█ ░█░   ░█░ █▄█ █▄█ ░ █▀▄ ██▄   █▄▀ █▄█ █ █░▀█ █▄█ ▄ ▄ ▄ 

*/

const seekBarClass = "TywOcKZEqNynWecCiATc";
const volumeBarClass = "TywOcKZEqNynWecCiATc";
const controlsClass = "GD2gbRtcs5dOjMGAM_Y4";

const sidebarClass = "Root__nav-bar";
const removeRandomBoxShadow = "McwcCfBLSuXa5UDU1IMw";
const dragClass = "Root__top-bar";
const homeClass = "uIJTvxFOg2izOY7aRRiU";
const playlistClass = "gHImFiUWOg93pvTefeAD";
const dragClass2 = "T1xI1RTSFU7Wu94UuvE6";
const tilesClass = "LunqxlFIupJw_Dkx6mNx";

const seekBar = document.getElementsByClassName(seekBarClass);
const volumeBar = document.getElementsByClassName(volumeBarClass);
const controls = document.getElementsByClassName(controlsClass);
const sidebar = document.getElementsByClassName(sidebarClass);
const randomBox = document.getElementsByClassName(removeRandomBoxShadow);
const drag = document.getElementsByClassName(dragClass);
const home = document.getElementsByClassName(homeClass);
const drag2 = document.getElementsByClassName(dragClass2);
const m = document.getElementsByTagName("main");
function Func() {
    try {
        const tiles = document.getElementsByClassName(tilesClass);
        for (let k = 0; k < tiles.length; k++) {
            tiles[k].style.setProperty("background", tilescolor);
        }
        try {
            sidebar[0].style.setProperty("background", sidebarBG);
        } catch {}
        try {
            drag[0].style.setProperty("background", topBar);
        } catch {}
        try {
            home[0].style.setProperty("background", homebackground);
        } catch {}
        try {
            drag2[0].style.setProperty("background", homebackground);
        } catch {}
        try {
            let g = document.getElementsByClassName("gHImFiUWOg93pvTefeAD");
            for (let gg = 0; gg < g.length; gg++) {
                g[gg].remove();
            }
        } catch {}
        try {
            let g = document.getElementsByClassName("CoLO4pdSl8LGWyVZA00t");
            g[0].remove();
        } catch {}
        try {
            document.getElementsByClassName("rezqw3Q4OEPB1m4rmwfw")[0].style.setProperty("background", playlistBG);
        } catch {}
        try {
            document.getElementsByClassName("RMDSGDMFrx8eXHpFphqG")[0].style.setProperty("background", playlistBG);
        } catch {}
        try {
            let g = document.getElementsByTagName("*");
            for (let gg = 0; gg < g.length; gg++) {
                g[gg].style.setProperty("font-family", "Arial");
            }
        } catch {}
        try {
            document.getElementsByClassName("qJOhHoRcFhHJpEQ2CwFT")[0].style.setProperty("background", onScrollLabelClusterColor);
        } catch {}
        try {
            document.getElementsByClassName("main-view-container__scroll-node-child")[0].style.setProperty("background", searchLBG);
        } catch {}
    } catch (err) {
        console.error(err);
        return;
    }
}

seekBar[0].style.setProperty("--bg-color", seekbarBGColor);
seekBar[0].style.setProperty("--fg-color", seekbarFGColor);
seekBar[0].style.setProperty("--is-active-fg-color", seekbarHoverColor);

volumeBar[1].style.setProperty("--bg-color", volumebarBGColor);
volumeBar[1].style.setProperty("--fg-color", volumebarFGColor);
volumeBar[1].style.setProperty("--is-active-fg-color", volumebarHoverColor);

controls[0].style.setProperty("background", controlBackground);

Func();
const mutconf = {attributes: true, childList: true, subtree: true};
const observer = new MutationObserver(function(mutationList, observer) {
    Func();
});
observer.observe(m[0], mutconf);
try {
    randomBox[0].remove();
} catch {}