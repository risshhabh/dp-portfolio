import "../styles/index.css";
import "../styles/Portfolio.css";
import PortfolioGallery from "../components/PortfolioGallery";

const photos = [
    { src: "/portfolio/nature-1.jpg", caption: "An explosion of yellow and blue." },
    { src: "/portfolio/nature-2.jpg", caption: "Breaking the serenity with the throw of a rock." },
    { src: "/portfolio/nature-3.jpg", caption: "Angles and birds." },
    { src: "/portfolio/nature-4.jpg", caption: "Rooftops and trees." }
];

export default function PortfolioNature() {
    return (
        <main className="container">
            <header className="page-header">
                <h1 className="intro-header">Nature Light</h1>
            </header>

            <section className="portfolio-intro">
                <h2 className="section-header">Project Overview</h2>
                <p>
                     This portfolio is a compilation of my favorite parts of the natural world. Though irregular, we can often find patterns and symmetry in the way our landscape behaves. By angling the camera, or going to a different place, we can leverage the power of perspective to photograph a scene in a way that gives the viewer a sense of harmony. At the same time, it is important to remember that nature is not perfect, and that some scenes are best represented by embracing asymmetry. So, in this series, I focus on presenting both parts of our world.
                </p>
            </section>

            <section>
                <h2 className="section-header">Photos (click on them to expand!)</h2>
                <PortfolioGallery photos={photos} />
            </section>
        </main>
    );
}
