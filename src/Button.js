import React from 'react';


const Button = () => {
    const Button =
    [
        <div style={{ color: 'red', paddingTop:10, fontSize: 25}}> Hola Romeo.</div>,
        <div style={{ color: 'green', paddingTop:10, fontSize: 25 }}>Hola Julieta.</div>,
        <div style={{ color: 'red', paddingTop:10, fontSize: 25}}> T'estimo, Romeo</div>,
        <div style={{ color: 'green', paddingTop:10, fontSize: 25}}> I jo a tu Julieta</div>,
        <div style={{ color: 'red', paddingTop:10, fontSize: 25}}> Escapem-nos a Mèxic</div>,
        <div style={{ color: 'green', paddingTop:10, fontSize: 25}}> Millor no, no li caus bé a la meva família i si seguim endavant amb el nostre amor, aquesta història acabarà malament</div>,
        <div style={{ color: 'red', paddingTop:10, fontSize: 25}}> Doncs vaja </div>
    ]
  
   const [color, setColor] = React.useState(0);

    return<div>
        {/* show previous button*/}
        {color > 0 && <button onClick={() => setColor(color - 1)}>prev</button>}
        {/* hide next button */}
        {color < Button.length - 1 && <button onClick={() => setColor(color + 1)}>next</button>}
        <hr/>
        {Button[color]}
    </div>
}

export default Button;




