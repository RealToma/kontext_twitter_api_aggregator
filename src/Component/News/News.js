import { memo } from "react";

import Marquee from "react-fast-marquee";
import iconBitcoin from "../../Assets/Image/Icon/Chain/bitcoin.png";
import iconBSC from "../../Assets/Image/Icon/Chain/bsc.png";
import iconEther from "../../Assets/Image/Icon/Chain/ethereum.png";
import iconPolygon from "../../Assets/Image/Icon/Chain/polygon.png";
import iconCommunity from "../../Assets/Image/Icon/iconLogo.png"

import "./News.styles.css";

export const News = memo(() => {
  return (
    <div className={`news-line`}>
      <div className="news-elements-container">
        <Marquee gradient={false}>
          <div className="news-elem">
            <img src={iconBitcoin} alt="token logo"></img>
            <span className="token-position">1#</span>
            <span>Bitcoin</span>
          </div>
          <div className="news-elem">
            <img src={iconEther} alt="token logo"></img>
            <span className="token-position">2#</span>
            <span>Ethereum</span>
          </div>
          <div className="news-elem">
            <img src={iconBSC} alt="token logo"></img>
            <span className="token-position">3#</span>
            <span>BNB</span>
          </div>
          <div className="news-elem">
            <img src={iconPolygon} alt="token logo"></img>
            <span className="token-position">4#</span>
            <span>Polygon</span>
          </div>
        </Marquee>
      </div>
      <div className="news-main-elem">
        <div className="token-half-bg" />
        <section>
          <span>Community</span>
          <img src={iconCommunity} alt="token logo" />
        </section>
      </div>
    </div>
  );
});
