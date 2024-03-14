import React from 'react'

export default function Search(props) {
  return (
    <div className='container mt-2'>
      <form action="" className='row g-3'>
        <div className=' col-md-5'>
          <label htmlFor='city' className=' form-label fw-bolder'>Enter City Name : </label>
          <input type="text" className='form-control' id='city' placeholder='Enter City Name' value={props.city} onChange={props.change} name='city' />
        </div>
        <div className='col-md-2'>
          <h4 className='mt-5 mx-auto w-25 text-muted'>OR</h4>
        </div>
        <div className='col-md-5'>
          <div className=" mb-3">
            <span className='fw-bolder'>Get Co-ordinate</span>
            <button className='btn' onClick={props.location}><img src="assests/img/location-icon.jpg" alt="icon" className='img-icon mx-auto' /></button>
          </div>
          <label htmlFor='lat' className='form-label fw-bolder'>Lat :</label>
          <input type="number" id="lat" className='form-control' placeholder='Enter Latitude' value={props.lat} onChange={props.change} name="lat"/>

          <label htmlFor='lon' className='form-label fw-bolder mt-1'>Lon :</label>
          <input type="number" id="lon" className='form-control' placeholder='Enter Langitude' value={props.lon} onChange={props.change} name="lon" />

          <button className='btn ms-2 form-label fw-bolder mt-3' onClick={props.search}>Search<img src="assests/img/search-icon.jpg" alt="icon" className='search-icon' /></button>

        </div>
      </form>
    </div>
  )
}
