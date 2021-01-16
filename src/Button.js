import React from 'react';

const Button = () => {

    const Button =
    [
        <div style={{ paddingTop:10, fontSize: 25 }}>Hola Romeo.</div>,
        <div style={{ paddingTop:10, fontSize: 25 }}>Hola Julieta.</div>,
        <div style={{ paddingTop:10, fontSize: 25 }}>T'estimo, Romeo</div>,
        <div style={{ paddingTop:10, fontSize: 25 }}>I jo a tu Julieta</div>,
        <div style={{ paddingTop:10, fontSize: 25 }}>Escapem-nos a Mèxic</div>,
        <div style={{ paddingTop:10, fontSize: 25 }}>Millor no, no li caus bé a la meva família i si seguim endavant amb el nostre amor, aquesta història acabarà malament</div>,
        <div style={{ paddingTop:10, fontSize: 25 }}>Doncs vaja</div>
    ]
  
   const [line, setLine] = React.useState(0);

    return<div>
        {/* show previous button*/}
        {line > 0 && <button onClick={() => setLine(line - 1)}>prev</button>}
        {/* hide next button */}
        {line < Button.length - 1 && <button onClick={() => setLine(line + 1)}>next</button>}
        <hr/>
        {Button[line]}
    </div>
}

export default Button;




