import React from 'react';
import ReactDOM from 'react-dom/client';
import { GameWithHooks } from './modules/GameWithHooks';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <GameWithHooks />
);

{/* const Game: FC = () => (
    <Wrapper>
        <Top feature="Flag" firstAction="right click">
            Minesweeper
        </Top>
    </Wrapper>
);


ReactDOM.render(<Game>{StaticField}</Game>, document.getElementById('root')); */}

// import { Top } from './components/Top/Top';
// import {Scoreboard} from './components/Scoreboard'

// //test change
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(
//     <React.StrictMode>
//         <>
//             <Top feature='Flag' firstAction='Ctrl' secondAction='Click'>
//                 Minesweeper
//             </Top>
//             <Scoreboard 
//                 time="000"
//                 levels={['beginner', 'intermediate', 'expert']}
//                 mines="010"
//                 onReset={() => null}
//             />
//         </>
//     </React.StrictMode>
// );