import React from 'react'
import BannerImg from '../../img/baanneer.jpg'
import '../../styles/index.css'

const Jumbotron = () => {
    return (
        <div className="container p-5 mb-4 bg-body-tertiary jumbotron">
        {/* <img src={BannerImg} className="img-fluid banner position-absolute z-n1" /> */}
        <div className="py-5 z-1">
          <h1 className="display-5 fw-bold">Jumbo mumbo</h1>
          <p className="col-md-7 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
          <button className="btn btn-primary btn-lg" type="button">Example button</button>
        </div>
      </div>
    )
}

export default Jumbotron