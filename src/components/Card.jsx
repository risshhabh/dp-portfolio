import "../styles/index.css"
import "../styles/Card.css"
import { Microscope, Github, Sprout, Volleyball } from 'lucide-react';

const iconComponents = {
    'Microscope': Microscope,
    'Github': Github,
    'Sprout': Sprout,
    'Volleyball': Volleyball,
};

export default function Card({ title, "lucide-icon": iconName, text }) {
    const IconComponent = iconName ? iconComponents[iconName] : null;
    
    return (
        <div className="card">
            <div className="card-header">
                <div className="icon-container">
                    {IconComponent && <IconComponent />}
                </div>
                <h3>{title}</h3>
            </div>
            <p className="card-text" dangerouslySetInnerHTML={{ __html: text }} />
        </div>
    );
}