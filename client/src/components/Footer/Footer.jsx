import { RiGithubLine } from 'react-icons/ri'
import { BsLinkedin } from 'react-icons/bs'
import './Footer.css'
export default function Footer() {
    return (
        <div className='Footer'>
            <a target="_blank" href="https://github.com/Jacobdye99" rel="noreferrer" className='github'><RiGithubLine className='github' size={40}/></a>
            <a target="_blank"  href="https://www.linkedin.com/in/jacob-dye-55659b149/" rel="noreferrer" className='linkedin'><BsLinkedin className='linkedin' size={40}/></a>
        </div>
    )
}
