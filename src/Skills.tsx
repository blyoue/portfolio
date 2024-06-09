import Loader from "react-loaders";
function Skills() {
    return (
        <>
            <div className="flex w-full h-full px-24 py-24 items-center">
                <div className="flex flex-col justify-center items-center w-1/2">
                    <h1 className="font-head text-7xl font-bold text-primary text-left animate-fade1">Skills & Experience</h1>
                    <p className="text-white text-left font-text animate-fade2">I have a strong foundation in web development and programming, with expertise in <b className="text-primary">HTML</b>, <b className="text-primary">CSS</b>, and <b className="text-primary">JavaScript</b> for creating dynamic and responsive web pages. Additionally, I am skilled in <b className="text-primary">TypeScript</b>, <b className="text-primary">Node.js</b>, <b className="text-primary">Vite.js</b>, and <b className="text-primary">React.js</b>, which allow me to build scalable and efficient front-end and back-end applications.</p>
                    <p className="text-white text-left font-text animate-fade3">My experience with <b className="text-primary">Python</b> and <b className="text-primary">SQL</b> further enhances my ability to handle a wide range of programming tasks, from data manipulation to server-side scripting. This diverse skill set enables me to tackle complex projects and continuously deliver high-quality solutions.
                    </p>
                </div>
                <div className="grid w-1/2 grid-cols-3 h-full justify-items-center items-center">
                    <img src="src/assets/JavaScript-logo.png" alt="JS" className="w-32 inline-block" />
                    <img src="src/assets/JavaScript-logo.png" alt="JS" className="w-32 inline-block" />
                    <img src="src/assets/TypeScript-logo.png" alt="TS" className="w-32 inline-block" />
                    <img src="src/assets/TypeScript-logo.png" alt="TS" className="w-32 inline-block" />
                </div>
            </div>

            <Loader type="ball-pulse" active/>
        </> 
    )
}

export default Skills;