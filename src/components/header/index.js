import howlIcon from '../../assets/icons/howl_logo.png'
const Header = ({ textEnter, textLeave }) => {
    return (<div className='header-section' onMouseEnter={textEnter} onMouseLeave={textLeave}>
        <img src={howlIcon} alt="Howl Icon" style={{ height: '38px' }} />
        <div className='hamburger-menu'>
            <div className='line'></div>
            <div className='line'></div>
        </div>
    </div>)
}

export default Header