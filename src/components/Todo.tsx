import { useState } from "react";

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
    const [name, setName] = useState('');
    const [level, setLevel] = useState<string>();

    function handleSubmit(e: any) {
        e.preventDefault();
        props.addTask(name, level);
        setName("");
        setLevel("0");
    }

    function handleChangeInputEdit(e: any) {
        setName(e.target.value);
    }

    const handleChangeEdit = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setLevel(value);
        console.log(value);
    };

    const editingTemplate = (
        <><td className="text-center">{props.index}</td>
            <td><input
                type="text"
                className="form-control"
                value={props.name}
                onChange={handleChangeInputEdit}
            />
            </td>
            <td className="text-center">
                <select
                    className="form-control"
                    onChange={props.handleChangeForm}
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
                    onClick={() => setEditing(false)}
                >
                    Cancel
                </button>
                <button type="button" className="btn btn-success btn-sm">Save</button>
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


    return <tr>{isEditing ? editingTemplate : viewTemplate}</tr>;

}