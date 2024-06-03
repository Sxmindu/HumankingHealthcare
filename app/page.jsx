'use client';

import Image from "next/image";

import Banner from "@/components/banner";
import Main from "@/components/mainsection";
import Heading from "@/components/heading";
import Sectionbreak from "@/components/sectionbreak";
import Section from "@/components/section";

import HomeBanner from "@/public/assets/images/Home-Banner.png";
import HomeOne from "@/public/assets/images/Home1.jpg";
import HomeTwo from "@/public/assets/images/Home2.jpg";

import {Button, Typography} from "@material-tailwind/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDotCircle, faPlay} from "@fortawesome/free-solid-svg-icons";

const Home = () => {

    const aboutus = [
        {
            head: "Our Mission",
            title: "Empowering Wellness Through Ancient Wisdom and Modern Insights",
            description: "Our mission is to diligently explore and scientifically validate the efficacy of age-old herbal formulations, and to pioneer holistic health solutions that blend these ancient practices with modern science. We are committed to enhancing physical, emotional, and spiritual well-being, making the profound wisdom of Ayurvedic medicine accessible and relevant in today’s world. ",
            last: "Pioneering the Future of Holistic Health"
        },
        {
            head: "Our Vision",
            title: "Inspiring Balanced, Vibrant Living Through Innovation and Education",
            description: "We envision Humankind Healthcare as a leader in holistic health, offering innovative and effective solutions that seamlessly integrate the best of Ayurveda and contemporary science. Our goal is to educate, inspire, and empower individuals to take charge of their health, unlocking the path to balanced and vibrant living.",
            last: "Leading the Way in Holistic Healthcare"
        },
        {
            head: "Our Values",
            title: "Embodying Integrity, Innovation, and Holistic Well-being with a Heart for Sustainability and Compassion",
            description: "At Humankind Healthcare, our values are rooted in integrity, innovation, and holistic well-being, emphasizing personalized care and a commitment to education and empowerment. We prioritize sustainability and ethical practices, ensuring our solutions are eco-friendly and respectful of nature and tradition. Driven by compassion and inclusivity, we strive to provide effective, transformative health solutions for everyone, fostering balanced and vibrant living.",
            last: "The Pillars of Humankind Healthcare"
        }
    ]

    const innovation = [
        {
            title: "Advancing Wellness Through Research and Development",
            description: "We are at the forefront of health science, with a deep commitment to :",
            points: [
                {
                    bold: "Exploring Ancient Wisdom :",
                    normal: "By delving into time-honoured Ayurvedic formulations, we uncover the secrets of the past to enrich the future of health."
                },
                {
                    bold: "Validating with Modern Science :",
                    normal: "Each ancient remedy is rigorously tested and validated using contemporary scientific methods, ensuring that our solutions are both safe and effective."
                }
            ]
        },
        {
            title: "Empowering Individuals Through Education",
            description: "Education is the cornerstone of empowerment. We are dedicated to :",
            points: [
                {
                    bold: "Providing Rich Resources :",
                    normal: "Offering an extensive range of materials to educate and inspire individuals about the benefits of Ayurvedic and CBD-based health practices into their daily lives."
                },
                {
                    bold: "Supporting Health Management :",
                    normal: "Through workshops, webinars, and detailed guides, we equip our community with the knowledge to understand and manage their health effectively."
                }
            ]
        },
    ]

    const products = [
        {
            title: "Innovative Product Range",
            points: [
                {
                    bold: "Ayurvedic OTFs :",
                    normal: "Each product is meticulously crafted, combining high-quality traditional Ayurvedic herbs. Designed to target specific health needs and chakras our products bridge the gap between ancient herbal wisdom and modern cannabinoid science. "
                },
                {
                    bold: "Holistic Benefits :",
                    normal: "From reducing stress and anxiety to enhancing physical recovery and promoting spiritual balance, our products are tailored to improve your overall quality of life. "
                }
            ]
        },
        {
            title: "Personalized Wellness Plans",
            points: [
                {
                    bold: "Tailored to Your Unique Needs :",
                    normal: " Understanding that health is deeply personal, we offer customized wellness plans based on individual health profiles. These plans are carefully designed to harmonize the body, mind, and spirit."
                },
                {
                    bold: "Comprehensive Support :",
                    normal: " Our wellness plans include personalized consultations, ongoing support, and adjustments to ensure optimal results and a harmonious journey to health."
                }
            ]
        },
    ]

    return (
        <>
            <Banner
                height={"h-[100%] lg:h-[60vh]"}
            >
                <div
                    className="flex flex-col xl:flex-row lg:gap-[1rem] justify-center lg:justify-between items-center h-full">
                    <div className="flex flex-col gap-[2rem] mt-[2rem] lg:mt-0 h-full lg:h-auto">
                        <Typography variant={'h1'}
                                    className={`text-emerald text-[2.5rem] xl:text-[4rem] font-extrabold font-montserrat text-start leading-[3.8rem]`}>Welcome
                            to <span className={"text-white"}>Humankind Healthcare</span></Typography>
                        <Typography variant={'h2'}
                                    className={`text-white text-[1.25rem] xl:text-[1.5rem] font-light font-montserrat text-start`}>Uniting
                            Ancient Wisdom with
                            Modern Science</Typography>
                        <Typography
                            as="a"
                            href={"#about"}
                            variant="small"
                            className={`p-0`}
                            data-ripple-light={false}
                            data-ripple-dark={false}
                        >
                            <Button
                                className={"flex justify-between items-center gap-[2rem] bg-emerald hover:bg-secondary transition-colors duration-500 shadow-none hover:shadow-none font-montserrat font-semibold capitalize text-[1.125rem] py-[1rem] px-[1.5rem] w-fit rounded-[29px]"}>
                                Discover More
                                <FontAwesomeIcon icon={faPlay} width={"1.125rem"} className={"text-[1.125rem]"}/>
                            </Button>
                        </Typography>
                    </div>
                    <Image
                        src={HomeBanner}
                        alt='home'
                        width={"100%"}
                        height={671}
                        className='object-contain xl:mt-0 lg:!min-h-full h-full hidden lg:block'
                        loading={"eager"}
                    />
                    <Image
                        src={HomeBanner}
                        alt='home'
                        width={"50%"}
                        className='object-contain xl:mt-0 xl:!min-h-[50%] h-[50%] block lg:hidden'
                        loading={"eager"}
                    />
                </div>
            </Banner>
            <Main>
                <Section id={"about"}>
                    <Heading>About Us</Heading>
                    <Typography variant={'h2'}
                                className={`text-primary text-[1rem] xl:text-[1.125rem] font-normal font-montserrat text-justify`}>
                        At Humankind Healthcare, we are dedicated to blending ancient wisdom with modern scientific
                        discoveries to foster holistic wellness. We delve into the confluence of ancient healing
                        practices and contemporary medical knowledge. Our core philosophy is that true wellness
                        encompasses physical, emotional, and spiritual health. By focusing on the ancient chakra system
                        and integrating Ayurvedic medicine with the therapeutic potentials of cannabinoids, especially
                        CBD, we offer innovative and holistic health solutions by creating innovative solutions for
                        health and well-being.
                    </Typography>
                    <div
                        className={"flex flex-col lg:flex-row justify-between items-center gap-[2rem] lg:gap-[4%] h-full lg:h-[50vh] mt-[2rem]"}>
                        {
                            aboutus.map((item, key) => (
                                    <div key={key}
                                         className={"relative flex flex-col items-center w-full lg:w-[32%] h-full px-[2rem] py-[2.5rem] rounded-[1rem] border border-secondary justify-between gap-[1rem]"}>
                                        <Typography variant={'h2'}
                                                    className={`absolute -top-[1.3rem] left-[2rem] bg-white px-2 font-extrabold font-montserrat text-primary text-[1.5rem] lg:text-[1.75rem] text-center xl:text-start tracking-tight`}>{item.head}</Typography>
                                        <div className={"flex flex-col items-center gap-[1rem]"}>
                                            <Typography variant={'h2'}
                                                        className={`font-extrabold font-montserrat text-primary text-[1.25rem] text-justify tracking-tight`}>{item.title}</Typography>
                                            <Typography variant={'h2'}
                                                        className={`text-primary text-[1rem] xl:text-[1.125rem] font-normal font-montserrat text-justify`}>
                                                {item.description}
                                            </Typography>
                                        </div>
                                        <div>
                                            <Typography variant={'h2'}
                                                        className={`font-extrabold font-montserrat text-primary text-[1.25rem] text-center tracking-tight italic`}>&ldquo; {item.last} &rdquo;</Typography>
                                        </div>
                                    </div>
                                )
                            )
                        }
                    </div>
                </Section>
                <Sectionbreak/>

                <Section classname={"lg:!flex-row !px-0 bg-emerald h-auto lg:h-[60vh]"}>
                    <div className={"flex flex-row flex-start h-full w-[90%] lg:w-[150%]"}>
                        <Image
                            src={HomeOne}
                            alt='home'
                            width={"100%"}
                            height={671}
                            className='object-cover overflow-hidden xl:mt-0 lg:!min-h-full h-full rounded-r-[10rem]'
                        />
                    </div>
                    <div
                        className={"flex flex-col flex-start justify-center h-full px-[1rem] pb-[2rem] lg:p-[5rem] gap-[1rem]"}>
                        <Heading>Recent Developments in <span
                            className={"text-white"}>Cannabis Research</span> and <span
                            className={"text-white"}>Regulation</span></Heading>
                        <Typography variant={'h2'}
                                    className={`font-extrabold font-montserrat text-primary text-[1.25rem] text-justify tracking-tight`}>
                            Acknowledging the Medicinal Value of Cannabis: A Milestone in Healthcare
                        </Typography>
                        <Typography variant={'h2'}
                                    className={`text-primary text-[1rem] xl:text-[1.125rem] font-normal font-montserrat text-justify`}>
                            On January 12, 2024, a landmark decision by the U.S. Department of Health and Human
                            Services (HHS), in agreement with the U.K.’s Chief Medical Officer, confirmed the
                            therapeutic benefits of cannabis-based medications for various debilitating conditions.
                            This pivotal recognition led the U.S. Drug Enforcement Agency (DEA) to reclassify
                            cannabis from Schedule I to Schedule III, marking a significant shift in acknowledging
                            its
                            medicinal properties.
                        </Typography>
                        <Typography
                            as="a"
                            href={"/clinicaltrials"}
                            variant="small"
                            className={`p-0`}
                            data-ripple-light={false}
                            data-ripple-dark={false}
                        >
                            <Button
                                className={"mt-[1rem] flex justify-between items-center gap-[2rem] bg-primary hover:bg-secondary transition-colors duration-500 shadow-none hover:shadow-none font-montserrat font-semibold capitalize text-[1.125rem] py-[1rem] px-[1.5rem] w-fit rounded-[29px]"}>
                                Discover More
                                <FontAwesomeIcon icon={faPlay} width={"1.125rem"} className={"text-[1.125rem]"}/>
                            </Button>
                        </Typography>
                    </div>
                </Section>
                <Sectionbreak/>

                <Section>
                    <Heading>Our Commitment to Innovation and Education</Heading>
                    <Typography variant={'h2'}
                                className={`text-primary text-[1rem] xl:text-[1.125rem] font-normal font-montserrat text-justify`}>
                        At Humankind Healthcare, we are dedicated to nurturing health and wellness by
                        combining groundbreaking research with comprehensive educational strategies. Our
                        approach ensures that every individual has the knowledge and resources they need to
                        lead a balanced and healthy life.
                    </Typography>
                    <div
                        className={"relative flex flex-col lg:flex-row justify-between items-center gap-[2rem] lg:gap-[4%] h-full lg:h-[35vh] mt-[2rem]"}>
                        {
                            innovation.map((item, key) => (
                                    <div key={key}
                                         className={"relative flex flex-col items-center w-full lg:w-[48%] h-full px-[2rem] py-[2.5rem] rounded-[1rem] border border-secondary justify-start gap-[1rem]"}>
                                        <div className={"flex flex-col items-center gap-[1rem]"}>
                                            <Typography variant={'h2'}
                                                        className={`font-extrabold font-montserrat text-primary text-[1.25rem] text-justify tracking-tight`}>{item.title}</Typography>
                                            <Typography variant={'h2'}
                                                        className={`text-primary text-[1rem] xl:text-[1.125rem] font-normal font-montserrat text-justify italic`}>
                                                {item.description}
                                            </Typography>
                                        </div>
                                        <div className={"flex flex-col items-center gap-[1rem]"}>
                                            {
                                                item.points.map((point, key) => (
                                                        <div className={"flex-start gap-[1rem]"} key={key}>
                                                            <FontAwesomeIcon icon={faDotCircle} width={"0.5rem"}/>
                                                            <Typography variant={'h2'}
                                                                        className={`text-primary text-[1rem] xl:text-[1.125rem] font-normal font-montserrat text-justify`}>
                                                                <span
                                                                    className={"font-semibold"}>{point.bold}</span> {point.normal}
                                                            </Typography>
                                                        </div>
                                                    )
                                                )
                                            }
                                        </div>
                                    </div>
                                )
                            )
                        }
                    </div>
                </Section>
                <Sectionbreak/>

                <Section classname={"lg:!flex-row !px-0 bg-emerald h-auto lg:h-[60vh]"}>
                    <div
                        className={"flex flex-col flex-start justify-center h-full px-[1rem] pb-[2rem] lg:p-[5rem] gap-[1rem]"}>
                        <Heading>Cannabis in <span
                            className={"text-white"}>Ayurveda</span> and <span
                            className={"text-white"}>Modern Medicine</span></Heading>
                        <Typography variant={'h2'}
                                    className={`font-extrabold font-montserrat text-primary text-[1.25rem] text-justify tracking-tight`}>
                            From Ancient Remedy to Modern Marvel
                        </Typography>
                        <Typography variant={'h2'}
                                    className={`text-primary text-[1rem] xl:text-[1.125rem] font-normal font-montserrat text-justify`}>
                            Cannabis has been revered in Ayurvedic medicine for over 5,000 years, often hailed as
                            the “Penicillin of Ayurveda” for its extensive therapeutic potential. The discovery of the
                            Endocannabinoid System (ECS) by Dr. Raphael Mechoulam illuminated how cannabis
                            leverages this ancient cellular network to enhance bodily harmony and health. Today,
                            modern science and ancient wisdom converge, highlighting how cannabis and the ECS
                            together support healing and homeostasis, making a profound impact on health and
                            wellness.
                        </Typography>
                        <Typography
                            as="a"
                            href={"/ayurveda"}
                            variant="small"
                            className={`p-0`}
                            data-ripple-light={false}
                            data-ripple-dark={false}
                        >
                            <Button
                                className={"mt-[1rem] flex justify-between items-center gap-[2rem] bg-primary hover:bg-secondary transition-colors duration-500 shadow-none hover:shadow-none font-montserrat font-semibold capitalize text-[1.125rem] py-[1rem] px-[1.5rem] w-fit rounded-[29px]"}>
                                Discover More
                                <FontAwesomeIcon icon={faPlay} width={"1.125rem"} className={"text-[1.125rem]"}/>
                            </Button>
                        </Typography>
                    </div>
                    <div
                        className={"relative -right-[10%] lg:right-0 flex flex-row flex-end h-full w-[100%] lg:w-[150%]"}>
                        <Image
                            src={HomeTwo}
                            alt='home'
                            width={"100%"}
                            height={"100%"}
                            className='object-cover overflow-hidden xl:mt-0 lg:!min-h-full h-full rounded-l-[10rem]'
                        />
                    </div>
                </Section>
                <Sectionbreak/>

                <Section>
                    <Heading>Our Products and Services: Tailored for Holistic Well-being</Heading>
                    <Typography variant={'h2'}
                                className={`text-primary text-[1rem] xl:text-[1.125rem] font-normal font-montserrat text-justify`}>
                        Humankind Healthcare offers a comprehensive array of products and services designed
                        to enhance wellness across every dimension of life.
                    </Typography>
                    <div
                        className={"relative flex flex-col lg:flex-row justify-between items-center gap-[2rem] lg:gap-[4%] h-full lg:h-[35vh] mt-[2rem]"}>
                        {
                            products.map((item, key) => (
                                    <div key={key}
                                         className={"relative flex flex-col items-center w-full lg:w-[48%] h-full px-[2rem] py-[2.5rem] rounded-[1rem] border border-secondary justify-start gap-[1rem]"}>
                                        <div className={"flex flex-col items-center gap-[1rem]"}>
                                            <Typography variant={'h2'}
                                                        className={`font-extrabold font-montserrat text-primary text-[1.25rem] text-justify tracking-tight`}>{item.title}</Typography>
                                            <Typography variant={'h2'}
                                                        className={`text-primary text-[1rem] xl:text-[1.125rem] font-normal font-montserrat text-justify italic`}>
                                                {item.description}
                                            </Typography>
                                        </div>
                                        <div className={"flex flex-col items-center gap-[1rem]"}>
                                            {
                                                item.points.map((point, key) => (
                                                        <div className={"flex-start gap-[1rem]"} key={key}>
                                                            <FontAwesomeIcon icon={faDotCircle} width={"0.5rem"}/>
                                                            <Typography variant={'h2'}
                                                                        className={`text-primary text-[1rem] xl:text-[1.125rem] font-normal font-montserrat text-justify`}>
                                                                <span
                                                                    className={"font-semibold"}>{point.bold}</span> {point.normal}
                                                            </Typography>
                                                        </div>
                                                    )
                                                )
                                            }
                                        </div>
                                    </div>
                                )
                            )
                        }
                    </div>
                </Section>
                <Sectionbreak/>
            </Main>
        </>
    )
}

export default Home;
