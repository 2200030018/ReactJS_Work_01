export default function Button({children,...props}){
    return (
        <>
            <button {...props} className="px-4 py-2 bg-stone-700 md:text-base text-xs text-stone-400 rounded-md hover:bg-stone-600 hover:text-stone-100">{children}</button>
        </>
    );
}