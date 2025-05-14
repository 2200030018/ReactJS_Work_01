import { forwardRef } from "react";
const Input=forwardRef(function Input({lable,textarea, ...props},ref){
    const classes='w-full p-1 border-b-4 rounded-md border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600';
    return(
        <p className="flex flex-col gap-2 my-4">
           <label className="text-sm uppercase font-bold text-stone-500 ">{lable}</label>
           {textarea? <textarea ref={ref} className={classes} {...props}/>:<input ref={ref} className={classes}{...props}/>}
        </p>
    );
})
export default Input;