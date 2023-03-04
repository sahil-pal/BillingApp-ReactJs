import { BillDetails } from "../components/BillDetails.jsx";
import { TopBar } from "../components/TopBar.jsx";
export const NewBill = () =>{

    return (
        <div id="container">
            <TopBar/>
            <BillDetails/>            
        </div>
    );
}