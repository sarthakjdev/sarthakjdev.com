export default function ProjectHead({projectName}){
    return (
    <div className="relative items-center text-6xl lg:text-4xl  uppercase section-head my-6 md:m-auto sm:text-2xl justify-center h-20  font-extrabold font-primary inline-flex w-full" data-aos="fade-out" data-aos-duration="1500">
        <h2 className="absolute top-0 left-0 section-head-outlined  text-transparent text-center sm:m-auto right-0 bottom-0 w-fit m-auto">{projectName}</h2>
        <h2 className="absolute top-0.5 left-0.5 sm:top-0.5 sm:left-1 text-white text-center sm:m-auto right-0 bottom-0 w-fit m-auto">{projectName}</h2>
    </div>
    )
}