import "../styles/index.css"
import "../styles/About.css"

const speakeeg_url = "https://speakeeg.vercel.app"
const vosa_url = "https://vosaglobal.org"

export default function About() {
    return (
        <main className="container">
            <header className="page-header">
                <h1 className="intro-header">Hi, I'm Rishabh Shah.</h1>
            </header>

            <section>
                <h2 className="section-header">About Me</h2>
                <p>I'm Rishabh Shah, a 12th grade student at Mission San Jose High School in Fremont, CA.</p>
                <p>I enjoy nature photography, where I can capture the beauty in asymmetry, and city photography to showcase human creativity. Aside from capturing our creations and new places, I also like to photograph people in the moment.</p>
                <p>I also play and coach tennis, and I like hiking local trails. If given the opportunity, I would love to explore more of the world through my lens.</p>
            </section>

            <section className="resume-section">
                <h2 className="section-header">Resume</h2>
                <p>
                    View or download my resume: <a className="link" href="/RishabhResume.pdf" target="_blank" rel="noreferrer noopener">Resume File</a>
                </p>
                <iframe
                    className="resume-frame"
                    src="/RishabhResume.pdf"
                    title="Rishabh Shah Resume"
                />
            </section>
        </main>
    );
}