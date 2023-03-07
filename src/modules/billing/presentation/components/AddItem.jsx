import { InputBillBoxWidget } from "../widgets/InputBillBoxWidget.jsx";
import { dropDownConstants } from "../../../../config/constants/dropdown_constants.js";
import { CrudButtons } from "../widgets/CrudButtons.jsx";
import { ItemOperations } from "../../domain/repo/item_repo.js";
import { useRef, useState } from "react";
import { object, string, number } from 'yup';
import { Item } from "../../domain/models/Item.js";
import { ItemAction } from "../../redux/action/ItemAction.js";
import ItemStore  from "../../redux/ItemStore";
import { NotificationApi } from "../../../../utils/widgets/Notification.js";

export const AddItem = () =>{

    const [amount,setAmount] = useState(0.00);
    const [taxAmount,setTaxAmount] = useState(0.00);
    const [totalAmount,setTotalAmount] = useState(0.00);

    let itemNameRef = useRef();
    let itemQtyRef = useRef(0);
    let itemUomRef = useRef();
    let itemRateRef = useRef(0.00);
    let itemTaxPercentageRef = useRef(18);

    const itemRateOnChangeFn = ()=>{
      const tempAmount = itemQtyRef.current.value * itemRateRef.current.value;
      setAmount(tempAmount);
    }

    const itemTaxPercentageChangeFn = ()=>{
      const tempTaxAmount = amount * itemTaxPercentageRef.current.value/100;
      const tempTotalAmount = amount + tempTaxAmount;
      setTaxAmount(tempTaxAmount);
      setTotalAmount(tempTotalAmount);
    }

    let itemSchema = object({
      name: string().required(),
      qty: number().required().positive().integer(),
      uom: string().required(),
      rate: number().required().positive().integer(),
    });

    const AddItemFn = async () =>{
      const itemObj = new Item(
        itemNameRef.current.value,
        itemQtyRef.current.value,
        itemUomRef.current.value,
        itemRateRef.current.value,
        amount,
        itemTaxPercentageRef.current.value,
        taxAmount,
        totalAmount
      );
      try{
        const user = await itemSchema.validate(itemObj);
        const action = ItemAction('ADD',user);
        ItemStore.dispatch(action);
        NotificationApi.AddNotification("Item Added Successfully!","success");
      }
      catch(e){
        NotificationApi.AddNotification("Failed To Add Item!","danger");
      }
    }

    return (
      <section>
        <div className="item-add row flex-wrap space-between">
          <InputBillBoxWidget
            label="item name"
            inputType="text"
            placeholder="Cooking Oil"
            inputRef={itemNameRef}
          />
          <InputBillBoxWidget 
            label="qty" 
            inputType="number"
            placeholder="1" 
            inputRef={itemQtyRef}
          />
          <InputBillBoxWidget
            label="unit"
            inputType="select"
            options={dropDownConstants.uomTypes}
            inputRef={itemUomRef}
          />
          <InputBillBoxWidget
            label="rate"
            inputType="number"
            placeholder="0.00"
            handleOnChangeFn={itemRateOnChangeFn}
            inputRef={itemRateRef}
          />
          <InputBillBoxWidget
            label="amount"
            inputType="number-muted"
            value={amount}
          />
          <InputBillBoxWidget
            label="tax type"
            inputType="select"
            options={dropDownConstants.taxPercentages}
            inputRef={itemTaxPercentageRef}
            handleOnChangeFn={itemTaxPercentageChangeFn}
          />
          <InputBillBoxWidget
            label="tax amount"
            inputType="number-muted"
            value={taxAmount}
          />
          <InputBillBoxWidget
            label="total amount"
            inputType="number-muted"
            value={totalAmount}
          />
        </div>
        <div className="crud-btns row space-evenly">
            <CrudButtons title="add item" handleOnClickFn={AddItemFn}/>
            <CrudButtons title="update item" handleOnClickFn={ItemOperations.updateItem}/>
            <CrudButtons title="delete item" handleOnClickFn={ItemOperations.deleteItem}/>
        </div>
      </section>
    );
}