import React from 'react'



const randomColor = () => {
    var r = Math.floor(Math.random() * (255));
    var g = Math.floor(Math.random() * (255));
    var b = Math.floor(Math.random() * (255));

    return [r, g, b];
}

export default randomColor