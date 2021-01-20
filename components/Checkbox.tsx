import { DetailedHTMLProps, InputHTMLAttributes, useState } from "react";

export default function Checkbox({
  id,
  children,
  isChecked = false,
  ...props
}: {
  id?: string;
  children: React.ReactNode;
  isChecked?: boolean;
} & DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>) {
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
      <label htmlFor={id} onClick={onLabelClick} className="select-none">
        {children}
      </label>
    </div>
  );
}
