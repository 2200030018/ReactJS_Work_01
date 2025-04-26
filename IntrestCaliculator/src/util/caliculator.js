export function Caliculator({principal, intrestrate,duration}){
    const resultdata=[];
    let currentamt=principal;
    for(let i=1;i<=duration;i++){
        const finalamount=principal*(Math.pow(1+(intrestrate/100.0),i));
        const intrestgot=finalamount-currentamt;
        console.log(finalamount,intrestgot);
        resultdata.push({
            year:i,
            totalpayment:finalamount,
            intrest:intrestgot
        })
        currentamt=finalamount;
    }
    return resultdata;
}

export const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });