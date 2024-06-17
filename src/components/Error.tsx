interface Props{
    error: string;
    handleClose:()=>void;
}

export default function Error({error, handleClose}: Props) {
    return(
        <div className="error-wrapper">
           <div className="error">
           <p>{error}</p>
           <button onClick={handleClose}>Close</button>
           </div>
        </div>
    )
}
