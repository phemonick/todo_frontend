import React from 'react';

const Todo = ({ description, id, status, update }) => (
    <div className="row">
        <div className="todo">{description}</div>
        <div>{status}</div>
        {
            status !== 'completed' && 
            (
                <label onClick={() => update(id)} className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                </label>
            )
        }
    </div>
)

export default Todo;
