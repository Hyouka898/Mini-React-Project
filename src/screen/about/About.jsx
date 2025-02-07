import AppHeader from "../../component/home/header"
import AppFooter from "../../component/home/footer"
import AppAboutComponent from "../../component/about/AboutCom"
import AppAboutPassion from "../../component/about/AboutPassion"
export default function AppAbout() {
    return (
        <div>
            <header>
                <AppHeader />
            </header>
            <main>
                <AppAboutPassion/>
                <AppAboutComponent/>
                <br /><br /><br /><br /><br />
            </main>
            <footer>
                <AppFooter />
            </footer>
        </div>
    )
}