export default function ProjectHead({projectName}){
    return (
    <div className="relative items-center text-4xl lg:text-3xl uppercase section-head my-6 md:m-auto sm:text-2xl justify-center h-20 w-full font-extrabold font-secondary inline-flex">
        <h2 className="absolute top-0 left-0 section-head-outlined  text-transparent text-center sm:m-auto right-0 bottom-0">{projectName}</h2>
        <h2 className="absolute top-4 left-4 ssm:top-1 sm:left-1 text-white text-center sm:m-auto right-0 bottom-0">{projectName}</h2>
    </div>
    )
}