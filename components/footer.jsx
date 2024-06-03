"use client";

import {Typography} from "@material-tailwind/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import {usePathname} from "next/navigation";
import Link from "next/link";

import Logo from "@/public/assets/images/HumanKind-Logo-X-White.png";

const Footer = () => {

    const active = usePathname();

    const LINKS = [
        {
            type: "link",
            title: "Ayurveda",
            link: "/ayurveda",
            status: "display",
        },
        {
            type: "link",
            title: "Clinical Trials",
            link: "/clinicaltrials",
            status: "display",
        },
        {
            type: "link",
            title: "CBD / ECS",
            link: "/cbd-ecs",
            status: "display",
        },
        {
            type: "link",
            title: "Clinic",
            link: "/clinic",
            status: "display",
        },
    ];

    const SOCIAL = [
        {
            icon: faLinkedin,
            link: "#",
        }
    ]

    const currentYear = new Date().getFullYear();

    return (
        <footer
            className="relative bottom-0 w-full !text-white bg-primary pt-[3rem] pb-[1.625rem] px-[1rem] lg:px-[120px] font-montserrat">
            <div className={`flex flex-between pb-[3rem] !items-start flex-col gap-[2rem]`}>
                <div
                    className="flex flex-col lg:flex-row gap-[1rem] items-start justify-start lg:justify-between w-full mb-0 lg:mb-[2rem]">
                    <Link href='/' className='flex-start gap-2'>
                        <Image
                            src={Logo}
                            alt='logo'
                            width={80}
                            height={80}
                            className='object-contain max-h-[80px] max-w-[80px]'
                            priority={true}
                        />
                    </Link>
                    <Typography variant={'h2'}
                                className={`text-white text-[1.75rem] font-extrabold font-montserrat text-start`}>Uniting <span
                        className={"text-emerald"}> Ancient Wisdom</span> with <span className={"text-emerald"}> Modern Science</span></Typography>
                </div>

                <div className="flex flex-col lg:flex-row lg:gap-[20rem] w-full">
                    <div
                        className="flex flex-col gap-[0.5rem]">
                        {
                            LINKS.filter(({status}) => status === "display").map(({type, title, link, icon}, key) => (
                                <div key={key}>
                                    <Typography
                                        as="a"
                                        href={link}
                                        className={`font-montserrat text-[0.875rem] transition-colors hover:text-emerald focus:text-secondary cursor-pointer ${active === link ? "text-emerald" : ""} `}
                                    >
                                        {title}
                                    </Typography>
                                </div>
                            ))
                        }
                    </div>
                    <div
                        className="flex flex-col gap-[0.5rem] mt-[0.5rem] lg:mt-0">
                        <div>
                            <Typography
                                as="a"
                                href={"/contact"}
                                className={`font-montserrat text-[0.875rem] transition-colors hover:text-emerald focus:text-secondary cursor-pointer ${active === "/contact" ? "text-emerald" : ""} `}
                            >
                                Contact us
                            </Typography>
                        </div>
                    </div>
                    <div
                        className="flex flex-col gap-[0.5rem] mt-[2rem] lg:mt-0">
                        <Typography variant={'h2'}
                                    className={`text-emerald text-[1rem] font-extrabold font-montserrat text-start`}>Follow
                            us:</Typography>
                        <div className="flex gap-[2rem] text-white">
                            {
                                SOCIAL.map(({icon, link, hover}, key) => (
                                    <Typography as="a" href={link}
                                                className={`transition-opacity hover:opacity-100 hover:text-emerald`}
                                                key={key}>
                                        <FontAwesomeIcon icon={icon} className={"text-[2rem]"} width={"2rem"}/>
                                    </Typography>
                                ))
                            }
                        </div>
                    </div>
                    <div
                        className="flex flex-col gap-[0.5rem] mt-[2rem] lg:mt-0">
                        <Typography variant={'h2'}
                                    className={`text-white text-[1rem] font-extrabold font-montserrat text-start`}>Email us:</Typography>

                    </div>
                </div>
            </div>

            <div
                className="flex-between pt-[2.5rem] flex-row w-full">
                <Typography
                    variant="small"
                    className="text-[1rem] font-montserrat font-normal"
                >
                    &copy; {currentYear} Humankind Healthcare. All
                    Rights Reserved.
                </Typography>
            </div>
        </footer>
    );

};

export default Footer;