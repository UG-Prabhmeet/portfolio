import ActionButtons from "@/components/ActionButtons";
import AnimatedText from "@/components/AnimatedText";
import HeroSection from "@/components/HeroSection";
import HoverLink from "@/components/Hoverlink";
import TranslucentNavbar from "@/components/TranslucentNavbar";

export default function Home() {
    return (
        // <HeroSection />
        <main className="max-w-5xl mt-5 mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-[350px_600px] gap-12 relative">
            {/* Sidebar */}

            <TranslucentNavbar />
            <aside className="sticky top-24 self-start h-fit text-center">
                <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                    <AnimatedText text="Prabhmeet Singh" />
                </h1>
                <p className="text-gray-600 dark:text-gray-300 mt-1">
                    <AnimatedText text="Web Developer | Learner" />
                </p>

                {/* Center the image */}
                <div className="flex justify-center mt-4">
                    <img
                        src="/profile.png"
                        alt="Profile"
                        className="w-55 h-55 rounded-full border dark:border-gray-700"
                    />
                </div>

                <div className="mt-4 space-x-4 text-sm">
                    <HoverLink href="#">Resume</HoverLink>
                    <HoverLink href="#">GitHub</HoverLink>
                    <HoverLink href="#">LinkedIn</HoverLink>
                </div>

                <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    I’m currently looking for a role as a developer. <br />
                    Based in New Delhi, India.
                </p>
            </aside>

            {/* Main Content */}
            <section className="space-y-12">
                <h1
                    id="home"
                    className="text-2xl font-semibold text-gray-900 dark:text-gray-100"
                >
                    <AnimatedText text="Portfolio" />
                    <hr
                        style={{ border: "1px solid #ccc", margin: "20px 0" }}
                    />
                </h1>
                {/* Skills Section */}
                <div id="skills">
                    <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                        <AnimatedText text="Skills & Tools" />
                        <hr
                            style={{
                                border: "1px solid #ccc",
                                margin: "20px 0",
                            }}
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
                                <li>CSS-in-JS</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-500 dark:text-gray-400 mb-1">
                                Back-end
                            </h3>
                            <ul className="space-y-0.5">
                                <li>Node.js</li>
                                <li>REST</li>
                                <li>MySQL / PostgreSQL</li>
                                <li>Prisma</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-500 dark:text-gray-400 mb-1">
                                Other
                            </h3>
                            <ul className="space-y-0.5">
                                <li>Vercel / AWS</li>
                                <li>Jest Testing</li>
                                <li>Zapier / Airtable</li>
                                <li>Scrum / Kanban</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Projects Section */}
                <div id="projects">
                    <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                        <AnimatedText text="Projects" />
                        <hr
                            style={{
                                border: "1px solid #ccc",
                                margin: "20px 0",
                            }}
                        />
                    </h2>

                    <div className="space-y-6">
                        <div>
                            <h3 className="font-semibold text-gray-700 dark:text-gray-200">
                                <AnimatedText text="MoneyMap" />
                            </h3>
                            <div className="flex items-center gap-2 mt-1">
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
                            <img src="/moneymap.png" alt="moneymap" />
                            <br />
                            <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1">
                                <li>
                                    <AnimatedText
                                        text="Developed a secure and scalable finance
                                    tracker using Next.js and Tailwind CSS with
                                    Clerk authentication and Supabase database;
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
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-700 dark:text-gray-200">
                                <AnimatedText text="DashFlow" />
                            </h3>
                            <div className="flex items-center gap-2 mt-1">
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
                            <img src="/dashflow.png" alt="dashflow" />
                            <br />
                            <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1">
                                <li>
                                    <AnimatedText
                                        text="Developed a Jira-style project management
                                    platform with Next.js and Tailwind CSS,
                                    featuring an intuitive drag-and-drop issue
                                    board for real-time task tracking."
                                    />
                                </li>
                                <li>
                                    <AnimatedText
                                        text="Implemented secure authentication and
                                    multi-organization access using Clerk,
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
                    <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                        <AnimatedText text="Education" />
                        <hr
                            style={{
                                border: "1px solid #ccc",
                                margin: "20px 0",
                            }}
                        />
                    </h2>
                    {/* Your education content here */}
                </div>

                <div id="extras">
                    <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                        <AnimatedText text="Extras" />
                        <hr
                            style={{
                                border: "1px solid #ccc",
                                margin: "20px 0",
                            }}
                        />
                    </h2>
                    {/* Your extra section content here */}
                </div>
            </section>
        </main>
    );
}
