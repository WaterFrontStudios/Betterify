/* Seekbar Colors */
const seekbarBGColor = "#83F28F";
const seekbarFGColor = "#1FD655";
const seekbarHoverColor = "#ABF7B1";

/* Volume bar Colors */
const volumebarBGColor = "#83F28F";
const volumebarFGColor = "#1FD655";
const volumebarHoverColor = "#ABF7B1";

/* Controls Colors */
const controlBackground = "linear-gradient(0deg, rgba(31,215,85,1) 0%, rgba(132,242,143,1) 100%)";

/* Nav Colors */
const sidebarBG = "linear-gradient(0deg, rgba(31,215,85,1) 0%, rgba(132,242,143,1) 100%)";
const topBar = "rgba(132,242,143,1)";
const homebackground = "#00AB41";
const tilescolor = "#008631";

/* Get Items */
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
    } catch (err) {
        console.error(err);
        return;
    }
}

/* Change Styles */
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
randomBox[0].remove();
