
import {Outlet} from 'react-router-dom';
import MainHeader from "../components/MainHeader";

function RootLayout(){


    //내 하위 컴포넌트가 랜더링될 위치가 Outlet이 된다. 
    return(
        <>
        <MainHeader/>
        <Outlet/>
        </>
    )

}

export default RootLayout;