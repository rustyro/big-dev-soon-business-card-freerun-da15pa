import React from "react";
import Card from "@/app/components/card";
import {
    AWSIcon,
    DockerIcon,
    EmailIcon, ExpressIcon, FlaskIcon,
    GitHubIcon, JSIcon, K8sIcon,
    LinkedInIcon, NextIcon, NodeIcon,
    PhoneIcon, PostgresIcon,
    PythonAnimatedIcon,
    PythonIcon, ReactIcon, RedisIcon, TSIcon,
    TwitterIcon
} from "../../assets/icons/collection";
import Image from "next/image";
type TechType = [React.FC, string][]
// type TechType = TechTuple[]

const techs: TechType = [
    [PythonIcon, "Python"],
    [FlaskIcon, "Flask"],
    [TSIcon, "TypeScript"],
    [ReactIcon, "Reactjs"],
    [NextIcon, "Nextjs"],
    [NodeIcon, "Nodejs"],
    [ExpressIcon, "Expressjs"],
    [PostgresIcon, "Postgres"],
    [RedisIcon, "Redis"],
    [DockerIcon, "Docker"],
    [K8sIcon, "Kubernetes"],
    [AWSIcon, "AWS"],
]

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
                {icon ? icon({}) : null}
                <div>{title}</div>
            </div>
            <div className="font-bold text-gray-200 text-xs">{desc}</div>
            <div className="flex flex-row gap-3">
                {socials ?
                    socials.map((icon, idx) =>
                        <a href={icon[1]} key={idx} target="_blank">{icon[0]({})}</a>) :
                    null
                }
            </div>
        </div>
    )
}

export default function Home() {
    return (
        <>
            <div className="flex justify-center items-center w-screen h-screen bg-amber-100 p-10">
                <Card>
                    <div className="flex flex-col lg:flex-row" data-testid="business-card-container">
                        <div className='flex flex-row min-h-[180px] lg:flex-col basis-1/3 lg:min-h-[555px] xl:min-h-[655px]' data-testid="contact-section">
                            <div className="relative min-h-fit basis-2/3 bg-amber-800 p-6 m-0 rounded-tl-2xl border-r-8 lg:border-r-0
                        border-r-amber-200 lg:rounded-tl-2xl lg:border-b-8
                        lg:border-b-amber-200">
                                <div className="absolute lg:bottom-6 space-y-3 lg:space-y-5">
                                    <ContactContent icon={EmailIcon} title="Email" desc="akins.rotola@gmail.com"/>
                                    <ContactContent icon={PhoneIcon} title="Phone" desc="+1 (416) 848 6958 "/>
                                </div>
                            </div>
                            <div className="h-max min-h-[180px] basis-1/3 bg-amber-800 p-6 m-0 rounded-tr-2xl lg:rounded-tr-none
                            border-l-1 border-l-amber-200 lg:rounded-bl-2xl
                            lg:border-t-8 lg:border-t-amber-200">
                                <ContactContent title="Find me on"
                                                socials={
                                                    [[LinkedInIcon, "https://www.linkedin.com/in/rotolaakinsowon/"],
                                                        [GitHubIcon, "https://github.com/rustyro"],
                                                        [TwitterIcon, "https://twitter.com/Rusty_x_"]]}/>
                            </div>
                        </div>
                        <div className="flex basis-2/3">
                            <div className="flex flex-col items-center lg:items-start lg:flex-row absolute top-28
                            lg:top-0 lg:left-56 xl:left-56 lg:h-[555px] xl:h-[655px]">
                                <Image src="/images/headShot.jpeg"
                                       alt="User Photo"
                                       className="h-1/5 w-24 lg:h-[70%] lg:w-72 xl:h-4/5 xl:w-96 m-4 lg:m-10 rounded-full lg:rounded-3xl shadow-lg"
                                       width={400}
                                       height={400}
                                       priority/>

                                <div className="flex flex-col text-black px-4 lg:my-10 lg:pt-20 lg:pr-10 lg:pl-0 space-y-3 lg:space-y-6 space-x-2 lg:space-x-0" data-testid="details-section">
                                    <section className="flex justify-center text-2xl lg:text-4xl font-bold
                                    lg:space-y-2 space-x-2 lg:space-x-0 lg:flex-col lg:justify-start" data-testid="name-section">
                                        <h5 className="text-amber-700">Rotola</h5>
                                        <h5>Akinsowon</h5>
                                    </section>
                                    <section className="space-y-3 text-sm" data-testid="pro-statement">
                                        <div className="flex gap-3 items-center font-bold">
                                            <h1 data-testid="pro-title">Senior Software Engineer</h1>
                                            <h1>.</h1>
                                            <h1 data-testid="pro-location">Toronto, ON, Canada</h1>
                                        </div>
                                        <p className="">
                                            Passionate about developing innovative and scalable solutions that leverage
                                            cutting-edge technologies and data insights. A fullstack software engineer with a
                                            backend focus who loves not only building software but also contributing to business development
                                        </p>
                                    </section>
                                    <section data-testid="pro-skills" className="space-y-3 text-sm">
                                        <div className="flex gap-3 items-center font-bold">
                                            Technology Tools
                                        </div>
                                        <div className="grid grid-cols-3 gap-3 ">
                                            {techs.map((icon, tKey) => {
                                                return <div className="flex items-center gap-1" key={tKey}>
                                                    <div className="">{icon[0]({width: 20, height: 20})}</div>
                                                    {/*{icon[0]({})}*/}
                                                    <h1>{icon[1]}</h1>
                                                </div>
                                            })}
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </>
    )
}