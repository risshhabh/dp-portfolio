import "../styles/index.css";
import "../styles/Portfolio.css";
import PortfolioGallery from "../components/PortfolioGallery";

export default function PortfolioWebsite() {
    return (
        <main className="container">
            <header className="page-header">
                <h1 className="intro-header">This Website</h1>
            </header>

            <section className="portfolio-intro">
                <h2 className="section-header">Project Overview</h2>
                <p>
                    This page is another one of my interests in visual design. I enjoy creating and publishing websites that represent my enjoyment for aesthetic symmetry in web design. I wanted to create a minimalist page that represents consistency and some of the other themes I follow in my photography. One can see the same type of combination of elements like fonts and colors similar to my city photography. I also wanted the design to be reusable and consistent across pages.
                </p>
            </section>

        </main>
    );
}
