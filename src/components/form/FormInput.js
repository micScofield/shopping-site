import React from 'react';

import 'components/form/form-input.styles.scss';

function FormInput({
  id,
  type,
  invalid=false,
  touched=false,
  value,
  onChange,
  placeholder,
  label,
}) {
  return (
    <div className='group'>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e, id)}
        className={`form-input ${invalid && touched ? 'invalid' : ''}`}
      />
      {label && <label className='form-input-label'>{label}</label>}
    </div>
  );
}

export default FormInput;
