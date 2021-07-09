import React,{useState} from 'react'

function Filter({ sorts, sorting, filtering, cat}) {

    const [selected, setSelected] = useState("");

    const changeSelectOptionHandler = (event) => {
        setSelected(event.target.value);
    }
    const items = ["earphone", "mobile", "usb", "powerbank"];
    const price = ["all", "low", "high"];

    let type = null;
    let options = null;
    let val = null;
    let change = null;
    

    if (selected === "Items") {
        type = items;
        val = cat ;
        change = filtering ;
        
    }
    else if (selected === 'Price') {
        type = price;
        val = sorts ;
        change = sorting ;
        
    }
    if (type) {
        options = type.map((el) => <option key={el}>{el}</option>);
    }
    return (
        <form className="filter">
            <div className="select_filter">
                <select onChange={changeSelectOptionHandler}>
                    <option>Category</option>
                    <option>Items</option>
                    <option>Price</option>
                </select>
            </div>
            <div className="select_filter">
                <select value={val} onChange={change}>
                    <option>Sub-Category</option>
                    {options}
                    
                </select>
                
            </div>
        </form>
    )
}

export default Filter
