import Loader from "react-loaders";

function Home() {
    return (
        <>
            <div className="absolute left-28 top-1/2 -translate-y-1/2 max-w-max">

                <h1 className="font-head text-7xl font-bold text-primary text-left mb-6 w-max animate-fade1">About me</h1>
                <p className="text-white text-left my-6 font-text min-w-96 w-1/3 animate-fade2">Hello! I'm Blue, a passionate developer with a love for coding and         problem-solving. I have a diverse background in roles such as Site Engineer, Project Coordinator, and Affiliate Marketer, which has equipped me with a unique blend of technical and analytical skills.
                </p>
                <p className="text-white text-left my-6 font-text min-w-96 w-1/3 animate-fade3">
                I recently transitioned into software development, where I specialize in creating dynamic and user-friendly web applications. I thrive on tackling challenges, learning new technologies, and continuously improving my skills. My journey into coding has been driven by a deep curiosity and a desire to build solutions that make a difference.
                </p>
            </div>
            <Loader type="ball-pulse" active/>
        </>
    )
}

export default Home;