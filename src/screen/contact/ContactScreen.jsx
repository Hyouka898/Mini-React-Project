import React from "react"
import AppHeader from '../../component/home/header';
import AppFooter from '../../component/home/footer';
import AppQuestionCmm from "../../component/contact/question_cmm";
import AppLocation from "../../component/contact/location";
const AppContact =()=> {
    return (
        <div>
            <header>
                <AppHeader/>
            </header>
            <main>
                <AppQuestionCmm/>
                <AppLocation/>
            </main>
            <footer>
                <AppFooter/>
                
            </footer>
        </div>
    )
}
export default AppContact;