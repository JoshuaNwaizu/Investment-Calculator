

function UserInput({changeFunc, userInput}) {
  
    return (
        <section id="user-input" className="section">
            <div className="input-group">
                <p>
                    <label>Initial investment </label>
                    <input type="number" required
                        value={userInput.initialInvestment}
                        onChange={(event) =>
                            changeFunc('initialInvestment', event.target.value)} />
                </p>
                <p>
                    <label>Annual investment </label>
                    <input type="number" required
                        value={userInput.annualInvestment}
                        onChange={(event) =>
                            changeFunc('annualInvestment', event.target.value)} />
                </p>
            </div>

            <div className="input-group">
                <p>
                    <label>Expected Return </label>
                    <input type="number" required
                        value={userInput.expectedReturn}
                        onChange={(event) =>
                            changeFunc('expectedReturn', event.target.value)} />
                </p>
                <p>
                    <label>Duration </label>
                    <input type="number" required
                        value={userInput.duration}
                        onChange={(event) =>
                            changeFunc('duration', event.target.value)} />
                </p>

            </div>

        </section>
    )
}

export default UserInput