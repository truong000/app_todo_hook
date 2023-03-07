import { useState, useEffect } from "react";

export default function Todo(props: any) {

    let classNameLabel = '';
    let nameLabel = '';
    if (props.level == 1) {
        classNameLabel = 'label label-warning';
        nameLabel = 'Medium';
    } else if (props.level == 2) {
        classNameLabel = 'label label-danger';
        nameLabel = 'High';
    } else {
        classNameLabel = 'label label-info';
        nameLabel = 'Low';
    }

    const [isEditing, setEditing] = useState(false);
    const [newName, setNewName] = useState(props.name);
    const [newLevel, setNewLevel] = useState(props.level);

    // useEffect(() =>{
    //     console.log(newName);
    // })

    function handleChangeInputEdit(e: any) {
        setNewName(e.target.value);
    }

    const handleChangeEdit = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setNewLevel(value);
        console.log(value);
    };

    function handleSubmitEdit(e: any) {
        e.preventDefault();
        props.editItem(props.id, newName, newLevel);
        setEditing(false);
        console.log(newName, newLevel);
    }

    function handleClickCancelEdit(e: any) {
        setNewName(props.name);
        setNewLevel(props.level);
        setEditing(false);
        console.log(props.name, props.level);
    }

    const editingTemplate = (
        <><td className="text-center">{props.index}</td>
            <td><input
                id={props.id}
                type="text"
                className="form-control"
                value={newName}
                onChange={handleChangeInputEdit}
            />
            </td>
            <td className="text-center">
                <select
                    id={props.id}
                    className="form-control"
                    value={newLevel}
                    onChange={handleChangeEdit}
                >
                    <option value="0">Low</option>
                    <option value="1">Medium</option>
                    <option value="2">High</option>
                </select>
            </td>
            <td>
                <button
                    type="button"
                    className="btn btn-default btn-sm"
                    onClick={handleClickCancelEdit}
                >
                    Cancel
                </button>
                <button type="button" className="btn btn-success btn-sm" onClick={handleSubmitEdit}>Save</button>
            </td></>
    );
    const viewTemplate = (

        <><td className="text-center">{props.index}</td><td>{props.name}</td><td className="text-center">
            <span className={classNameLabel}>{nameLabel}</span>
        </td><td>
                <button
                    type="button"
                    className="btn btn-warning btn-sm"
                    onClick={() => setEditing(true)}
                >
                    Edit
                </button>
                <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => props.deleteItem(props.id)}
                >
                    Delete
                </button>
            </td></>

    );

    return (
        <tr>{isEditing ? editingTemplate : viewTemplate}</tr>
    )

}