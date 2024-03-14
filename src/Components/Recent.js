  import React from 'react'

  export default function Recent(props) {
    console.log("props recent", props.recent);
    let data;

    if (props.recent === null) {
      data = "";
    } else {
      data = props.recent.map((rdata, index) => {
        return <li key={index} onClick={() => {props.research(rdata.lat, rdata.lon)}}>{rdata.city}</li>
      })
    }

    return (
      <div className=' container mt-5'>
        <h3 className=' text-center'>Recent Data</h3>
        <div className=' ms-2'>
          <ul className='text-left list-unstyled'>
            {data}
          </ul>
        </div>
      </div>
    )
  }
