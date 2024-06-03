"use client";

import {Button, Collapse, List, ListItem, Typography} from "@material-tailwind/react";
import {Fragment, useEffect, useState} from "react";
import MenuButton from "./menubutton";
import {usePathname} from "next/navigation";

import Image from "next/image";
import Link from "next/link";

const Navbar = () => {

    const active = usePathname();

    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    const NavList = () => {

        const ITEMS = [
            {title: "Ayurveda", link: "/ayurveda", status: "display", type: "single"},
            {title: "Clinical Trials", link: "/clinicaltrials", status: "display", type: "single"},
            {title: "CBD / ECS", link: "cbd-ecs", status: "display", type: "single"},
            {title: "Clinic", link: "clinic", status: "display", type: "single"},
        ];


        return (
            <List
                className={`gap-4 flex-col lg:flex-row lg:gap-[4.25rem] items-end lg:flex-center pb-[1rem] lg:p-2`}>
                {
                    ITEMS.filter(({status}) => status === "display").map((ITEM, key) => (
                        <Typography
                            as="a"
                            href={ITEM.link}
                            variant="small"
                            className={`p-0`}
                            key={key}
                            data-ripple-light={false}
                            data-ripple-dark={false}
                        >
                            <ListItem
                                className={`navLink flex flex-col rounded-none font-montserrat text-[1.3125rem] px-[0.5rem] font-semibold ${active === ITEM.link ? "text-emerald" : "text-primary"} py-0 hover:text-emerald`}
                            >
                                {ITEM.title}
                                <div
                                    className={`navUnderline flex flex-col bg-emerald h-[0.1rem] ${active === ITEM.link ? "w-full" : "w-0"} transition-all duration-500`}/>
                            </ListItem>
                        </Typography>
                    ))
                }
                <Typography
                    as="a"
                    href={"/contact"}
                    variant="small"
                    className={`p-0`}
                    data-ripple-light={false}
                    data-ripple-dark={false}
                >
                    <Button
                        className={"flex justify-between items-center gap-[2rem] bg-emerald shadow-none hover:shadow-none font-montserrat font-semibold capitalize text-[1.125rem] py-[0.5rem] px-[1rem] w-fit rounded-[29px]"}>
                        Contact us
                    </Button>
                </Typography>
            </List>
        );

    }


    return (
        <>
            <nav className="sticky top-0 z-10 bg-white w-full shadow">
                {/* Desktop Navigation */}
                <div className='flex-between py-[1rem] lg:py-[0.625rem] px-[1rem] lg:px-[120px]'>
                    <Link href='/' className='flex-center gap-2'>
                        <div className="hidden lg:block">
                            <Image
                                src={"/assets/images/HumanKind-Logo-X.png"}
                                alt='logo'
                                width={80}
                                height={80}
                                className={`max-w-[80px] max-h-[80px]`}
                                priority={true}
                            />
                        </div>
                        <div className="block lg:hidden">
                            <Image
                                src={"/assets/images/HumanKind-Logo-X.png"}
                                alt='logo'
                                width={50}
                                height={50}
                                className={`max-w-[50px] max-h-[50px]`}
                                priority={true}
                            />
                        </div>
                    </Link>
                    <div className="h-full hidden lg:block">
                        <NavList/>
                    </div>
                    <div className="flex-end w-full lg:hidden">
                        <MenuButton onClick={() => setOpenNav(!openNav)}/>
                    </div>
                </div>

                {/*Mobile Navigation */}
                <Collapse open={openNav} className={`bg-transparent lg:hidden `}>
                    <NavList/>
                </Collapse>
            </nav>
        </>
    );
};

export default Navbar;