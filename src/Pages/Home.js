import { LightBtn } from '../Components'
import heroLogo from '../Images/virtual-reality.svg'
import { nameCapitals, homePageBioContent } from '../Content/variables'
import { Link } from 'react-router-dom';
import './pages.scss'

const Home = () => {
    return (
        <div className='home_container'>
            <div className='container my-auto'>
                <div className='row'>
                    <div className='col-sm-12 col-md-6 col-lg-6 my-auto' style={{paddingTop:'2em', paddingLeft:'4em'}}>
                        <h3>This is</h3>
                        <h1>{nameCapitals}</h1>
                        <p>{homePageBioContent}</p><br/>
                        <Link to='/projects' className='myworkLink'><LightBtn>My works</LightBtn></Link>
                    </div>
                    <div className='col-sm-12 col-md-6 col-lg-6 my-auto' style={{paddingTop:'2em', paddingLeft:'4em', paddingRight:'4em'}}>
                        <img src={heroLogo} alt='hero img not found' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home