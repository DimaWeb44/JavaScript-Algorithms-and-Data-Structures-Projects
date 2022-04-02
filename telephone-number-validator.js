function telephoneCheck(str) {
let pat = /^1?\s?(\(\d{3}\)|\d{3})(-|\s)?\d{3}(-|\s)?\d{4}$/gm
return pat.test(str)
}
telephoneCheck("555-555-5555");
