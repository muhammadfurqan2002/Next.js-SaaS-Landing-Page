import { HTMLAttributes } from "react";
import { twJoin } from "tailwind-merge";

export default function Key(props:HTMLAttributes<HTMLDivElement>){
    const {children,className,...rest} = props
    return <div {...rest}  className={twJoin("size-14 bg-neutral-300 inline-flex items-center justify-center rounded-2xl text-xl text-neutral-950",className)}>
        {children}
    </div>
}