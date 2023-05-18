import React from 'react';
import '../Cstyle/details.css';
import '../Cstyle/details_sub.css';

const Details=()=>
{

  const val = {"data":
  [{
  "small_icon":"../images/rBimg1.jpg",
  "title":"Housing",
  "link":"https://housing.com/news/top-it-companies-in-chennai/",
  "details_H":"08-Feb-2022 — IT companies in Chennai, Tamil Nadu: List of top 10 software companies in Chennai · Inspirisys Solutions Ltd · Accenture · Adrenalin eSystems",
  "content":"08-Feb-2022 — IT companies in Chennai, Tamil Nadu: List of top 10 software companies in Chennai · Inspirisys Solutions Ltd · Accenture · Adrenalin eSystems",
  "image":"rBimg1.jpg"
  },
  {
  "small_icon":"../images/rBimg2.jpg",
  "title":"Wikipedia",
  "link":"https://en.wikipedia.org/wiki/List_of_Indian_IT_companies",
  "details_H":"List of Indian IT companies",
  "content":"List of Indian IT companies · TCS Office at SIPCOT, Siruseri · Cyber Gateway Madhapur Hyderabad near Raheja Mindspace · TCS at Voltas House, Jamshedpur · Wipro",
  "image":"rBimg2.jpg"
  },
  {
  "small_icon":"../images/rBimg3.jpg",
  "title":"No Broker",
  "link":"https://www.nobroker.in/blog/it-companies-in-chennai/",
  "details_H":"Top IT Companies in Chennai - All About Software ",
  "content":"List of Top 10 It Companies in Chennai · 1. Infosys · 2. Wipro · 3. Tech Mahindra · 4. Tata Consultancy Services · 5. Cognizant · 6. Computer Sciences Corporation ·",
  "image":"rBimg2.jpg"
  }
  ]
  };

  // const path = '../images/';

  return(
    <div>
      <section className="first-section">
      <div className="row mt-4">
        <div className="col-2" id="logo">
        <div className="BName-banner">
<h1>DUNDLE</h1>
      </div>
        </div>
        <div className="col-4" id="searchbar">
        <div className="input-group" id="search-bar">
      
  <input type="text" className="form-control" value="it company" placeholder="Search Dundle or type a URL" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  <span className="input-group-text" id="basic-addon2"><i className="fa fa-microphone"></i></span>
  <span className="input-group-text" id="basic-addon2"><i className="fa fa-camera-retro"></i></span>
  <span className="input-group-text" id="basic-addon1"><i className="fa fa-search"></i></span>
</div>
        </div>
        <div className="col-6" id="tri-icon">
          <ul className="pull-right">
            <li><i className="fa fa-cog"></i></li>
            <li><i className="fa fa-th"></i></li>
            <li>
              <button id="login_btn">Sign In</button>
            </li>
          </ul>
        </div>
      </div>

<div className="row mt-4">
<div className="col-2"></div>
<div className="col-6 p-0">
<ul className='d-flex p-0'>
  <li className="First_ul">
  <ul>
    <li><i className="fa fa-search"></i>All</li>
    <li><i className="fa fa-newspaper-o"></i>News</li>
    <li><i className="fa fa-map-o"></i>Maps</li>    
    <li><i className="fa fa-file-image-o"></i>Images</li>
    <li><i className="fa fa-file-video-o"></i>Videos</li>
    <li>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
</svg>
      More</li>
  </ul>
  </li>
  <li className="Second_ul">
  <ul>
    <li>Tools</li>
  </ul>
  </li>
</ul>
  
  
  </div>  
</div>
</section>

<section className="second-section">
<div className="row mt-4">
<div className="col-2"></div>
<div className="col-6 p-0 content">
<p>About 25,27,00,00,000 results (0.52 seconds) </p>
<div className="d-flex results">
<p className="">Results for <b>Chennai, Tamil Nadu 600016</b></p>
<button className="location_btn"><i className="fa fa-crosshairs pr-3"></i>Use precise location</button>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
</svg>
</div>
</div>
</div>


<div className="row">
<div className="col-2"></div>
<div className="col-6 p-0 content">
{
    val.data.map( datas => {
      return(
      <div>
      <div class="upper_portion d-flex">
      <div className="left_tiny">
       {/* <img src={require(datas.small_icon)}/> */}
       <img src={require(datas.small_icon)} alt="?"/>
      </div>
      <div className="right_tiny">
        <h6>{datas.title}</h6>
        <p>{datas.link}</p>
      </div>
    </div>
    <div className="content_H">
      <h5>{datas.details_H}</h5>
    </div>
    <div className="details">
      <p>{datas.content}</p>
    </div>
    </div>
      )
    }
      )
  }

</div>
</div>

</section>

<div>
  
</div>

    </div>
  )
}

export default Details;
