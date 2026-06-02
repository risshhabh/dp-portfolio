import "../styles/index.css";
import "../styles/Projects.css";
import ProjectCard from "../components/ProjectCard";

const portfolios = [
    {
        title: "Nature Photography",
        subtitle: "Capturing an asymmetrical landscape",
        liveUrl: "/portfolio/nature",
        liveLabel: "View Portfolio",
        imageUrl: "/portfolio/nature-1.jpg",
        column: "left"
    },
    {
        title: "Creation Photography",
        subtitle: "Documenting our creations and their details",
        liveUrl: "/portfolio/city",
        liveLabel: "View Portfolio",
        imageUrl: "/portfolio/city-1.jpg",
        column: "right"
    },
    {
        title: "Portrait Photography",
        subtitle: "Framing people and their stories",
        liveUrl: "/portfolio/portraits",
        liveLabel: "View Portfolio",
        imageUrl: "/portfolio/portrait-1.jpg",
        column: "left"
    },
    {
        title: "This Website",
        subtitle: "Design system and interface work",
        liveUrl: "/portfolio/website",
        liveLabel: "View Subpage",
        column: "right"
    }
];

export default function Projects() {
    const leftColumnPortfolios = portfolios.filter(portfolio => portfolio.column === "left");
    const rightColumnPortfolios = portfolios.filter(portfolio => portfolio.column === "right");

    return (
        <main className="container">
            <h2 className="section-header">Portfolio</h2>
            <p>Choose a collection below to explore full photo series and captions.</p>

            <div className="projects-grid">
                <div className="project-row">
                    <div className="project-column">
                        {leftColumnPortfolios.map((portfolio, index) => (
                            <ProjectCard key={index} {...portfolio} />
                        ))}
                    </div>
                    <div className="project-column">
                        {rightColumnPortfolios.map((portfolio, index) => (
                            <ProjectCard key={index} {...portfolio} />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}