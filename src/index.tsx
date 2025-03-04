import React from 'react';
import ReactDOM from 'react-dom/client';

import { Top } from './components/Top/Top';
import {Scoreboard} from './components/Scoreboard'

//test change
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <>
            <Top feature='Flag' firstAction='Ctrl' secondAction='Click'>
                Minesweeper
            </Top>
            <Scoreboard 
                time="000"
                levels={['beginner', 'intermediate', 'expert']}
                mines="010"
                onReset={() => null}
            />
        </>
    </React.StrictMode>
);


// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(
//   <React.StrictMode>
// 	<Top feature='Flag' firstAction='Ctrl' secondAction='Click'>
//         Minesweeper
//     </Top>
//   </React.StrictMode>
// );


// import React from 'react';
// import ReactDOM from 'react-dom';

// import { Legend } from './components/Legend';

// ReactDOM.render(<Legend />, document.getElementById('root'));



// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
