import {ReactNode} from "react";

type CardProps = {
    children?: ReactNode

}

export default function Card(props: CardProps) {
    return (
        <div className="absolute m-10 min-h-[50%] max-h-fit min-w-[50%] bg-amber-50 drop-shadow-xl rounded-2xl">
            {props.children}
        </div>
    )
}