import React from "react";
import './css/styles.css'


function PizzaCard() {
    return (
        <>
            <div className="col mb-5">
                <div className="card h-100 ">
                    <img className="card-img-top" src="https://p4.wallpaperbetter.com/wallpaper/698/474/361/dinner-food-pie-pizza-wallpaper-preview.jpg" alt="..." />
                    <div className="card-body p-4">
                        <div className="text-center">
                            <h5 className="fw-bolder">Pizza 1</h5>
                            $14.90
                            <p>Info info info</p>
                        </div>
                    </div>
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center"><a className="btn btn-outline-success mt-auto" href="#">Add to cart</a></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PizzaCard;