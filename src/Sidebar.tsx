import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard } from '@fortawesome/free-regular-svg-icons';
import { faLinkedin,faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from 'react-router-dom';
function Sidebar() {
    return (
        <div className="w-15 min-w-[60px] h-full bg-side flex flex-col justify-center items-center relative">
            <nav className='flex flex-col'>
                <NavLink to='/' className='relative group my-3'>
                    {({ isActive }) => (
                        <>
                            <FontAwesomeIcon
                                icon={faHouse}
                                className={`h-5 transition-all ease-out duration-300 group-hover:opacity-0 ${isActive ? 'text-primary' : 'text-zinc-600'}`}
                            />
                            <span className='absolute inset-0 text-xs uppercase font-nav flex items-center justify-center text-center group-hover:opacity-100 opacity-0 transition-all ease-out text-primary duration-300'>home</span>
                        </>
                    )}
                </NavLink>
                <NavLink to='/skills' className='relative group my-3'>
                    {({ isActive }) => (
                        <>
                            <FontAwesomeIcon 
                                icon={faUserTie} 
                                className={`${isActive ? 'text-primary' : 'text-zinc-600'} group-hover:text-primary h-5 group-hover:opacity-0 transition-all ease-out duration-300`} />
                            <span className='absolute inset-0 text-xs uppercase font-nav flex items-center justify-center text-center group-hover:opacity-100 opacity-0 transition-all ease-out text-primary duration-300'>skills</span>
                        </>
                    )}
                </NavLink>
                <NavLink to='/contact' className='relative group flex justify-center items-center my-3'>
                    {({ isActive }) => (
                        <>
                            <FontAwesomeIcon 
                                icon={faAddressCard} 
                                className={`${isActive ? 'text-primary' : 'text-zinc-600'} group-hover:text-primary h-5 group-hover:opacity-0 transition-all ease-out duration-300`} />
                            <span className='absolute inset-0 text-xs uppercase font-nav flex items-center justify-center text-center group-hover:opacity-100 opacity-0 transition-all ease-out text-primary duration-300'>contact</span>
                        </>
                    )}
                </NavLink>
            </nav>
            <div className='flex flex-col items-center justify-center absolute bottom-6'>
                <a href='https://linkedin.com/in/siraphop-siraboonchai-681500272' className='relative w-full' target='_blank'>
                    <FontAwesomeIcon icon={faLinkedin} className='hover:text-primary text-zinc-600 h-4 transition-all ease-out duration-300' />
                </a>
                <a href='https://github.com/blyoue' className='my-1 relative w-full' target='_blank'>
                    <FontAwesomeIcon icon={faSquareGithub} className='hover:text-primary h-4 text-zinc-600 transition-all ease-out duration-300' />
                </a>
            </div>
        </div>
    )
}
export default Sidebar;