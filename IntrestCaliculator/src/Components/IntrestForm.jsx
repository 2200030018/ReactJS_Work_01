import './project.css';


export default function InterestForm({userinput,handlechange}) {
    return (
        <>
            <form>
                <label htmlFor="amount">Principal Ammount</label>
                <input id="amount" type="number" value={userinput.principal} required onChange={(e)=>handlechange('principal',e.target.value)}/><br/>

                <label htmlFor="intrestrate">Rate of Intrest</label>
                <input id="intrestrate" type="number" value={userinput.intrestrate} required onChange={(e)=>handlechange('intrestrate',e.target.value)}/><br/>

                <label htmlFor="duration">Duration</label>
                <input id="duration" type="number" value={userinput.duration} required onChange={(e)=>handlechange('duration',e.target.value)}/><br/>

            </form>
            
        </>

    );
}
