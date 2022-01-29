import React, { useState } from "react";


export default function Sidebar({ aesc, desc, onFilter }) {

    const [filter, setFilter] = useState(["", ""]);

    const onTypeFilter = (type) => () => {
        let tempFilter = [...filter];
        tempFilter[0] = type;
        setFilter(tempFilter);
        onFilter(tempFilter);
    };

    const onSizeFilter = (size) => () => {
        let tempFilter = [...filter];
        tempFilter[1] = size;
        console.log(tempFilter);
        setFilter(tempFilter);
        onFilter(tempFilter);
    };

    const mystyle = {
        color:"red",
        marginLeft:700
    }
    return (
        <div className="side-container"> 
        <div className = "product-wrapper sidebar" >
        <div className = "side-row" >
        <div className = "col" >
        <h1 style={mystyle}>The Finest Cuisine is close to home</h1>
        <
        h4 > Filter By < /h4> 
        Type < br / >
        <
        label onClick = { onTypeFilter("") }
        htmlFor = "Allt" >
        <
        input type = "radio"
        id = "Allt"
        name = "type"
        defaultChecked = "true" /
        >
        All <
        /label> <
        br / >
        <
        label onClick = { onTypeFilter("veg") }
        htmlFor = "veg" >
        <
        input type = "radio"
        id = "veg"
        name = "type" /
        >
        veg <
        /label> <
        br / >
        <
        label onClick = { onTypeFilter("nonveg") }
        htmlFor = "nonveg" >
        <
        input type = "radio"
        id = "nonveg"
        name = "type" /
        >
        nonveg <
        /label> <
        br / >
        Cuisine < br / >
        <
        label onClick = { onSizeFilter("") }
        htmlFor = "All" >
        <
        input defaultChecked = "true"
        type = "radio"
        id = "All"
        name = "size" /
        >
        All <
        /label> <
        br / >
        <
        label onClick = { onSizeFilter("indian") }
        htmlFor = "indian" >
        <
        input type = "radio"
        id = "indian"
        name = "size" /
        >
        indian <
        /label> <
        br / >
        <
        label onClick = { onSizeFilter("italian") }
        htmlFor = "italian" >
        <
        input type = "radio"
        id = "italian"
        name = "size" /
        >
        italian <
        /label> <
        br / >
        <
        label onClick = { onSizeFilter("japanese") }
        htmlFor = "japanese" >
        <
        input type = "radio"
        id = "japanese"
        name = "size" /
        >
        japanese <
        /label> <
        /div> <
        /div> <
        /div>
        </div>
    );
}