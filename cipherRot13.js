function rot13(str) {
  let coded = {
    a: 'n', b: 'o', c: 'p',
    d: 'q', e: 'r', f: 's',
    g: 't', h: 'u', i: 'v',
    j: 'w', k: 'x', l: 'y',
    m: 'z', n: 'a', o: 'b',
    p: 'c', q: 'd', r: 'e',
    s: 'f', t: 'g', u: 'h',
    v: 'i', w: 'j', x: 'k',
    y: 'l', z: 'm', ' ':' ', 
    '.':'.', '!':'!', '?':'?'    
  }
  str = str.toLowerCase();
  let decipher = '';
  for(let i = 0 ; i < str.length; i++){
    decipher += coded[str[i]];
  }
  console.log(decipher.toUpperCase())
  return decipher.toUpperCase();
}
rot13("SERR PBQR PNZC");
