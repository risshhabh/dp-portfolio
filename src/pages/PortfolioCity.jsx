import "../styles/index.css";
import "../styles/Portfolio.css";
import PortfolioGallery from "../components/PortfolioGallery";

const photos = [
    { src: "/portfolio/city-1.jpg", caption: "Chaotic city coordination." },
    { src: "/portfolio/city-2.jpg", caption: "Old school left pristine." },
    { src: "/portfolio/city-3.jpg", caption: "Peaceful campus bench." },
];

export default function PortfolioCity() {
    return (
        <main className="container">
            <header className="page-header">
                <h1 className="intro-header">Creation Photography</h1>
            </header>

            <section className="portfolio-intro">
                <h2 className="section-header">Project Overview</h2>
                <p>
                    In this portfolio, I explore how we encode beauty in our own creations. From the design of our cities to the park benches we sit on, there is a lot of thought and consideration taken to make everything functional while still pleasant to the eyes. It can be easy to overlook the details of our environment, and pass them off as straightforward. However, paying attention to these intricacies really make us appreciate what others have spent time building in, and how we ourselves can contribute to that process. So, I wanted to capture that functional beauty in this series.
                </p>
            </section>

            <section>
                <h2 className="section-header">Photo Set (click on them to expand!)</h2>
                <PortfolioGallery photos={photos} />
            </section>
        </main>
    );
}
