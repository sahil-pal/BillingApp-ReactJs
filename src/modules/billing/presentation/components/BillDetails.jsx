import { dropDownConstants } from "../../../../config/constants/dropdown_constants";
import { InputBoxWidget } from "../widgets/InputBoxWidget";

export const BillDetails = () => {
  return (
    <div className="container">
      <div className="bill-details row space-between">
        <InputBoxWidget label="Bill Number" inputType="text-muted" value="1" />
        <InputBoxWidget
          label="Payment Options"
          inputType="select"
          options={dropDownConstants.paymentOptions}
        />
        <InputBoxWidget
          label="Mobile Number"
          inputType="text"
          placeholder="Customer Mobile Number"
        />
      </div>
    </div>
  );
};
