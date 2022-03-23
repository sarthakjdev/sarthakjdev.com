export default function BgShadeBall({alignment}){
    return (
        <div className={`h-48 w-48 rounded-full bg-bgShade blur-full absolute top-24 ${alignment === 'left' ? 'left-10' : 'right-10'}`}></div>
    )
}