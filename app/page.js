import AnimatedText from "@/components/AnimatedText";
import HoverLink from "@/components/Hoverlink";
import TranslucentNavbar from "@/components/TranslucentNavbar";
import { Code2, FolderKanban, GraduationCap, Stars } from "lucide-react";
import Image from "next/image";

export default function Home() {
    return (
        <div>
            <TranslucentNavbar />
            <main className="max-w-5xl mt-5 mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-[350px_600px] gap-12 relative">
                {/* left panel */}
                <aside className="md:sticky md:top-24 self-start h-fit text-center">
                    <h1 className="text-2xl font-serif font-semibold text-gray-900 dark:text-gray-100">
                        <AnimatedText text="Prabhmeet Singh" />
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300 mt-1">
                        <AnimatedText text="Web Developer | Learner" />
                    </p>

                    <div className="flex justify-center mt-4">
                        <Image
                            src="/profile.png"
                            alt="Profile"
                            width={200}
                            height={200}
                            className="w-55 h-55 rounded-full border dark:border-gray-700"
                        />
                    </div>

                    <div className="mt-4 space-x-4 text-sm">
                        <HoverLink href="https://github.com/UG-Prabhmeet">
                            GitHub
                        </HoverLink>
                        <HoverLink href="https://linkedin.com/in/prabhmeet-singh-742189319">
                            LinkedIn
                        </HoverLink>
                    </div>

                    <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                        I’m a final-year student at Netaji Subhas University of
                        Technology (NSUT), <br />
                        currently looking for a role as a Software developer.{" "}
                        <br />
                    </p>
                </aside>

                {/* right panel */}
                <section className="space-y-12">
                    <h1
                        id="home"
                        className="text-2xl font-semibold text-gray-900 dark:text-gray-100"
                    >
                        <AnimatedText text="Portfolio" className="font-serif" />
                    </h1>
                    <div className="flex items-center gap-2 my-6">
                        <div className="flex-1 h-px bg-gray-400 dark:bg-gray-700" />
                    </div>
                    {/* skills section */}
                    <div id="skills">
                        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4 flex items-center gap-2">
                            <Code2 className="w-5 h-5" />
                            <AnimatedText
                                text="Skills & Tools"
                                className="font-serif"
                            />
                        </h2>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-gray-700 dark:text-gray-300">
                            <div>
                                <h3 className="font-semibold text-gray-500 dark:text-gray-400 mb-1">
                                    Front-end
                                </h3>
                                <ul className="space-y-0.5">
                                    <li>HTML/CSS</li>
                                    <li>JavaScript</li>
                                    <li>React / Next.js</li>
                                    <li>Tailwind CSS</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-500 dark:text-gray-400 mb-1">
                                    Back-end
                                </h3>
                                <ul className="space-y-0.5">
                                    <li>Node.js</li>
                                    <li>Express</li>
                                    <li>MySQL / PostgreSQL</li>
                                    <li>Prisma</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-500 dark:text-gray-400 mb-1">
                                    Other
                                </h3>
                                <ul className="space-y-0.5">
                                    <li>C/C++ Programming</li>
                                    <li>Google Colab</li>
                                    <li>VS Code</li>
                                    <li>Postman</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* projects section */}
                    <div id="projects">
                        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4 flex items-center gap-2">
                            <FolderKanban className="w-5 h-5" />
                            <AnimatedText
                                text="Projects"
                                className="font-serif"
                            />
                        </h2>
                        <div className="flex items-center gap-2 my-6">
                            <div className="flex-1 h-px bg-gray-400 dark:bg-gray-700" />
                        </div>
                        <div className="space-y-6">
                            <div>
                                <h3 className="font-semibold text-gray-700 dark:text-gray-200">
                                    <AnimatedText
                                        text="MoneyMap | Finance Tracker App"
                                        className="font-mono text-lg pb-2"
                                    />
                                </h3>
                                <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 mt-1 overflow-x-auto">
                                    <a
                                        href="https://github.com/UG-Prabhmeet/MoneyMap"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            src="https://img.shields.io/badge/GitHub-View%20on%20GitHub-blue?logo=github"
                                            alt="GitHub"
                                        />
                                    </a>
                                    <a
                                        href="https://money-map-livid.vercel.app"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            src="https://img.shields.io/badge/Vercel-Visit%20Site-black?logo=vercel"
                                            alt="Vercel Deployment"
                                        />
                                    </a>
                                </div>
                                <br />
                                <img
                                    src="/moneyMap_dashboard.png"
                                    alt="Dashboard of MoneyMap"
                                />
                                <br />
                                <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1">
                                    <li>
                                        <AnimatedText
                                            text="Developed a secure and scalable finance
                                    tracker using Next JS 15 and Tailwind CSS with
                                    Clerk authentication and Supabase database,
                                    deployed on Vercel."
                                        />
                                    </li>
                                    <li>
                                        <AnimatedText
                                            text="Integrated Google Gemini API to automate
                                    transaction receipt parsing and populate
                                    data accurately."
                                        />
                                    </li>
                                    <li>
                                        <AnimatedText
                                            text="Implemented robust bot protection, rate
                                    limiting, and email validation via Arcjet to
                                    enhance platform security and reliability."
                                        />
                                    </li>
                                    <li>
                                        <AnimatedText
                                            text="Automated transactional and monthly budget
                                    reports with Resend for real-time user
                                    notifications and insights."
                                        />
                                    </li>
                                    <li>
                                        <AnimatedText text="Enabled transaction data export in both CSV and PDF formats for seamless reporting and offline access." />
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-semibold text-gray-700 dark:text-gray-200">
                                    <AnimatedText
                                        text="DashFlow | Project Management App"
                                        className="font-mono text-lg pb-2"
                                    />
                                </h3>
                                <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 mt-1 overflow-x-auto">
                                    <a
                                        href="https://github.com/UG-Prabhmeet/DashFlow"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            src="https://img.shields.io/badge/GitHub-View%20on%20GitHub-blue?logo=github"
                                            alt="GitHub"
                                        />
                                    </a>
                                    <a
                                        href="https://dashflow-one.vercel.app/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            src="https://img.shields.io/badge/Vercel-Visit%20Site-black?logo=vercel"
                                            alt="Vercel Deployment"
                                        />
                                    </a>
                                </div>
                                <br />
                                <Image
                                    src="/dashflow_kanban.png"
                                    alt="kanban board of Dashflow"
                                    width={700}
                                    height={400}
                                    className="rounded-lg"
                                />
                                <br />
                                <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1">
                                    <li>
                                        <AnimatedText
                                            text="Developed a Jira-style project management
                                    platform with Next JS 15 and Tailwind CSS,
                                    featuring an intuitive Kanban Board for real-time task tracking."
                                        />
                                    </li>
                                    <li>
                                        <AnimatedText text="Integrated advanced analytics including monthly spending trends, net worth tracking, budget management, cash flow analysis, and financial health insights to empower smarter decision-making." />
                                    </li>

                                    <li>
                                        <AnimatedText
                                            text="Implemented secure authentication and
                                    multi-organization role based access using Clerk,
                                    enabling collaboration across multiple teams
                                    and projects."
                                        />
                                    </li>
                                    <li>
                                        <AnimatedText
                                            text="Designed a scalable backend with NeonDB to
                                    support dynamic issue management, sprint
                                    planning, and workflow customization."
                                        />
                                    </li>
                                    <li>
                                        <AnimatedText
                                            text="Deployed the application seamlessly via
                                    Vercel, ensuring fast, scalable, and
                                    reliable performance in production."
                                        />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div id="education">
                        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4 flex items-center gap-2">
                            <GraduationCap className="w-5 h-5" />
                            <AnimatedText
                                text="Education"
                                className="font-serif"
                            />
                        </h2>
                        <div className="flex items-center gap-2 my-6">
                            <div className="flex-1 h-px bg-gray-400 dark:bg-gray-700" />
                        </div>

                        <div className="overflow-x-auto">
                            <table className="min-w-full text-sm text-left text-gray-600 dark:text-gray-300">
                                <thead className="text-xs text-gray-500 uppercase border-b dark:text-gray-400 dark:border-gray-700">
                                    <tr>
                                        <th scope="col" className="py-2 px-4">
                                            Course
                                        </th>
                                        <th scope="col" className="py-2 px-4">
                                            Year
                                        </th>
                                        <th scope="col" className="py-2 px-4">
                                            University / School
                                        </th>
                                        <th scope="col" className="py-2 px-4">
                                            CGPA / %
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b dark:border-gray-700">
                                        <td className="py-2 px-4">
                                            B.Tech (MAC)
                                        </td>
                                        <td className="py-2 px-4">
                                            2022 - 2026
                                        </td>
                                        <td className="py-2 px-4">
                                            Netaji Subhas University of
                                            Technology
                                        </td>
                                        <td className="py-2 px-4">7.88</td>
                                    </tr>
                                    <tr className="border-b dark:border-gray-700">
                                        <td className="py-2 px-4">
                                            CBSE (Class XII)
                                        </td>
                                        <td className="py-2 px-4">2022</td>
                                        <td className="py-2 px-4">
                                            Sarvodaya Bal Vidyalaya No.2
                                        </td>
                                        <td className="py-2 px-4">92.8%</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-4">
                                            CBSE (Class X)
                                        </td>
                                        <td className="py-2 px-4">2020</td>
                                        <td className="py-2 px-4">
                                            Sant Nirankari Public School
                                        </td>
                                        <td className="py-2 px-4">95.4%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div id="extras">
                        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4 flex items-center gap-2">
                            <Stars className="w-5 h-5" />
                            <AnimatedText
                                text="Extras"
                                className="font-serif"
                            />
                        </h2>
                        <div className="flex items-center gap-2 my-6">
                            <div className="flex-1 h-px bg-gray-400 dark:bg-gray-700" />
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h3 className="font-semibold text-gray-700 dark:text-gray-200">
                                    <AnimatedText
                                        text="Sentiment Analysis in Apache Spark MLlib"
                                        className="font-mono text-lg pb-2"
                                    />
                                </h3>
                                <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 mt-1 overflow-x-auto">
                                    <a
                                        href="https://github.com/UG-Prabhmeet/Sentiment-Analysis-in-Apache-Spark-MLlib"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            src="https://img.shields.io/badge/GitHub-View%20on%20GitHub-blue?logo=github"
                                            alt="GitHub"
                                        />
                                    </a>
                                    <a
                                        href="https://colab.research.google.com/drive/1p-5NsPaQ8b-EXSGQ4voDgA4pxpcE3V1X#scrollTo=qz8t6SahTZCj"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            src="https://img.shields.io/badge/Colab-Open%20in%20Colab-orange?logo=google-colab"
                                            alt="Google Colab"
                                        />
                                    </a>
                                </div>
                                <br />
                                <img
                                    src="/sentiment_Stats.png"
                                    alt="sentiment analysis stats"
                                />
                                <br />
                                <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1">
                                    <li>
                                        <AnimatedText text="Built a scalable ML pipeline on PySpark using Apache Spark 3.3.2 and Spark MLlib for distributed data processing and classification tasks." />
                                    </li>
                                    <li>
                                        <AnimatedText text="Executed data exploration, cleaning, and label encoding on a Twitter sentiment dataset, filtering irrelevant tweets and preparing data for modeling." />
                                    </li>
                                    <li>
                                        <AnimatedText text="Applied tokenization, stop-word removal, and TF-IDF feature extraction to convert tweet text into meaningful numerical representations." />
                                    </li>
                                    <li>
                                        <AnimatedText text="Trained and evaluated a Logistic Regression model using Spark MLlib, achieving performance insights via accuracy, precision, recall, and F1-score metrics." />
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-semibold text-gray-700 dark:text-gray-200">
                                    <AnimatedText
                                        text="LSTM Temperature Forecast Model"
                                        className="font-mono text-lg pb-2"
                                    />
                                </h3>
                                <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 mt-1 overflow-x-auto">
                                    <a
                                        href="https://github.com/UG-Prabhmeet/LSTM-Temperature-Forecast-Model"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            src="https://img.shields.io/badge/GitHub-View%20on%20GitHub-blue?logo=github"
                                            alt="GitHub"
                                        />
                                    </a>
                                    <a
                                        href="https://colab.research.google.com/drive/1yDKAoo5-jFIvZ_skRQ5npuMdSYPpnyDj#scrollTo=611e76a6-bcea-42ea-ae01-de16b6ee5143"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            src="https://img.shields.io/badge/Colab-Open%20in%20Colab-orange?logo=google-colab"
                                            alt="Google Colab"
                                        />
                                    </a>
                                </div>
                                <br />
                                <img
                                    src="/temperature_prediction .png"
                                    alt="Temperature prediction graph"
                                />
                                <br />
                                <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1">
                                    <li>
                                        <AnimatedText text="Collected and preprocessed hourly weather data for Delhi (2010–2025) by handling anomalies, scaling features, and generating time-series sequences." />
                                    </li>
                                    <li>
                                        <AnimatedText text="Developed a deep learning model using stacked LSTM layers with dropout and dense layers, built with TensorFlow/Keras to learn temporal patterns." />
                                    </li>
                                    <li>
                                        <AnimatedText text="Trained the model over 35 epochs using the Adam optimizer and MSE loss, validated its performance using RMSE, and visualized predictions with Matplotlib." />
                                    </li>
                                    <li>
                                        <AnimatedText text="Saved the trained model as a .h5 file for reuse and outlined future improvements including hyperparameter tuning and integration of additional weather features." />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
