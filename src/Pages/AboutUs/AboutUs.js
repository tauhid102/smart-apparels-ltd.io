import React from "react";
import '../Style/Style.css';
import aboutP from "../../images/about.png";
const AboutUs = () => {
  return (
    <div className="aboutContainer">
      <div className="mt-5 pt-3 container section-Head">
        <div className="headerWidth text-center"><h2 className=" mt-3">About Us</h2></div>
        <div className="row row-cols-1 row-cols-md-2">
          <div className="col">
            <img
              src={aboutP}
              alt=""
              srcset=""
              width="90%"
              className="mt-5"
            />
          </div>
          <div className="col about mt-3">
            <p className="aboutParagraph mt-4">
              Smart Apparel BD (SABD) is a 100% export oriented Garment
              Buying House and Sourcing agent. Smart Apparels BD located in
              Dhaka, which is the hub of all the commercial and business
              activities of Bangladesh.
            </p>
            <p className="aboutParagraph">
              We take orders from buyers and place them to our trusted as well
              as potential factories. We do production planning from very
              initial stage, do follow up, communicate with buyers regularly,
              inform daily status, do inline and final inspection, control
              shipment/delivery schedule and finally check and dispatch shipping
              documents to the buyers.
            </p>
            <p >
              <strong> Our motto is “Delivering on time in quality goods at competitive
                price”</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
