
const Form = ({ input, setInput, addTodo }) => {
    return (
        <div>
            <h1 className="title">Plus To-do List</h1>
            <input className="form-input" placeholder="Enter the task" type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <button className="add-button" onClick={addTodo}>Add</button>
        </div>
    )
}

export default Form;