import React from 'react'

function Cwsp(props) {
  return (
    <div>
      {/* <h1 class="text-center">Meet Our Team</h1> */}
      <div className="fcontainer">
        <div className="frow">
          {/*team1*/}
          <button>
            <div className="col-lg-4">
              <div className="our-team-main">
                <div className="team-front">
                  <img src={props.img} className="img-fluid" />
                  <h3>{props.head}</h3>
                  <p>{props.dtl}</p>
                </div>
                <div className="team-back">
                  <span>{props.almamater}</span>
                </div>
              </div>
            </div><div className="click">click here</div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cwsp


//cwsp=coop in world-wide scale projects