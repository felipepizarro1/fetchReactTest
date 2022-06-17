import React from "react";
import './css/styles.css'


function Banner1() {

    return (
        <>
            <div className="video-overlay container">
                <div className="row mt-5">
                    <div className="col-6-lg mt-5 text-white d-flex justify-content-lg-end justify-content-sm-center">
                        <h1>Pizzerie Sisalopoli</h1>
                    </div>
                </div>
                <div className="row d-flex justify-content-lg-end justify-content-sm-center">
                    <div className="col-4 d-none d-sm-block mt-4 text-white text-center d-flex">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                    </div>
                </div>
                <div className="row d-flex justify-content-lg-end justify-content-sm-center">
                    <div className="col-2 mt-3 text-white">
                        <button type="button" className="btn btn-success btn-lg">Button</button>
                    </div>
                </div>
            </div>
            <video loop autoPlay muted fluid={false} height={630} >
                <source src="/PIZZA-BANNER.mp4" type="video/mp4" />
            </video>
        </>
    )

}

export default Banner1;