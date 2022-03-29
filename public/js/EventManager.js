let isScrollDisabled = true;

function preventDefault(e) {
    e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}
let supportsPassive = false;

try {
    window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
        get: function () { supportsPassive = true; }
    }));
} catch(e) {}

let wheelOpt = supportsPassive ? { passive: false } : false;
let wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

blockPageScrollOnMapZoom = () => {
    let pos = document.querySelectorAll( ":hover" );
    pos.forEach(element => {
        console.log(element.id)
        if (element.id === "content-container" && isScrollDisabled) {
            isScrollDisabled = false;
            enableScroll()
        } else if (element.id === "map" && !isScrollDisabled) {
            isScrollDisabled = true;
            disableScroll();
        }
    })
}

function disableScroll() {
    window.addEventListener('DOMMouseScroll', preventDefault, false);
    window.addEventListener(wheelEvent, preventDefault, wheelOpt);
    window.addEventListener('touchmove', preventDefault, wheelOpt);
    window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

function enableScroll() {
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
    window.removeEventListener('touchmove', preventDefault, wheelOpt);
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}