import React from 'react'
import styles from './ProjectsStyles.module.css'
import heroImg from '../../assets/Jayasheela-maam-image.jpg'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import twitterLight from '../../assets/twitter-light.svg'
import githubLight from '../../assets/github-light.svg'
import linkedInLight from '../../assets/linkedin-light.svg'
import twitterDark from '../../assets/twitter-dark.svg'
import githubDark from '../../assets/github-dark.svg'
import linkedInDark from '../../assets/linkedin-dark.svg'
//import Resume from '../../assets/pruthwik_gowda (5).pdf'
import { useTheme } from '../../Common/ThemeContext'

const Hero = () => {

    const { theme, toggleTheme } = useTheme();


    const themeIcon = theme === 'light' ? sun : moon;
    const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedInIcon = theme === 'light' ? linkedInLight : linkedInDark;

    return (
        <section id="section0" className={styles.container}>
            
            <div className={styles.info}>
                <h2>
                     Education
                </h2>
                {/* <span className={styles.details}> */}
                <div className={styles.subjects}>
                    <p>BE in Instrumention Technology from Bangalore University</p>
                    <p>MTech in Computer Networking from VTU</p>
                    <p>Doctor of Philosophy in Computer Science from VTU</p>
                </div>
                {/* </span> */}
                {/* <p>
                    Seeking opportunities as a Software engineer
                </p> */}
                {/* <a href="https://www.linkedin.com/in/pruthwik-gowda-576926248/" target="_blank">
                        <img src={linkedInIcon} alt="twitter logo" />
                </a> */}
                {/* <a href={Resume} target="_blank" download>
                    <button className='hover'>
                        Resume
                    </button>
                </a> */}
                <br />
                <br />
                <h2>
                     Subjects Taught
                </h2>
                <div className={styles.subjectsTaught}>
    <div className={styles.subjects}>
        <p>1. Logic Design</p>
        <p>2. Microprocessor</p>
        <p>3. Multimedia Computing</p>
        <p>4. Analog and Digital Electronics</p>
        <p>5. Computer Network I</p>
        <p>6. Computer Network II</p>
        <p>7. Data Communication</p>
        <p>8. Advances in Computer Networks</p>
        <p>9. Statistical Switching and Multiplexing</p>
    </div>
    <div className={styles.subjects}>
        <p>10. Computer Network and Security</p>
        <p>11. Constitution of India</p>
        <p>12. Universal Human Values</p>
        <p>13. Scientific Foundation of Health</p>
        <p>14. Software Engineering and Management</p>
    </div>
</div>


            </div>
            
        </section>
    )
}

export default Hero