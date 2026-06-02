import "../styles/ProjectCard.css";
import { ExternalLink } from 'lucide-react';
import { siGithub } from 'simple-icons';
import { Link } from "react-router-dom";

export default function ProjectCard({ title, subtitle, description, tags = [], githubUrl, liveUrl, imageUrl, liveLabel = "Live Demo" }) {
    const isInternalLink = Boolean(liveUrl && liveUrl.startsWith("/"));
    const isExternalLink = Boolean(liveUrl && !isInternalLink);

    return (
        <div className="project-card">
            { imageUrl &&
            <div className="project-image-container">
                <img src={imageUrl} alt={title} className="project-image" />
            </div>}
            <div className="project-content">
                <h3 className="project-title">{title}</h3>
                {subtitle && <h4 className="project-subtitle">{subtitle}</h4>}
                {subtitle && <div className="rem-gap-03"></div>}
                <p className="project-description">{description}</p>
                {tags.length > 0 && (
                    <div className="project-tags">
                        {tags.map((tag, index) => (
                            <span key={index} className="project-tag">{tag}</span>
                        ))}
                    </div>
                )}
                <div className="project-links">
                    {githubUrl && (
                        <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                            <svg
                                role="img"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="currentColor"
                            >
                                <title>GitHub</title>
                                <path d={siGithub.path} />
                            </svg>
                            <span>Code</span>
                        </a>
                    )}
                    {liveUrl && isInternalLink && (
                        <Link to={liveUrl} className="project-link">
                            <ExternalLink size={20} />
                            <span>{liveLabel}</span>
                        </Link>
                    )}
                    {liveUrl && isExternalLink && (
                        <a
                            href={liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                        >
                            <ExternalLink size={20} />
                            <span>{liveLabel}</span>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
} 