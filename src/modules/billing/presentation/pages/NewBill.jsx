import { AddItem } from "../components/AddItem.jsx";
import { BillDetails } from "../components/BillDetails.jsx";
import { SideBar } from "../components/SideBar.jsx";
import { TopBar } from "../components/TopBar.jsx";
import { ViewItem } from "../components/ViewItem.jsx";


export const NewBill = () =>{
  return (
    <div id="container">
      <header>
        <div className="container">
          <TopBar />
        </div>
      </header>
      <BillDetails />
      <main>
        <div className="container">
            <div className="main col">
               <AddItem/>
               <section>
                    <div className="divison-section row space-between">
                        <ViewItem/>
                        <SideBar/>
                    </div>
               </section>
            </div>
        </div>
      </main>
    </div>
  );
}