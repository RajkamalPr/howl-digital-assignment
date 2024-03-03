import { useRef } from "react";
import howlBg1 from '../../../assets/icons/bg-img/howl_bg1.png'
import howlBg2 from '../../../assets/icons/bg-img/howl_bg2.png'

const Banner = ({ textEnter, textLeave }) => {
    const windowWidth = useRef(window.innerWidth);
    console.log('windowWidth', windowWidth);
    return (<>
        <div className="banner-section" onMouseEnter={textEnter} onMouseLeave={textLeave}>
            <div className="banner-container">
                <div className="banner-title">
                    <div className="banner-text inter-bold " >
                        We exist because we want to help you navigate
                        and harness the potential of this ever-changing
                        digital landscape.
                    </div>
                    <div className="inter-bold custome-text-stock">
                        <span>Your</span> <br /> <span style={{ marginLeft: '4vw' }}>Growth</span> <br /><span style={{ marginLeft: '8vw' }}>Partners</span>
                    </div>

                </div>
                <div className="banner-title">
                    <div className="banner-bg-img-container">
                        <img src={howlBg1} className="bg-img1" alt="bg-img1" />
                        <img src={howlBg2} className="bg-img2" alt="bg-img2" />
                    </div>
                </div>

            </div>
            <div className="banner-desc2">
                <div className="banner-text inter-bold banner-txt-w-6">
                    It's not a game of guesses, it's a game of numbers where growth is the
                    ultimate goal. We leverage cutting-edge technology and data-driven
                    insights to help you answer questions that unlock growth.
                </div>
            </div>

        </div>
    </>)
}
export default Banner