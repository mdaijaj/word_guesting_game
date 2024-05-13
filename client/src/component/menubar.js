import {Route, Routes} from 'react-router-dom';
import GameDashBoard from './game_dashboard';
import StartPage from './start_page';
import Userboard from './user_leatherboard'

const Routing=()=>{

  return(
    <>
        <Routes>
          <Route exact path="/" element={<StartPage/>} />  
          <Route path="/start_game" element={<StartPage/>} />
          <Route path="/game_dashboard/:id" element={<GameDashBoard/>} />
          <Route path="/user_leadtherboard" element={<Userboard/>} />
        </Routes>
    </>
    )
}


export default Routing;