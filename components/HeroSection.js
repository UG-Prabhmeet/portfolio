import React from "react";
import AnimatedText from "./AnimatedText";
import { FiArrowDown, FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
    SiCplusplus,
    SiJavascript,
    SiNextdotjs,
    SiReact,
    SiTailwindcss,
} from "react-icons/si";

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center bg-white px-4 overflow-hidden">
            {/* Floating Tech Logos (using React Icons) */}
            <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 flex gap-6 opacity-90 animate-fade-in">
                <SiCplusplus size={48} />
                <SiJavascript size={48} />
                <SiNextdotjs size={48} />
                <SiReact size={48} />
                <SiTailwindcss size={48} />
            </div>

            {/* Sticky Social Icons */}
            <div className="hidden md:flex flex-col fixed left-4 top-1/2 transform -translate-y-1/2 space-y-4">
                <a href="https://github.com/ug-prabhmeet" target="_blank">
                    <FaGithub
                        size={24}
                        className="text-gray-600 hover:text-black transition"
                    />
                </a>
                <a href="https://linkedin.com/in/ug-prabhmeet" target="_blank">
                    <FaLinkedin
                        size={24}
                        className="text-gray-600 hover:text-blue-700 transition"
                    />
                </a>
                <a href="mailto:hi@prabhmeetsingh.dev">
                    <FiMail
                        size={24}
                        className="text-gray-600 hover:text-red-500 transition"
                    />
                </a>
            </div>

            {/* Name */}
            <h1
                className="flex flex-wrap justify-center gap-4 font-extrabold text-black text-[10vw] leading-tight select-none z-10"
                style={{ letterSpacing: "-0.05em" }}
            >
                <AnimatedText text="prabhmeet" />
                <AnimatedText text="singh" />
            </h1>

            {/* Role */}
            <p className="mt-4 text-base md:text-lg text-gray-600 text-center z-10">
                Aspiring Software Developer
            </p>
            {/* Quick Stats */}
            {/* <div className="mt-6 flex gap-8 z-10">
                <div className="text-center">
                    <p className="text-2xl font-bold">2</p>
                    <p className="text-sm text-gray-500">Resume Projects</p>
                </div>
                <div className="text-center">
                    <p className="text-2xl font-bold">3+</p>
                    <p className="text-sm text-gray-500">ML Projects</p>
                </div>
                <div className="text-center">
                    <p className="text-2xl font-bold">3</p>
                    <p className="text-sm text-gray-500">Languages</p>
                </div>
            </div> */}
            {/* CTAs */}
            <div className="mt-6 flex flex-col sm:flex-row gap-4 z-10">
                <a
                    href="#projects"
                    className="px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition text-center"
                >
                    View Projects
                </a>
                <a
                    href="/resume.pdf"
                    className="px-6 py-3 border-2 border-black text-black font-medium rounded-full hover:bg-black hover:text-white transition text-center"
                >
                    Download Résumé
                </a>
            </div>

            {/* Scroll Down Indicator */}
            <div className="absolute bottom-8 animate-bounce z-10">
                <FiArrowDown size={24} className="text-gray-400" />
            </div>
        </section>
    );
}
