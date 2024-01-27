import InputFields from "./InputFields"

function UserInput({ changeFunc, userInput }) {

    return (
        <section id="user-input" className="section">
            <div className="input-group">

                <InputFields title='Initial investment'
                    inputVal={userInput.initialInvestment}
                    handleOnChange={(event) =>
                        changeFunc('initialInvestment', event.target.value)} />

                <InputFields title='Annual investment'
                    inputVal={userInput.annualInvestment}
                    handleOnChange={(event) =>
                        changeFunc('annualInvestment', event.target.value)} />

            </div>

            <div className="input-group">
                <InputFields title='Expected Return'
                    inputVal={userInput.expectedReturn}
                    handleOnChange={(event) =>
                        changeFunc('expectedReturn', event.target.value)} />

                <InputFields title='Duration'
                    inputVal={userInput.duration}
                    handleOnChange={(event) =>
                        changeFunc('duration', event.target.value)} />



            </div>

        </section>
    )
}

export default UserInput