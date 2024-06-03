import '@/styles/globals.css';
// import 'mapbox-gl/dist/mapbox-gl.css';
import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata = {
    metadataBase: new URL('https://humankindhealthcare.com/'),
    alternates: {
        canonical: '/',
    },
    title: {
        default: 'Home | Humankind Healthcare',
        template: '%s | Humankind Healthcare',
    },
    description: 'Welcome to Humankind Healthcare: Uniting Ancient Wisdom with Modern Science',
    icons: {
        icon: [
            {
                url: '/assets/icons/favicon-32x32.png',
                type: 'image/png',
                sizes: '32x32',
            },
            {
                url: '/assets/icons/favicon-16x16.png',
                type: 'image/png',
                sizes: '16x16',
            },
        ],
        apple: {
            url: '/assets/icons/apple-touch-icon.png',
            sizes: '180x180',
            type: 'image/png',
        },
        other: [
            {
                rel: 'android-chrome-192x192.png',
                url: '/assets/icons/android-chrome-192x192.png',
                sizes: '192x192',
                type: 'image/png',

            },
            {
                rel: 'android-chrome-512x512.png',
                url: '/assets/icons/android-chrome-512x512.png',
                sizes: '512x512',
                type: 'image/png',
            },
            {
                rel: 'mask-icon',
                url: '/assets/icons/safari-pinned-tab.svg',
                color: '#5bbad5',
            }
        ]
    },
    manifest: '/assets/icons/site.webmanifest',
    ms: {
        tileColor: '#00aba9',
        url: '/assets/icons/mstile-150x150.png',
    },
    twitter: {
        card: 'summary_large_image',
    },
    referrer: 'origin-when-cross-origin',
    keywords: [
        "CloudNet",
        "CloudNet Research Lab",
        "Cloud Computing",
        "Virtual Machines",
        "Live Migration",
        "Fault Tolerance",
        "Cloud Technology",
        "Cloudnet Research Group",
    ],
    openGraph: {
        url: 'https://humankindhealthcare.com/',
    },
    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: true,
        },
    },
    // verification: {
    //     google: "google-site-verification=9Uk9jjmBtqiZEvCuFEVZZcO6CkicECkl5A3HPEBPU7o"
    // },

}

const layout = (props) => {

    const {children} = props;

    return (
        <html lang="en">
        <body>
            <Navbar/>
            {children}
            <Footer/>
        </body>
        </html>
    );

};


export default layout;