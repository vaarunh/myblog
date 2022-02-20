import React from "react";
import image from "../home-bg.jpg";

export default function Home(){
    return(
        <main>
            <img src={image} className="absolute object-cover w-full h-full flex-gro" />
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-white font-bold cursive leading-none lg:leading-snug">
                    Bonjour! Welcome to my Blog.
                </h1>
            </section>
        </main>
    )
}