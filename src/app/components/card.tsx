import {ReactNode} from "react";

type CardProps = {
    children?: ReactNode

}

export default function Card(props: CardProps) {
    return (
        <div className="absolute m-10 min-h-[85%] lg:min-h-[60%] xl:min-h-[70%] max-h-fit min-w-[85%]
        lg:min-w-[90%] 2xl:min-w-[70%] bg-amber-50 drop-shadow-2xl shadow-2xl rounded-2xl">
            {props.children}
        </div>
    )
}