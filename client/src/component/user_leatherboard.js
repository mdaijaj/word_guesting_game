import "../App.css";
import { useEffect, useState } from "react";
import axios from "axios";

const LeatherboardPage = () => {
  const [userlist, setUserlist] = useState([]);
  const baseurl = "https://dqsdevapi.elitetraveltech.in/api";

  const [show1, setShow1] = useState("");
  // const navigate = useNavigate()

  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setShow1({ ...show1, [name]: value }); //[] dynamic data for
  };

  const handleSubmit = () => {
    console.log("new candidate add is successfully");
    // navigate('/Achivement')
  };

  const AllUserList = async () => {
    const response = await axios.get(`/api/getUserList`);
    console.log("filterData", response);
    let filterData = await response.data.data;
    // console.log("filterData", filterData)
    setUserlist(filterData);
  };

  useEffect(() => {
    AllUserList();
  }, []);

  return (
    <>
      <div>
        <h1> Leatherboard User Top 10 list Rank</h1>

        <div id="chooseDifficulty" style={{padding: "10px"}}>
          <h5 class="my-4">Choose a difficulty</h5>
          <div className="col-lg-4" style={{margin: "auto", padding: "10px"}}>
            <select
              className="form-select"
              id="recongnized_by"
              onChange={handleInput}
              name="recongnized_by"
              aria-label="select example"
            >
              <option selected>Level*</option>
              <option value="1">Easy</option>
              <option value="2">Medium</option>
              <option value="3">Intermediate</option>
              <option value="3">Difficult</option>
              <option value="4">Very Hard</option>
              <option value="4">All</option>

            </select>
          </div>

          <button
            className="btn btn-success"
            onClick={handleSubmit}
            type="Submit"
          >
            Submit
          </button>
        </div>
      <div className="">
      <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Username</th>
              <th scope="col">Level</th>
              <th scope="col">Score</th>
            </tr>
          </thead>
          <tbody>
            {
              userlist.map((item, index) => {
                  console.log("item", item)
                  return (
                      <tr key={index}>
                          <td>{item._id}</td>
                          <td>{item.username}</td>
                          <td>{item.game_level}</td>
                          <td>{item.score}</td>
                      </tr>
                  )
              })
            }
          </tbody>
        </table>
      </div>
  
      </div>
    </>
  );
};

export default LeatherboardPage;
