import { useNavigate } from 'react-router-dom';
import '../App.css';
import { useState } from "react";

const StartPage=()=>{
  
    const [achievement, setAchievement] = useState();
    const navigate = useNavigate()


    let name, value;
    const handleInput = (e) => {
        name = e.target.name
        value = e.target.value
        console.log("candidate", achievement)
        setAchievement({ ...achievement, [name]: value })  //[] dynamic data for
    }
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const {
         username, 
         game_level,
            } = achievement;

      const regInf = {
          method: "Post",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({
            username, 
            game_level,
          })
      }

      const resultdata = await fetch(`/api/createUserDetail`, regInf);
      const result = await resultdata.json()
      console.log("result", result)

      if (resultdata.status === 400 || !resultdata) {
          console.log("Invalid User")
      }
      else {
          console.log("new candidate add is successfully")
          navigate(`/game_dashboard/${result.data._id}`)
      }
  }


    return (
        <>
        <div style={{paddingTop: "50px"}}>
        <h1> Welcome to Guess word Game</h1> <br />
        <label>Username </label> <br />
       
        <input type="text" 
            className="col-lg-4" 
            id="inputName" 
            onChange={handleInput}
            name='username'
            placeholder="Username" />    
                
        <div id="chooseDifficulty">
          <h5 class="my-4">Choose a difficulty</h5>
          <div className="col-lg-4" style={{margin: "auto", padding: "10px"}}>
            <select
              className="form-select"
              id="game_level"
              onChange={handleInput}
              name="game_level"
              aria-label="select example"
            >
              <option selected>Level*</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="intermediate">Intermediate</option>
              <option value="difficult">Difficult</option>
              <option value="very_hard">Very Hard</option>
            </select>
          </div>
        </div>
        <br />
        <button
          className="btn btn-success"
          onClick={handleSubmit}
          type="Submit"
        >
          Submit
        </button>
      </div>
      </>
    )
}

export default StartPage;