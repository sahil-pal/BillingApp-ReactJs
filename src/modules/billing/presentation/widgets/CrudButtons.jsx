import { Button } from "@mui/material"

export const CrudButtons = (props) =>{
    return (
        <div className="crud-btn">
            <Button variant="outlined" onClick={props.handleOnClickFn}>{props.title}</Button>
        </div>
    );
}