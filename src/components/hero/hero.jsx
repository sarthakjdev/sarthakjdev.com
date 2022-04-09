import BgShadeBall from "../bgShade"

export default function HeroSection(){
    return (
        <section className="select-none text-white flex flex-col items-center relative">
            <BgShadeBall alignment={'left'}/>
            <div className="flex flex-col items-center ">
            <h1 className="text-center text-3xl m-auto sm:text-lg">Hey I m</h1>
            <h1 className="font-bold text-8xl font-primary md:text-6xl sm:text-2xl text-center"><span>Sarthak</span><span className="outline-text-bold "> Jain</span></h1>
            <div className="whitespace-nowrap overflow-hidden relative block min-w-full h-full">
            <span className="text-6xl my-8 overflow-hidden font-extrabold outline-text whitespace-nowrap inline-block animate-slide pl-40">LEARNER | WEB DEVELOPMENT | FRONTEND | BACKEND | JAVASCRIPT | UI DESIGNING | DISCORD BOT DEVELOPMENT | DEVOPS | SYSTEM DESIGN </span>
            </div>
            </div>
        </section>
    )
}