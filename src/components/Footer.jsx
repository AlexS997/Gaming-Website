import 'boxicons/css/boxicons.min.css'

const Footer = () => {
  return (
    <footer className='flex items-center justify-between lg:mt-[15%] mt-[25%] py-8 lg:px-32 md:px-16 px-8 border-t-[0.3px] border-[#babaff]'>
        <img src="../src/assets/images/illu-text.png" alt="footerTextImg" 
            className='h-10'
        />

        <img src="../src/assets/images/illu-logo.png" alt="footerLogoImg" 
            className='h-16 md:inline hidden'
        />

        <div className='flex gap-4'>
            <a className='md:text-3xl text-2xl hover:text-violet-600 duration-300'
            href="#">
                <i class='bx bxl-twitter'></i>
            </a>
            <a className='md:text-3xl text-2xl hover:text-violet-600 duration-300'
            href="#">
                <i class='bx bxl-instagram-alt'></i>
            </a>
            <a className='md:text-3xl text-2xl hover:text-violet-600 duration-300'
            href="#">
                <i class='bx bxl-youtube'></i>
            </a>
            <a className='md:text-3xl text-2xl hover:text-violet-600 duration-300'
            href="#">
                <i class='bx bxl-facebook-circle'></i>
            </a>
        </div>
    </footer>
  )
}

export default Footer