import Header from "~/components/Layout/components/Header";
import SildeBar from "./SideBar";

function DefaultLayout({children}) {
    return ( 
        <div>
            <Header />
            <div className="container">
                <SildeBar />
                <div>
                    <div className="content">
                        {children}
                    </div>
                </div>
            </div>
        </div>
     );
}

export default DefaultLayout;