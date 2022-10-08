import BgShadeBall from "../bgShade"
import Button from "../buttons/button"

export default function HeroSection(){
    return (
        <section className="select-none text-white flex flex-col items-center relative w-full mt-8 lg:m-auto h-70vh justify-center">
            <BgShadeBall alignment={'left'}/>
            <div className="flex flex-col items-center w-full">
                <h1 className="text-center text-3xl m-auto sm:text-lg">Hey I m</h1>
                <h1 className="font-bold text-8xl font-primary md:text-6xl sm:text-2xl text-center" id="main-name-head"><span>Sarthak</span><span className="outline-text-bold "> Jain</span></h1>
                <div className=" w-full overflow-hidden">
                    <div className="whitespace-nowrap m-auto overflow-hidden absolute block min-w-full h-full ">
                        <span className="text-6xl my-8 overflow-hidden font-extrabold outline-text whitespace-nowrap inline-block animate-slide h-full pl-full">LEARNER | WEB DEVELOPMENT | FRONTEND | BACKEND | JAVASCRIPT | UI DESIGNING | DISCORD BOT DEVELOPMENT | DEVOPS | SYSTEM DESIGN |  </span>
                    </div>
                    <div className="whitespace-nowrap m-auto overflow-hidden absolute block min-w-full h-full">
                        <span className="text-6xl my-8 overflow-hidden font-extrabold outline-text whitespace-nowrap inline-block animate-slide-delayed pl-full h-full">LEARNER | WEB DEVELOPMENT | FRONTEND | BACKEND | JAVASCRIPT | UI DESIGNING | DISCORD BOT DEVELOPMENT | DEVOPS | SYSTEM DESIGN |  </span>
                    </div>
                </div>
            </div>
        </section>
    )
}