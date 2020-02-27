const toBigEndian = n => n.toString(16).padStart(8, "0");
// transform it into a hexadecimal string and fill in the beginning with eight zeros
const toHexaDecimal = n => n.toString(16);
// transform it into a hexacimal string
const toBinary = n => n.toString(2);
// transform it into a binary string
const toOctal = n => n.toString(8);
// transform it into a octal string
const toBase64 = string => btoa(string);
// transform it into a base64 string with btoa function encode
const toAsciiArray = string => {
    const asciiArray = [];
    for (var idx = 0; idx < string.length; ++idx) asciiArray.push(string.charCodeAt(idx));
    return asciiArray;
};
// pushes all char values for a array 
const fromBigEndian = b => parseInt(b, 16);
const fromHexaDecimal = h => parseInt(h, 16);
const fromBinary = b => parseInt(b, 2);
const fromOctal = o => parseInt(o, 8);

// transform it into a integer
const fromBase64 = b => atob(b);
// transform it into a string with atob function decode
const fromAscii = a => String.fromCharCode(a);
// transform it into a ascii string
const fromAsciiArray = aa => {
    const charArray = [];
    for (var idx = 0; idx < aa.length; ++idx) charArray.push(String.fromCharCode(aa[idx]));
    return charArray;
}
// transform it into a char array
