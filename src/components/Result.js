import React from 'react';


function Result(props) {
    const {total, timePay, mount} = props;
    
    return (
    <div className = "u-full-width resultado">
        <h2>Resumen</h2>

    <ul>
        <li>La cantidad solicitada es: <strong>${ mount }</strong> </li>
        <li>A pagar en: <strong>{ timePay } Meses </strong></li>
        <li>Pago mensual de: <strong>${ (total / timePay).toFixed(2) }</strong> </li>
        <li>Total a pagar: <strong>${ total.toFixed(2) }</strong> </li>
    </ul>
    </div>
    );
}

export default Result
