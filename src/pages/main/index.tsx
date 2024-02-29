import {FC} from "react";
import Header from "../../components/header";
import {MainVideo} from "../../assets";

const MainPage: FC = () =>{
    return (
        <div>
            <Header/>
            <div style={{height: '100vh', width: '100vw'}}>
                    <img src={MainVideo} style={{height: '100%', width: '100%', objectFit: 'cover'}}/>
            </div>

        </div>
    )
}

export default MainPage
