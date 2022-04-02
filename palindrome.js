function palindrome(str) {
    var res = "";
    res = str.replace(/[^\w\s]|_/g, "")
        .replace(/\s+/g, "");
    return res.split("").reverse().join("").toLowerCase() === res.toLowerCase() ? true : false
}

palindrome("eye");
