import { DetailedHTMLProps, InputHTMLAttributes, useState } from 'react';

type props = {
  id?: string;
  children: React.ReactNode;
  isChecked?: boolean;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const Checkbox: React.FC<props> = function ({
  id,
  children,
  isChecked = false,
  ...props
}) {
  const [checked, setChecked] = useState(isChecked);
  const onLabelClick = (e) => {
    e.preventDefault();
    setChecked(!checked);
  };
  const onChange = () => {
    setChecked(!checked);
  };
  return (
    <div className="flex flex-row items-center space-x-2">
      <input
        type="checkbox"
        name={id}
        id={id}
        checked={checked}
        onChange={onChange}
        {...props}
        className="form-checkbox text-blue-400 h-6 w-6 rounded border border-gray-300"
      />
      <label
        htmlFor={id}
        onClick={onLabelClick}
        className="select-none"
        // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
        role="button"
        aria-hidden
      >
        {children}
      </label>
    </div>
  );
};

export default Checkbox;
