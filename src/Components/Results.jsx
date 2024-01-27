import { calculateInvestmentResults } from "../util/investment"
import { formatter } from "../util/investment"

function Results({ input }) {

    const calcResult = calculateInvestmentResults(input)
    const initialInvestments =
        calcResult[0].valueEndOfYear
        - calcResult[0].interest
        - calcResult[0].annualInvestment
    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest(year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {calcResult.map(yearData => {
                    const totalInterest = yearData.valueEndOfYear 
                    - yearData.annualInvestment 
                    * yearData.year 
                    - initialInvestments

                    const totalYearInvested = yearData.valueEndOfYear - totalInterest
                    return (
                        <tr key={yearData.year}>
                            <td> {yearData.year}</td>
                            <td> {formatter.format(yearData.valueEndOfYear)}</td>
                            <td> {formatter.format(yearData.interest)}</td>
                            <td> {formatter.format(totalInterest)}</td>
                            <td>{formatter.format(totalYearInvested)}</td>
                        </tr>
                    )

                })}
            </tbody>
        </table>
    )
}

export default Results