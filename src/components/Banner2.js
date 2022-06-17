import React from "react";
import './css/styles.css'


function Banner2() {

    return (
        <header className="bg-success py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="text-center text-white">
                    <h1 className="display-4 fw-bolder">Pizzerie Sisalopoli</h1>
                    <p className="lead fw-normal text-white-50 mb-0">Random Text</p>
                    <button type="button" className="btn btn-outline-light btn-lg mt-4">Button</button>
                </div>
            </div>
        </header>
    );

}

export default Banner2;