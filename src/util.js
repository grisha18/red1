 export const makeColor = () =>{

    const r =  Math.floor(Math.random() * Math.floor(255));
    const g =  Math.floor(Math.random() * Math.floor(255));
    const b =  Math.floor(Math.random() * Math.floor(255));
    const hex = rgbToHex(r, g, b);
    return hex;
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  
  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }
  
//   alert(rgbToHex(0, 51, 255)); 