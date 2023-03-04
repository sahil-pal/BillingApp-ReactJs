export const InputBoxWidget = (props) => {
  const generateInputField = (inputType) => {
    if (inputType === "text" || inputType === "number") {
      return <input type={props.inputType} placeholder={props.placeholder}  required/>;
    } else if (inputType === "text-muted") {
      return <input type={props.inputType} value={props.value} disabled />;
    } else {
      return (
        <select name={props.label} id={props.label} required>
          {
            props.options.map((o)=>{
                return <option value={o.value}>{o.name}</option>;
            })
          }
        </select>
      );
    }
  };

  return (
    <div className="input-box row space-between">
      <label>
        {props.label} &nbsp;
        {generateInputField(props.inputType)}
      </label>
    </div>
  );
};
