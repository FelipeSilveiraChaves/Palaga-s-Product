import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
   variant?: 'default' | 'red' | 'dark';
};


export default function Button({children, variant = 'default'} :ButtonProps) {
    const BaseButtonStyleClass = 
        "rounded-r-full rounded-l-full text-[19px] px-4 h-12 flex justify-center items-center outline-4 outline-carbon-0 cursor-pointer"

    const VariantsButtonSyleClass = {
        default: 'bg-carbon-50 text-carbon-800',
        red: 'bg-[#FFC0C0] text-[#FF0000]',
        dark: 'text-carbon-50 bg-carbon-800'

    }


  return (
    <button className={`${BaseButtonStyleClass} ${VariantsButtonSyleClass[variant]}`}>
        {children}
    </button>
  );
}
