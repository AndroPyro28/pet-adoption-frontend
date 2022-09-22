import { ErrorMessage, Field} from 'formik';
import '../style.css'

type InputProps = {
  values: {
    name: string,
    label?: string,
    className?: string,
    placeholder?: string,
    type: string,
  }
}

function Input({values}: InputProps) {
  const {name, label, placeholder, className='defaultInput',  ...rest} = values;

  return (
    <div className={className}>
      {
        label && <label htmlFor={name}>{label}</label>
      }
      
      <Field id={name} name={name} {...rest} placeholder={placeholder} className="input"  />
      <ErrorMessage component="div" className="error__message" name={name} />
    </div>
  );
}

export default Input;
