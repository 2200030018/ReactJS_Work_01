import { forwardRef,useRef ,useImperativeHandle} from "react";
import {createPortal} from 'react-dom';
import Button from "./Button.jsx";

const Model=forwardRef(function Model({children,buttonCaption},ref){
    const dialog=useRef();
    useImperativeHandle(ref,()=>{
        return {
            open(){
                dialog.current.showModal();
            }
        }
    })
    return createPortal(
    <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md bg-stone-100">
        {children}
        <form method="dialog" className="mt-4 text-right">
            <Button>{buttonCaption}</Button>
        </form>
    </dialog>, document.getElementById('modal-root'))
});

export default Model;