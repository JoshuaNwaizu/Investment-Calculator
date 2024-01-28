

function InputFields({ title, inputVal, handleOnChange, isPlaceHolder }) {
    return (
        <p>
            <label> {title} </label>
            <input type="number" required
                value={inputVal}
                placeholder= {isPlaceHolder}
                onChange={handleOnChange} />
        </p>
    )

}

export default InputFields