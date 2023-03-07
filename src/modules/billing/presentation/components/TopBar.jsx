import { useEffect, useState } from "react";
import { BoxWidget } from "../widgets/BoxWidget";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

export const TopBar = () =>{

    const StoreName = process.env.REACT_APP_STORE_NAME;
    const [DateTime,setCurrDateTime] = useState({});
    useEffect(()=>{
        var date = new Date();
        const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        date = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
        const currDateTime = {date:date,time:time};
        setCurrDateTime(currDateTime);
    },[]);

    return (
      <div className="topbar row space-between">
        <div className="header row space-between align-item-center">
          <div className="logo text-center">
            <Link to="/">{StoreName} General Store</Link>
          </div>
          <div className="page-heading text-center">
            <h1>New Bill</h1>
          </div>
          <div className="row space-between timestamp">
            <BoxWidget title="date of bill" value={DateTime.date} />
            <BoxWidget title="time of bill" value={DateTime.time} />
          </div>
        </div>
        <div className="exit row justify-end">
          <Button variant="outlined" color="error">
            exit
          </Button>
        </div>
      </div>
    );
}