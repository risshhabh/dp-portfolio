import "../styles/index.css";
import "../styles/Portfolio.css";
import PortfolioGallery from "../components/PortfolioGallery";

const photos = [
    { src: "/portfolio/portrait-1.jpg", caption: "Snapshot." },
    { src: "/portfolio/portrait-2.jpg", caption: "Viridescent matrix." },
    { src: "/portfolio/portrait-3.jpg", caption: "Platon-inspired scene." },
    { src: "/portfolio/portrait-4.jpg", caption: "An apple in a scene of yellow." }
];

export default function PortfolioPortrait() {
    return (
        <main className="container">
            <header className="page-header">
                <h1 className="intro-header">Portrait Photography</h1>
            </header>

            <section className="portfolio-intro">
                <h2 className="section-header">Project Overview</h2>
                <p>
                    Portrait photography is another one of my interests, where I get to capture the symmetry and asymmetry of people and their stories. I enjoy using framing and perspective to capture people in motion. In my photos, one can see one element centered or cleanly standing out for its perfections, whereas the rest of the photo revolves around it with more chaotic proportion. I also enjoy using the natural envionment to frame people like this. The viewer of my photos should get to see a clean beauty of people and centerpiece objects, while also getting a sense of the world around them.
                </p>
            </section>

            <section>
                <h2 className="section-header">Photo Set (click on them to expand!)</h2>
                <PortfolioGallery photos={photos} />
            </section>
        </main>
    );
}
