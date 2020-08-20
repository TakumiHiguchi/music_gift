export function isSignIn(value) {
    if(value){
        return {
            type: "SIGNED_IN",
            value : value
        };
    }else{
        return {
            type: "SIGNED_OUT",
            value : value
        };
    }
}

export function setUserDetails(response) {
    if (response.exists) {
        return {
            type: "USERDETAILS_EXISTS",
            value : response.data()
        };
    }else{
        return {
            type: "USERDETAILS_NOEXISTS",
            value : null
        };
    }
}