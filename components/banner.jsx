import Image from "next/image";

const banner = (props) => {

    let {image, height, textHeight, children} = props;

    if (textHeight === undefined) {
        textHeight = height;
    }


    return (
        <div className={`relative top-0 w-full isolate overflow-hidden bg-primary ${height}`}>
            {
                image === undefined ?
                    null :
                    (
                        <Image
                            src={image}
                            alt="banner"
                            width={1920}
                            height={1080}
                            priority={true}
                            className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center filter brightness-50 opacity-[.4] hue-rotate-15"
                        />
                    )
            }
            <div className={`flex px-[1rem] lg:px-[120px] overflow-x-clip w-full ${textHeight}`}>
                <div className="mx-auto max-w-2xl lg:max-w-full lg:mx-0">
                    <div className={`flex justify-center items-start flex-col gap-[1rem] w-full h-full`}>
                        {children}
                    </div>
                </div>
            </div>

        </div>
    )

}

export default banner;