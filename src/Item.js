import { useState } from "react";

const Item = (props) => {
    const [clicked, setClicked] = useState("false");

    const onClickHandler = () => {
        setClicked(!clicked);
    }
    
    return (
        <div 
            onClick={onClickHandler}
            className={clicked ? "Clicked Item" : "Item"}
        >
            {props.name}
        </div>
    )
}

export default Item;