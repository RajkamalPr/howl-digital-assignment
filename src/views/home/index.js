import Layout from "../../components/layout"
import Banner from "./components/banner"
import ClientWeWorkWith from "./components/clientWeWorkwith"
import KeepTrackOfWolves from "./components/keepTrackOfWolves"
// import StrategyAndCounsulting from "./components/strategyAndCousulting"
import HowlSolutionChart from "../../assets/icons/bg-img/Howl_solutions_chart.jpg"
import Footer from "../../components/footer"

const Home = ({ textEnter, textLeave }) => {
    return (<Layout textEnter={textEnter} textLeave={textLeave}>
        <Banner textEnter={textEnter} textLeave={textLeave} />
        {/* <StrategyAndCounsulting /> */}
        <img src={HowlSolutionChart} style={{ width: '100%', objectFit: 'cover', marginTop: '1rem' }} onMouseEnter={textEnter} onMouseLeave={textLeave} alt="howl" />
        <ClientWeWorkWith textEnter={textEnter} textLeave={textLeave} />
        <KeepTrackOfWolves textEnter={textEnter} textLeave={textLeave} />
        <Footer textEnter={textEnter} textLeave={textLeave} />
    </Layout>)
}

export default Home