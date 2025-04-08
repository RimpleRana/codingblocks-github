'use strict'

function redirect(pathname) {

    pathname = pathname.substring(10);
    const redirectUrl = "https://codingblocks.com"

    switch (pathname) {

        default:
            window.location = redirectUrl;
    }


}

redirect(window.location.pathname);