import { HTMLAttributes } from "react";

export default function Tag(props: HTMLAttributes<HTMLDivElement>) {
    const { className, children ,...restProps } = props;
    return <div className={`${className} inline-flex border items-center border-lime-400 gap-2 text-lime-400 px-3 py-1 rounded-full uppercase`} {...restProps}>
        <span>&#10038;</span>
        <span className="text-sm">{children}</span>
    </div>;
}