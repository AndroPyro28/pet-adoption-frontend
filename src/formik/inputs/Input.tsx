import { ErrorMessage, Field } from 'formik';
import '../style.css'

type inputType = 'text' | 'file' | 'image' | 'date' | 'datetime-local' | 'time' | 'radio'

interface InputProps {
  values: {
    name: string,
    label?: string,
    className?: string,
    placeholder?: string,
    type?: inputType,
    as?: string,
    options?: { key: string, value: string | number }[]
  }
}

function Input({ values }: InputProps) {
  const { name, label, placeholder, className = 'defaultInput', ...rest } = values;

  return (
    <div className={className}>
      {
        label && <label htmlFor={name}>{label}</label>
      }
      {
        values.as == "select" ? <Field as={values.as} id={name} name={name} {...rest} placeholder={placeholder} className="input">
          {
            values.options != null && values.options.map((option) => {
              return <option key={option.key} value={option.value}>
                {option.key}
              </option>
            })
          }
        </Field> : <Field id={name} name={name} {...rest} placeholder={placeholder} className="input" />
      }
      <ErrorMessage component="div" className="error__message" name={name} />
    </div>
  );
}

export default Input;
