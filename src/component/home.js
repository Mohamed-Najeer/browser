import React from 'react';
import '../Cstyle/home.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { useNavigate } from 'react-router-dom';







const Home=()=>
{

  const navigate = useNavigate();

  const checkVal=(event)=>{
    if(event.key === 'Enter'){
      navigate('/details');
    }
  // var val = event.target.value;
  }

  return(
    <div className="home-class">
      <div className="BName-banner">
<h1>DUNDLE</h1>
      </div>
      <div className="input-group my-4" id="search-bar">
      <span className="input-group-text" id="basic-addon1"><i class="fa fa-search"></i></span>
  <input type="text" className="form-control" placeholder="Search Dundle or type a URL" aria-label="Recipient's username" aria-describedby="basic-addon2" onKeyUp={checkVal}/>
  <span className="input-group-text" id="basic-addon2"><i class="fa fa-microphone"></i></span>
</div>
    </div>
  )
}

export default Home;
