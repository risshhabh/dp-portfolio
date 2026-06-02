import { useState } from "react";

export default function PortfolioGallery({ photos }) {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleExpanded = (index) => {
        setExpandedIndex((current) => (current === index ? null : index));
    };

    const handleKeyDown = (event, index) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            toggleExpanded(index);
        }
    };

    return (
        <div className="portfolio-grid">
            {photos.map((photo, index) => {
                const isExpanded = expandedIndex === index;
                return (
                    <figure
                        key={photo.src}
                        className={`portfolio-card${isExpanded ? " portfolio-card-expanded" : ""}`}
                        onClick={() => toggleExpanded(index)}
                        onKeyDown={(event) => handleKeyDown(event, index)}
                        role="button"
                        tabIndex={0}
                        aria-expanded={isExpanded}
                        aria-label={`Toggle view for ${photo.caption}`}
                    >
                        <img src={photo.src} alt={photo.caption} className="portfolio-image" />
                        <figcaption className="portfolio-caption">{photo.caption}</figcaption>
                    </figure>
                );
            })}
        </div>
    );
}
