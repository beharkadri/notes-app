import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function Note(props){

    const [isToggled, setIsToggled] = React.useState(false);


    function toggle(){
        setIsToggled(!isToggled);
    }


    return <> 
            <div className="noteContainer" tabindex="0"><div className= "note" style={(parseInt(props.id+1)%5===0) ? {margin: "16px 0 16px 16px"} : {margin: "16px"}}>
                <h1 onClick={toggle}>{props.title}</h1>
                <p onClick={toggle}>{props.content.length > 100 ? props.content.substring(0,97).concat("...") : props.content}</p>
                <button onClick={() => props.onClickDelete(props.id)}><DeleteIcon /></button>
            </div>
            </div> {isToggled && <div className="modalBg" onClick={toggle}><div className= "note" style={{position:"fixed", top:"10vh", right:"20%", zIndex: "2", width: "60%", maxHeight : "60vh", overflowY : "auto" }}>
                <h1>{props.title}</h1>
                <p>{props.content}</p>
                <button onClick={() => props.onClickDelete(props.id)}><DeleteIcon /></button>
            </div>
        </div>}
    </>
}

export default Note;