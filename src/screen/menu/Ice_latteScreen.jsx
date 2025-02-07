import AppHeader from "../../component/home/header"
import AppFooter from "../../component/home/footer"
import Ice_latte from "../../component/menu/Ice_latte"
import AppMaxIn from "../../component/menu/max_ins"
export default function AppMenuScreen() {
    return (
        <div>
            <header>
                <AppHeader />
            </header>
            <main>
                <Ice_latte/>
                <AppMaxIn/>
            </main>
            <footer>
                <AppFooter />
            </footer>
        </div>
    )
}