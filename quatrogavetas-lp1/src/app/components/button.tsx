import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: 'default' | 'red' | 'dark';
  href: string;
  exeternalButton?: boolean;
};


export default function Button({href, exeternalButton = false, children, variant = 'default'} :ButtonProps) {
    const BaseButtonStyleClass = 
        "rounded-r-full rounded-l-full text-[19px] px-4 h-12 flex justify-center items-center outline-4 outline-carbon-0 cursor-pointer"

    const VariantsButtonSyleClass = {
        default: 'bg-carbon-50 text-carbon-800',
        red: 'bg-[#FFC0C0] text-[#FF0000]',
        dark: 'text-carbon-50 bg-carbon-800'

    }

    const classNames = `${BaseButtonStyleClass} ${VariantsButtonSyleClass[variant]}`

    if(exeternalButton) {
      console.log('botao externo')
      return (
        <a href={href} className={classNames} target={"_blank"}>
          {children}
        </a>
      )
    }

     console.log('botao interno nov')
  return (
    <Link href={href} className={`${BaseButtonStyleClass} ${VariantsButtonSyleClass[variant]}`}>
        {children}
    </Link>
  );
}
