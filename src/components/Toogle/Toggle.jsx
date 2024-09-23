import { useState } from "react";
import { GrMenu } from "react-icons/gr";
import { ImCross } from "react-icons/im";


const Toggle = () => {
    const [open,setOpen]=useState(true)
    return (
      <div>
        <div className="text-5xl" onClick={() => setOpen(!open)}>
          {open === true ? (
            <GrMenu style={{ fontSize: "150px", background:"orange" }}></GrMenu>
          ) : (
            <ImCross style={{ fontSize: "150px",background:"orange" }}></ImCross>
          )}
        </div>
      </div>
    );
};

export default Toggle;
