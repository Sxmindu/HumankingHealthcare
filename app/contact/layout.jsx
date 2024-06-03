export const metadata = {
    alternates: {
        canonical: '/contact',
    },
    title: "Contact",
    openGraph: {
        url: 'https://humankindhealthcare.com/',
        images: [
            {
                url: 'https://humankindhealthcare.com/',
            }
        ]
    },
}

const layout = (props) => {

    const {children} = props;

    return (

        <>
            {children}
        </>
    )


}

export default layout;