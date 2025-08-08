import 'boxicons/css/boxicons.min.css'

const NavButton = ({icon, text}) => {
  return (
    <a href="#" className="relative py-1 text-lg hover:text-purple-300 transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-purple-400 after:left-0 after:bottom-0 after:transition-all hover:after:w-full text-nowrap">
        <i className={icon}></i> {text}
    </a>
  )
}

export default NavButton