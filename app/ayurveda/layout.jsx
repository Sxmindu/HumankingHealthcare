export const metadata = {
    alternates: {
        canonical: '/ayurveda',
    },
    title: "Ayurveda",
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