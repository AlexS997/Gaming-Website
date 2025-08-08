import {Star} from "lucide-react"

const AvatarCard = ({name, image, stars, isSelected, onSelect}) => {
  return (
    <div className="relative bg-gray-900/70 backdrop-blur-sm rounded-lg p-3 border flex lg:flex-row flex-col justify-between px-12 items-center cursor-pointer transition-all duration-300"
        onClick={onSelect}
    >
        <div className="text-lg mb-2">
            {name}
        </div>

        <div className="w-20 h-20 bg-gray-800/50 rounded-md flex items-center justify-center mb-2">
            <img src={image} alt="CharacterImg" />
        </div>

        <div className="flex">
            {[...Array(stars)].map((_, i) => (
                <Star key={i} 
                    className="w-4 h-4 fill-violet-400 text-violet-500"
                />
            ))}
        </div>

        {isSelected && (
            <div className="absolute inset-0 border-2 rounded-lg pointer-events-none">

            </div>
        )}
    </div>
  )
}

export default AvatarCard