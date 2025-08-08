import { useEffect, useRef, useState } from "react"
import StatusBar from "./StatusBar"
import {motion, AnimatePresence} from "framer-motion"
import Spline from '@splinetool/react-spline'

import AvatarCard from "./AvatarCard"
import Avatar from "./HeroesList"

const CustomCursor = ({isHovering}) => {
    const [position, setPosition] = useState({x: 0, y: 0})
    const cursorRef = useRef(null)

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({x: e.clientX, y: e.clientY})
        }

        document.addEventListener("mousemove", handleMouseMove)

        return() => {
            document.removeEventListener("mousemove", handleMouseMove)
        }
    })

    return (
        <motion.div 
            ref={cursorRef}
            className="fixed top-0 left-0 z-50 pointer-events-none mix-blend-difference"
            animate={{
                x: position.x - (isHovering ? 12 : 15),
                y: position.y - (isHovering ? 12 : 15),
                scale: isHovering ? 1.5 : 1
            }}
            transition={{
                type: "spring",
                stiffness: 500,
                damping: 28,
                mass: 0.5
            }}
        >
            <motion.div 
                className={`rounded-full ${isHovering ? "bg-violet-500" : "bg-white"}`}
                animate={{
                    width: isHovering ? '24px' : '40px',
                    height: isHovering ? '24px' : '40px',
                }}
                transition={{duration: 0.2}}
            />

            {isHovering && (
                <motion.div 
                    className="absolute inset-0 rounded-full bg-transition border border-violet-500"
                    initial = {{ scale: 0.5, opacity: 0}}
                    animate = {{ scale: 2, opacity: 0.5}}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY}}
                />
            )}
        </motion.div>
    )
}

const Characters = () => {

    const [selectedAvatar, setSelectedAvatar] = useState("VIKI")
    const [cursorInArea, setCursorInArea] = useState(false)

    const currentAvatar = Avatar[selectedAvatar]

    const handle3DAreaEnter = () => {
        setCursorInArea(true)
    }

    const handle3DAreaLeave = () => {
        setCursorInArea(false)
    }

  return (
    <section className="relative w-full h-screen overflow-hidden mb-[10%]">

        <CustomCursor isHovering={cursorInArea}/>

        <div className="relative z-10 pt-6 text-center">
            <h1 className="text-5xl font-bold tracking-widest md:-mb-14 mb-8"
                style={{textShadow: "0 0 10px rgba(255,255,255,0.7)"}}
            >
                HEROES
            </h1>
        </div>

        <div className="relative z-10 flex md:flex-row flex-col items-center w-full h-full p-4">

            <div className="w-full md:w-2/4 flex flex-col md:ml-10">
                <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg px-9 py-7 mb-4 border border-gray-800 shadow-[0_0_15px_rgba(167,139,250,0.2)]">

                    <h1 className="text-2xl font-semibold mb-5">
                        {currentAvatar.name}
                    </h1>

                    <div className="space-y-3 mb-10">
                        <StatusBar type={"Power"} percent={`${currentAvatar.power}%`} />
                        <StatusBar type={"Stable"} percent={`${currentAvatar.stable}%`} />
                        <StatusBar type={"Penetrate"} percent={`${currentAvatar.penetrate}%`}/>
                        <StatusBar type={"Portable"} percent={`${currentAvatar.portable}%`}/>
                    </div>

                    <div className="flex gap-4 mb-3">
                        <button className="px-4 py-1 bg-violet-900 text-white rounded-md font-semibold hover:opacity-70 transition-all duration-300 cursor-pointer">
                            Proficient
                        </button>

                        <button className="px-4 py-1 bg-violet-900 text-white rounded-md font-semibold hover:opacity-70 transition-all duration-300 cursor-pointer">
                            Redemption
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    {Object.values(Avatar).map((val, index) => (
                        <AvatarCard key={index} image={val.img} name={val.name} stars={val.stars}
                            onSelect={() => setSelectedAvatar(val.name.toUpperCase())} 
                            isSelected={selectedAvatar === val.name.toUpperCase()}
                        />
                    ))}
                </div>
            </div>
            
            <div className="relative md:w-2/4 w-full md:h-full h-80 flex items-center justify-center overflow-hidden"
                onMouseEnter={handle3DAreaEnter}
                onMouseLeave={handle3DAreaLeave}
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedAvatar}
                        className="absolute inset-0"
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "-100%" }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* <img src={currentAvatar.img} alt="AvatarImg" className="object-contain w-full h-full" /> */}
                        <Spline scene={currentAvatar.spline} />
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    </section>
  )
}

export default Characters