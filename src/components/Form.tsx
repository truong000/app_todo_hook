import React, {useState} from "react";

function Form(props: any) {

    const [name, setName] = useState('');
    const [level, setLevel] = useState<string>();

    function handleSubmit(e: any) {
        e.preventDefault();
        props.addTask(name, level);
        setName("");
        setLevel("0");
    }

    function handleChangeInput(e:any) {
        setName(e.target.value);
    }

    const handleChangeForm = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setLevel(value);
        console.log(value);
    };

    function handleFormClickCancel(){
        setName('');
        setLevel("0");
    }

    return (
        <form onSubmit={handleSubmit} className="form-inline">
        <div className="form-group">
            <input 
                type="text" 
                className="form-control" 
                placeholder="Item Name"
                value={name}
                onChange={handleChangeInput}
            />    
        </div>
        <div className="form-group">
            <select 
                value={level}
                className="form-control"
                onChange={handleChangeForm}
                >
                    <option value="0">Low</option>
                    <option value="1">Medium</option>
                    <option value="2">High</option>
            </select>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        <button type="button" className="btn btn-default" onClick={handleFormClickCancel}>Cancel</button>
    </form>
    )

}

export default Form;