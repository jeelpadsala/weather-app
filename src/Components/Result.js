import React from 'react'
import Loader from './Loader'

export default function Result(props) {

  const { weatherData: data } = props;
  // if (!data) {
  //   return null;
  // }

  function ktoc(k) {
    return (k - 273.15).toFixed(2) + " ° C"
  }

  function getDate(s) {
    const date = new Date(s * 1000);
    return date.toTimeString();
  }

  let Data;
  if (data === null) {
    if (props.loader === true) {
      Data = <Loader></Loader>
    } else {
      Data = (
        <div className='container text-center mt-3'>
          <h3>Please Select City</h3>
        </div>
      )
    }
  } else {
    Data = (
      <div className='container mt-5'>
        <div className='row'>
          <div className='col'>
            <div className='card border-primary'>
              <div className=' card-body'>
                <h4 className=' card-title'>
                  <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="" />
                  {data.name}<span className='pl-2 ms-3'>{data.weather[0].description}</span>
                </h4>
                <div className='row'>
                  <div className='col'>
                    <div className='row'>
                      <table className='table'>
                        <tbody>
                          <tr>
                            <th>Feels Like</th>
                            <td>{ktoc(data.main.feels_like)}</td>
                          </tr>
                          <tr>
                            <th>Min.Temp</th>
                            <td>{ktoc(data.main.temp_min)}</td>
                          </tr>
                          <tr>
                            <th>Max.Temp</th>
                            <td>{ktoc(data.main.temp_max)}</td>
                          </tr>
                          <tr>
                            <th>Sun Rise</th>
                            <td>{getDate(data.sys.sunrise)}</td>
                          </tr>
                          <tr>
                            <th>Sun Set</th>
                            <td>{getDate(data.sys.sunset)}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }


  return <>
    {Data}
  </>
}