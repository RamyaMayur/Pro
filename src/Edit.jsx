import React, { useState } from "react";
import { useRef } from "react";

export const Edit = () => {

    let utitle = useRef("");
    let [Para, setpara] = useState("")
    const publish = (e) => {
        e.preventDefault();
        let Title = utitle.current.value;

        let Task = { Title, Para }
        fetch(" http://localhost:5000/publish",
            {
                method: "POST",
                headers: { "content-Type": "application/json" },
                body: JSON.stringify(Task)
            })
        window.location.reload();
    }

    return (
        <div className="Editpublish">
            <h1>New Publish</h1>
            <form onSubmit={publish} className="Form">
                <label htmlFor="">Title</label><input type="text" ref={utitle} />
                <label htmlFor="">Description</label><textarea name="description" id="" cols="30" rows="10" value={Para} onChange={(e) => { setpara(e.target.value) }}> Description</textarea>
                <input type="submit" /><label htmlFor="Publish"></label>
            </form>
        </div>
    )
}