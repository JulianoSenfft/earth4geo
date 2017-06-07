function setCookie(c_name,value,exdays){
    
    window.localStorage.setItem(c_name, value);
}

function getCookie(c_name){
    
    var usuario = window.localStorage.getItem(c_name);
    return usuario;
}

function checkCookie(cookie){
    
    if(!cookie){
        cookie = "earth4geo";
    }
    
    var username = getCookie(cookie);
    if (username != null && username != ""){
        return username;
    }else {
        return 0;
    }
    
}

function deleteCookie( c_name ) {
    window.localStorage.removeItem(c_name);
    checkCookie();
}