import client1 from '../../../assets/icons/bg-img/cl-1.png'
import client2 from '../../../assets/icons/bg-img/cl-2.png'
import client3 from '../../../assets/icons/bg-img/cl-3.png'
import client4 from '../../../assets/icons/bg-img/cl-4.png'
import client5 from '../../../assets/icons/bg-img/cl-5.png'
import client6 from '../../../assets/icons/bg-img/cl-6.png'
import client7 from '../../../assets/icons/bg-img/cl-7.png'
import client8 from '../../../assets/icons/bg-img/cl-8.png'
import client9 from '../../../assets/icons/bg-img/cl-9.png'
import client10 from '../../../assets/icons/bg-img/cl-10.png'
import client11 from '../../../assets/icons/bg-img/cl-11.png'
import client12 from '../../../assets/icons/bg-img/cl-12.png'

const ClientWeWorkWith = ({ textEnter, textLeave }) => {
    return (<>
        <div className="client-section" onMouseEnter={textEnter} onMouseLeave={textLeave}>
            <div style={{ display: 'flex', width: '62%' }}><span className='client-section-title'>Clients we work with</span></div>
            <div className='client-gallery-container'>
                <div className="client-img-gallery">
                    <img className="img-gallery" src={client1} alt='client-1' />
                    <img className="img-gallery" src={client2} alt='client-2' />
                    <img className="img-gallery" src={client3} alt='client-3' />
                    <img className="img-gallery" src={client4} alt='client-4' />
                    <img className="img-gallery" src={client5} alt='client-5' />
                    <img className="img-gallery" src={client6} alt='client-6' />
                </div>
                <div className="client-img-gallery">
                    <img className="img-gallery" src={client7} alt='client-7' />
                    <img className="img-gallery" src={client8} alt='client-8' />
                    <img className="img-gallery" src={client9} alt='client-9' />
                    <img className="img-gallery" src={client10} alt='client-10' />
                    <img className="img-gallery" src={client11} alt='client-11' />
                    <img className="img-gallery" src={client12} alt='client-12' />
                </div>
            </div>
        </div>
    </>)
}

export default ClientWeWorkWith