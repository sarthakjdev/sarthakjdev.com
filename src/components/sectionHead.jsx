export default function SectionHead({ sectionName }){
    return (
    <div className="flex items-center lg:justify-center mr-auto md:m-auto w-fit ml-4" data-aos="fade-out" data-aos-duration="1500">
        <div className="flex flex-col gap-2 mr-1">
            <span className="h-1 w-12 ml-2 bg-secondary rounded-xl"></span>
            <span className="h-1 w-12 ml-1 bg-secondary rounded-xl"></span>
            <span className="h-1 w-12 bg-secondary rounded-xl"></span>
        </div>
        <h1 className="text-white font-secondary uppercase font-bold text-5xl sm:text-3xl md:m-auto">{sectionName}</h1>
    </div>
    )
}