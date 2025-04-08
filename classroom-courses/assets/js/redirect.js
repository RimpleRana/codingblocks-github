'use strict'

function redirect(pathname) {

    pathname = pathname.substring(18);
    const redirectUrl = "https://codingblocks.com"

    switch (pathname) {

        case '/':
            window.location = redirectUrl + "/classroom-programs.html";
            break;

        case '/c-plus-plus-for-beginners.html':
            window.location = redirectUrl + "/data-structures-and-algorithms-using-c-plus-plus.html";
            break;
        
        case '/java-for-beginners.html':
            window.location = redirectUrl + "/data-structures-and-algorithms-using-java.html";
            break;
        
        case '/android-app-development-using-kotlin-and-java.html':
            window.location = redirectUrl + "/android-development-using-kotlin.html";
            break;
        
        case '/web-development-nodejs.html':
            window.location = redirectUrl + "/full-stack-web-development-node-js.html";
            break;
        
        case '/advanced-data-structures-and-algorithms-for-interviews.html':
            window.location = redirectUrl + "/data-structures-and-algorithms-using-c-plus-plus.html";
            break;
        
        case '/advanced-data-structures-and-algorithms-using-java.html':
            window.location = redirectUrl + "/data-structures-and-algorithms-using-java.html";
            break;
        
        case '/competitive-programming.html':
            window.location = redirectUrl + "/competitive-programming.html";
            break;
        
        case '/machine-learning-with-deep-learning.html':
            window.location = redirectUrl + "/machine-learning-using-python.html";
            break;
        
        default:
            window.location = redirectUrl;
    }


}

redirect(window.location.pathname);