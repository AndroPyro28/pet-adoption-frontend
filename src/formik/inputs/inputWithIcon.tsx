import { ErrorMessage, Field} from 'formik';
import '../style.css'

type InputProps = {
  values: {
    name: string,
    className?: string,
    placeholder?: string,
    type: string,
    icon: string,
  }
}

function InputWithIcon({values}: InputProps) {

  const {name, icon, placeholder, className='defaultInput',  ...rest} = values;
  return (
    <section className={className}>
        <div>
            <i className={icon}></i>
            <Field id={name} name={name} {...rest} placeholder={placeholder} className="input"  />
        </div>
        <ErrorMessage component="p" className="error__message" name={name} />
    </section>
  );
}

export default InputWithIcon;
