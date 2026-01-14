import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return <div className="flex items-center gap-5 bg-base-200 p-3">
    <p className="text-base-100 bg-secondary px-3 py-2">Latest</p>
    <Marquee className="flex gap-5" pauseOnHover={true} speed={60}>

    <p className="font-bold">👍Singer Tahsan er abar divorce holo.</p>
    <p className="font-bold">Mithilar sathe abar tahsan ke dekhte chay tader voktora...</p>
    <p className="font-bold">Onno dike rafsan sabab r zefar biye kore fello😎</p>
    </Marquee>
  </div>;
};

export default LatestNews;
