import React from "react";

const SportsHero = () => {
    return (
        <div className="container wrapper lg:pt-4">
            <div className="comic-item hero-item transition ease-in-out duration-1000 lg:hover:-translate-y-10 lg:hover:scale-100 lg:hover:brightness-50">
                <h1 className="overlay-text text-white text-4xl font-extrabold brightness-200 mx-56">Hello World!</h1>
            </div>
            <div className="comic-item standard-item transition ease-in-out duration-1000 lg:hover:-translate-x-20 lg:hover:scale-100 lg:hover:brightness-50 rounded-b-2xl">
            </div>
            <div className="comic-item standard-item transition ease-in-out duration-1000 lg:hover:translate-x-20 lg:hover:scale-100 lg:hover:brightness-50 rounded-b-2xl">
            </div>
            {/* <div className="comic-item standard-item">
            </div> */}
        </div>
    );
  };
  
  export default SportsHero;
  