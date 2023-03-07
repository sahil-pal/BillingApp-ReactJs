import { useSelector } from "react-redux"

export const ViewItem = () =>{

    const output = useSelector(state=>state);

    const generateRow = (item,index) =>{
        console.log(item);
        return (
            <tr key={index}>
                <td>{item.name}</td>
                <td>{item.qty}</td>
                <td>{item.uom}</td>
                <td>₹ {item.rate}</td>
                <td>₹ {item.amount}</td>
                <td>{item.taxPercentage} %</td>
                <td>₹ {item.taxAmount}</td>
                <td>₹ {item.totalAmount}</td>
            </tr>
        )
    }

    return (
        <div className="item-view">
            <h3>View Items</h3>
            {
                (output)
                ?
                <table className="text-center">
                    <thead>
                        <td>item name</td>
                        <td>quantity</td>
                        <td>UOM</td>
                        <td>rate</td>
                        <td>amount</td>
                        <td>tax Percentage</td>
                        <td>tax amount</td>
                        <td>total amount</td>
                    </thead>
                    <tbody>
                        {
                            output.allItems.map((item,index)=>{
                                return generateRow(item,index)
                            })
                        }
                    </tbody>
                </table>
                :
                <p>No Item Added</p>
            }
        </div>
    )
}