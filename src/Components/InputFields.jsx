

function InputFields({title, inputVal, handleOnChange }) {
    return (
        <p>
        <label>{title} </label>
        
        <input type="number" required
            value={inputVal}
            onChange={handleOnChange} />
    </p>
    )

}

export default InputFields