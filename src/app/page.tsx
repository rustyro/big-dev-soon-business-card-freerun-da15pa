import React from "react";
import Card from "@/app/components/card";
import {EmailIcon, GitHubIcon, LinkedInIcon, TwitterIcon} from "../../assets/icons/collection";

type CCProps = {
    icon?: React.FC
    title: string
    desc?: string
    socials?: Array<Array<any>>
}

const ContactContent = ({icon, title, desc, socials}: CCProps) => {
    return (
        <div className="flex flex-col grid-cols-4 space-y-2">
            <div className="flex gap-2 flex-row font-light items-center text-sm">
                {icon ? icon({}): null}
                <div>{title}</div>
            </div>
            <div className="font-bold text-gray-200 text-sm">{desc}</div>
            <div className="flex flex-row gap-3">
            {socials?
                socials.map((icon, idx) =>
                    <a href={icon[1]} key={idx} target="_blank">{icon[0]({})}</a>):
                null
            }
                </div>
        </div>
    )
}

export default function Home() {
    return (
        <>
            <div className="flex justify-center items-center w-screen h-screen bg-amber-500 p-10">
                <Card>
                    <div className="flex flex-row">
                        <div className='flex flex-col basis-1/3 min-h-[475px]'>
                            <div className="relative min-h-fit basis-2/3 bg-amber-800 p-6 m-0 rounded-tl-2xl border-b-8
                        border-b-amber-200">
                                <div className="absolute bottom-6 space-y-5">
                                    <ContactContent icon={EmailIcon} title="Email" desc="akins.rotola@gmail.com"/>
                                    <ContactContent icon={EmailIcon} title="Phone" desc="+1 (416) 848 6958 "/>
                                </div>
                            </div>
                            <div className="h-max basis-1/3 bg-amber-800 p-6 m-0 rounded-bl-2xl
                            border-t-8 border-t-amber-200">
                                <ContactContent title="Find me on"
                                                socials={
                                    [[LinkedInIcon, "https://www.linkedin.com/in/rotolaakinsowon/"],
                                        [GitHubIcon, "https://github.com/rustyro"],
                                        [TwitterIcon, "https://twitter.com/Rusty_x_"]]}/>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </>
    )
}