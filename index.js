const hexStr = '4a1b48d7322394a78326cd283f0834093e65421a7e98e90e5b452d160b5d07d8';
const base64 = Buffer.from(hexStr, 'hex').toString('base64');

console.log(base64);