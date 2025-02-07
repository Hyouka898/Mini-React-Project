import AppHeader from "../../component/home/header";
import AppFooter from "../../component/home/footer";
import { AppDeliveryComponent } from "../../component/delivery/DeliveryComponent";
export default function AppDeliveryScreen() {
    return (
        <div>
            <header>
                <AppHeader />
            </header>
            <main>
                <AppDeliveryComponent />
            </main>
            <footer>
                <AppFooter />
            </footer>

        </div>
    )
}