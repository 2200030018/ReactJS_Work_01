import { Caliculator, formatter } from "../util/caliculator"

export default function Result({userinput}){
    const resultdata=Caliculator(userinput);
    return (
    <>
        <h1>Compound Interest Formula: &nbsp; A = P × (1 + r/100)<sup>n</sup></h1>

        <table>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Amount to pay (end of the year)</th>
                    <th>Intrest of that year</th>
                </tr>
            </thead>
            <tbody>
                {resultdata.map( (yeardata)=>{
                    return (
                        <tr key={yeardata.year}>
                            <td>{yeardata.year}</td>
                            <td>{formatter.format(yeardata.totalpayment)}</td>
                            <td>{formatter.format(yeardata.intrest)}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    </>

        
    );
}