
const StatusBar = ({type, percent}) => {
  return (
    <div className="flex items-center">
        <span className="w-24 text-gray-400">
            {type}
        </span>

        <div className="flex-1 h-4 bg-gray-800 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-violet-600 to-white rounded-full"
                style={{ width: percent }}
            >
            </div>
        </div>

        <span className="w-12 text-gray-400 pl-6">
            {percent}
        </span>
    </div>
  )
}

export default StatusBar