const Label = (props) => {

    const {htmlFor, children} = props;

    return(
        <label htmlFor={htmlFor} className=" text-base text-black font-semibold">
        {children}
        </label>
    )
}

export default Label