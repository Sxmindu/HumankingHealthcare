export const metadata = {
    alternates: {
        canonical: '/cbd-ecs',
    },
    title: "CBD/ECS",
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