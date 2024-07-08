import React from "react";
import checkpoint1 from "../assets/checkpoint1.png";

const LearnerNFT = () => (
  <div className="learner-container">
    <div className="tick-lg">✓</div>
    <div className="learner-nft">
      <img
        src={checkpoint1}
        alt="Intract Certified: Learner NFT"
        className="learner-nft-image"
      />
    </div>
    <p className="learner-nft-title">Intract Certified: Learner NFT</p>
    <p className="learner-nft-description">
      Your crypto black-belt certificate
    </p>
  </div>
);

export default LearnerNFT;
