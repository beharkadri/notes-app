import React from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateNoteArea(props){
    const [inputData, setInputData] = React.useState({title: "", content: ""});
    const [isExpanded, setIsExpanded] = React.useState(false);

    function onChangeHandler(event){
        const {name, value} = event.target;
        setInputData(prevValues => ({...prevValues, [name] : value}))
    }

    function expand() {
        setIsExpanded(true);
    }

    return <form className="create-note">
        <input onClick={expand} onChange={onChangeHandler} name="title" type="text" placeholder= {isExpanded ? "Title" : "Take a note..."} value={inputData.title} />
        {isExpanded && (<textarea  onChange={onChangeHandler} name="content" rows="3" placeholder="Take a note..." value={inputData.content}/>)}
        <Zoom in={isExpanded}>
            <Fab onClick={() => {props.onClick(inputData); setInputData({title: "", content: ""});}}>
                <AddIcon />
            </Fab>
        </Zoom>
    </form>
}

export default CreateNoteArea;