import react  from "react";
import './App.css';
import Time from './pages/tiem';
import Header from './pages/header';
import data from "./GirlImages.json";
import HeaderWelcome from "./pages/header-welcome"
import {AiFillEdit} from "react-icons/ai"
function App() {

  const max= data.GirlImages.length
  let number = Math.floor(Math.random() * max)
  console.log(data.GirlImages[number].imageUrl);
  document.body.style.backgroundImage=`url( ${data.GirlImages[number].imageUrl} )`;

  // const check=window.localStorage.getItem("userName");
  const name = window.localStorage.getItem("userName");
    console.log(name);
// console.log(check==="");
  return (
    <div className="App">

      <Time/>
      <AiFillEdit className="editBtn" onClick={()=>{
                    window.localStorage.clear();
                    window.location.reload();
                }}/>
      <div className="main-box">
      {
        name ?(<Header/>):(<HeaderWelcome/>)
      }
      </div>
    </div>
  );
}

export default App;
