import Label from './label'
import Input from './input'

const Inputform = (props) => {

    const {htmlFor, label, type, placeholder, name} = props;

    return(
        <div className='space-y-2'>
        <Label htmlFor={htmlFor}>{label}</Label>
        <Input label={label} type={type} placeholder={placeholder} id={name} name={name}/>
        </div>
    )
}

export default Inputform