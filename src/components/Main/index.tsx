import style from "./Main.module.css"
import FirstContainer from "./FirstContainer";
import AboutContainer from "./AboutContainer";
import ServicesContainer from "./ServicesContainer";
import PortfolioContainer from "./PortfolioContainer";
// import FaqsContainer from "./FaqsContainer"

const Main = () => {
    return (
        <main className={style.main}>
            <FirstContainer />
            <AboutContainer />
            <ServicesContainer />
            <PortfolioContainer />
            {/* FaqsContainer */}
        </main>
    );
}

export default Main;