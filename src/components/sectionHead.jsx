export default function SectionHead({ sectionName }){
    return (
    <div className="flex items-center">
        <div className="flex flex-col gap-2 mr-1">
            <span className="h-1 w-10 ml-2 bg-secondary rounded-xl"></span>
            <span className="h-1 w-10 ml-1 bg-secondary rounded-xl"></span>
            <span className="h-1 w-10 bg-secondary rounded-xl"></span>
        </div>
        <h1 className="text-white font-secondary uppercase font-bold text-5xl ">{sectionName}</h1>
    </div>
    )
}