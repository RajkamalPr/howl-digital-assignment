import track1 from '../../../assets/icons/bg-img/t1.png'
import track2 from '../../../assets/icons/bg-img/t2.png'
import { MdOutlineArrowForward } from "react-icons/md";

const KeepTrackOfWolves = ({ textEnter, textLeave }) => {

    return (<>
        <div className="track-section" onMouseEnter={textEnter} onMouseLeave={textLeave}>
            <div className='track-container'>
                <div className="track-section-title" >Keep Track of the wolves <MdOutlineArrowForward />
                </div>
                <div className='track-box-container'>
                    <img className="track-box" alt='track1' src={track1} />
                    <div className="track-box">We're hiring!</div>
                    <img className="track-box" alt='track1' src={track2} />
                </div>
            </div>
        </div>
    </>)
}
export default KeepTrackOfWolves