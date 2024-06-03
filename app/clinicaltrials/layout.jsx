export const metadata = {
    alternates: {
        canonical: '/clinicaltrials',
    },
    title: "Clinical Trials",
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