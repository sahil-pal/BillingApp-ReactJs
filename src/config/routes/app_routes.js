import { useRoutes } from "react-router-dom";
import { NewBill } from "../../modules/billing/presentation/pages/NewBill";

export const AppRoutes = () =>{
    const allRoutes = useRoutes([
        {
            path : '/homepage',
            element : <NewBill />
        }
    ]);
    return allRoutes;
}