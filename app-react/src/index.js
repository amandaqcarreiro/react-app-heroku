import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import './index.css';

function Dia(props){
    return (
        <button>
            {
                (props.dia > 0 && props.dia < 32) ?
                props.dia :
                '.'

            }
        </button>
    )
}

function Semana(props){
    return (
        <div>
            <Dia dia={props.diaInicial}/>
            <Dia dia={props.diaInicial + 1}/>
            <Dia dia={props.diaInicial + 2}/>
            <Dia dia={props.diaInicial + 3}/>
            <Dia dia={props.diaInicial + 4}/>
            <Dia dia={props.diaInicial + 5}/>
            <Dia dia={props.diaInicial + 6}/>
        </div>
    )
}

function Calendario(props){
    return (
        <div>
            <div>{props.mes} / {props.dia}</div>
            <button>D</button>
            <button>S</button>
            <button>T</button>
            <button>Q</button>
            <button>Q</button>
            <button>S</button>
            <button>S</button>
            <Semana diaInicial={-3}/>
            <Semana diaInicial={4}/>
            <Semana diaInicial={11}/>
            <Semana diaInicial={18}/>
            <Semana diaInicial={25}/>
            <Semana diaInicial={32}/>
        </div>
    )
}

function Agenda (props){
    const [value, onChange] = useState(new Date());
    return (
        <div>
            <Calendario mes={props.mes} ano={props.ano} />
            <br/>
            <Calendar
                onChange={onChange}
                value={value}
            />
        </div>
        
    )
}

ReactDOM.render(
    <Agenda mes={7} ano={2021}/>,
    document.getElementById('root')
)
