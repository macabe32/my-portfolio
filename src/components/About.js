import React from "react";

export default function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text 3xl mb-4 font-medium text-white">
                        Hi, I'm Macabe.
                        <br className="hidden lg:inline-block" /> I have begun to learn programming w/ react and solidity.
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        I studided philosophy in undergrad while being a student manager for the Men's Basketball team at Auburn University. Co-founded a company during senior year, and then covid hit. Since then, we've shifted focus to building for web3. You can learn more about it. 
                    </p>
                    <div className="flex justify-center">
                        <a 
                        href="#contact"
                        className="ml-4 inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                            I'm on twitter and mirror rn, that's it.
                        </a>
                        <a 
                        href="#projects"
                        className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            See some things I've built. It's like legos really.
                        </a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                    className="object-cover object-center rounded"
                    alt="hero"
                    src="./coding.svg"
                   /> 
                </div>
            </div>
        </section>
    );
}