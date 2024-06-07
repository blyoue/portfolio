import Loader from "react-loaders";
function Skills() {
    return (
        <>
            <div className="absolute left-28 top-1/2 -translate-y-1/2">
                <h1 className="font-head text-7xl font-bold text-primary text-left mb-6 text-wrap w-1/3 animate-fade1">Skills & Experience</h1>
                <p className="text-white text-left my-6 font-text min-w-96 w-1/3 animate-fade2">I have a strong foundation in web development and programming, with expertise in <b className="text-primary">HTML</b>, <b className="text-primary">CSS</b>, and <b className="text-primary">JavaScript</b> for creating dynamic and responsive web pages. Additionally, I am skilled in <b className="text-primary">TypeScript</b>, <b className="text-primary">Node.js</b>, <b className="text-primary">Vite.js</b>, and <b className="text-primary">React.js</b>, which allow me to build scalable and efficient front-end and back-end applications.</p>
                <p className="text-white text-left my-6 font-text min-w-96 w-1/3 animate-fade3">My experience with <b className="text-primary">Python</b> and <b className="text-primary">SQL</b> further enhances my ability to handle a wide range of programming tasks, from data manipulation to server-side scripting. This diverse skill set enables me to tackle complex projects and continuously deliver high-quality solutions.
                </p>
            </div>
            <div className="absolute right-0 top-1/2 max-w-1/2">
                <h1 className="font-head text-7xl font-bold text-primary text-left mb-6 text-wrap w-1/3 animate-fade1">Skills & Experience</h1>
                <p className="text-white text-left my-6 font-text min-w-96 w-1/3 animate-fade2">I have a strong foundation in web development and programming, with expertise in <b className="text-primary">HTML</b>, <b className="text-primary">CSS</b>, and <b className="text-primary">JavaScript</b> for creating dynamic and responsive web pages. Additionally, I am skilled in <b className="text-primary">TypeScript</b>, <b className="text-primary">Node.js</b>, <b className="text-primary">Vite.js</b>, and <b className="text-primary">React.js</b>, which allow me to build scalable and efficient front-end and back-end applications.</p>
                <p className="text-white text-left my-6 font-text min-w-96 w-1/3 animate-fade3">My experience with <b className="text-primary">Python</b> and <b className="text-primary">SQL</b> further enhances my ability to handle a wide range of programming tasks, from data manipulation to server-side scripting. This diverse skill set enables me to tackle complex projects and continuously deliver high-quality solutions.
                </p>
            </div>
            <Loader type="ball-pulse" active/>
        </> 
    )
}

export default Skills;