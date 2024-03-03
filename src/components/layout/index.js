import Header from "../header"
import '../../assets/styles/globalStyle.css'

const Layout = ({ textEnter, textLeave, children }) => {
    return (<>
        <Header textEnter={textEnter} textLeave={textLeave} />
        {children}
    </>)
}

export default Layout