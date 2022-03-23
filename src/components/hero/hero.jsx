import BgShadeBall from "../bgShade"

export default function HeroSection(){
    return (
        <section className="select-none text-white flex flex-col items-center relative">
            <BgShadeBall alignment={'left'}/>
            <div className="flex flex-col items-center ">
            <h1 className="text-center text-3xl m-auto sm:text-lg">Hey I m</h1>
            <h1 className="font-bold text-8xl font-primary uppercase md:text-6xl sm:text-4xl text-center"><span>Sarthak</span><span className="outline-text-bold "> Jain</span></h1>
            <p className="text-4xl my-6 font-extrabold outline-text">LEARNER | WEB DEVELOPMENT | FRONTEND | BACKEND | JAVASCRIPT | UI DESIGNING | DISOCRD BOT DEVELOPMENT | DEVOPS | SYSTEM DESIGN </p>
            </div>
        </section>
    )
}