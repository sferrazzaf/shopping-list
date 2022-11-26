import { useState } from "react";

const Item = (props) => {
    const [clicked, setClicked] = useState("false");

    const onClickHandler = () => {
        setClicked(!clicked);
    }
    
    return (
        <div 
            onClick={onClickHandler}
            className={clicked ? "clicked item" : "item"}
        >
            {props.name}
        </div>
    )
}

export default Item;