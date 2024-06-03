'use client'

import React from "react";

const mainsection = (props) => {

    const { children } = props;

    return (
        <main className="py-[1rem] lg:py-[0.625rem] overflow-x-clip ">
            {children}
        </main>
    )
}

export default mainsection;