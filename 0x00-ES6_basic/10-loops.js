export default function appendToEachArrayValue(array, appendString) {
    const myarr = [];
    for (const idx of array) {
      myarr.push(appendString + idx);
    }
  
    return myarr;
  }