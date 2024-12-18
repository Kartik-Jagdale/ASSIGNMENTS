const ErrorMessage = ( {itemes}) =>{

    return <>
        {   itemes.length === 0 && <h3>I am still hungry</h3> }
    </>
};

export default ErrorMessage;