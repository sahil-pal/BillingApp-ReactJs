export const InputBillBoxWidget = (props) =>{


    const onChangeFn = () =>{
      if(props.handleOnChangeFn){
        props.handleOnChangeFn();
      }
    }

    const generateInputField = (inputType) => {
        if (inputType === "text" || inputType === "number") {
          return <input type={props.inputType} placeholder={props.placeholder} ref={props.inputRef} onChange={onChangeFn} min="1" required/>;
        } else if (inputType === "text-muted") {
          return <input type="text" value={props.value}  disabled />;
        } else if (inputType === "number-muted") {
          return <input type="number" value={props.value} disabled />;
        } else {
          return (
            <select name={props.label} id={props.label} onChange={onChangeFn} ref={props.inputRef} required>
              {
                props.options.map((o,index)=>{
                    return <option key={index} value={o.value}>{o.name}</option>;
                })
              }
            </select>
          );
        }
    };

    return (
        <div className="item-details col space-between">
            <h3>
                {props.label}
            </h3>
            {
                generateInputField(props.inputType)
            }
        </div>
    );

}