
import style from "./Main.module.css"
import FirstContainer from "./FirstContainer";
import AboutContainer from "./AboutContainer";


const Main = () => {
    return (
        <main className={style.main}>
            <FirstContainer />
            <AboutContainer />
            {/* ServicesContainer */}
            {/* PortfolioContainer */}
            {/* FaqsContainer */}
        </main>
    );
}

export default Main;