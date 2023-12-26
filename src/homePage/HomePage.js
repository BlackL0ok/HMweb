import '../static/css/homePage/homePage.scss';
import {Fragment} from "react";
import headerImage from '../static/img/homePage/header2.png';

const classe = {
    'container': 'container',
    'content': 'content',
    'blur': 'blur',
    'centered-div': 'centered-div',
    'mathys': 'mathys',
    'contact-me': 'contact-me',
    'image': 'header-image',
}
export default function homePage() {
    return (<>
            <header className={classe.container}>
                <div className={classe.content}> {/* This will take the first column */}
                    <span className={classe.blur}/>
                    <span className={classe.blur}/>
                    <div className={classe["centered-div"]}>
                        <h1>Hi, I'm <span className={classe.mathys}>Mathys</span></h1>
                        <p>I'm a work-study student in IT at ISEP, an engineering
                            school specialising in IT. During my studies,
                            I'd like to acquire skills in software and web
                            programming. I spent my first year working for
                            Pharma-GDD, which gave me the chance to get to grips
                            with the Symfony framework.</p>
                        <button className="contact-me slide">Contact me</button>
                    </div>
                </div>
                <div className={classe.image}> {/* This will take the second column */}
                    <img src={headerImage} alt="" style={{ width: '25em' }} />
                </div>
            </header>
        </>
    );
}
