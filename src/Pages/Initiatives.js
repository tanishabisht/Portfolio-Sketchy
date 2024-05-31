import {InitiativeCard} from '../Components'
import initiativeLogo from '../Images/collaboration2.svg'
import { initiativePageContent, initiativePageAllInitiatives } from '../Content/variables'
import './pages.scss'

const Initiatives = () => {
    return (
        <div style={{display:'flex'}}>
            <div className='container my-auto'>
                <div className='row'>
                    <div className='col-2'></div>
                    <div className='col mt-5 mb-2'>
                        <p>{initiativePageContent}</p>
                    </div>
                    <div className='col-2'></div>
                </div>
                <div className='row'>
                    <div className='col-sm-12 col-lg-6 my-auto initiativeSVG'>
                        <img src={initiativeLogo} alt='initiative img not found' />
                    </div>
                    <div className='col-sm-12 col-lg-6 my-auto' style={{paddingTop:'2em', paddingLeft:'4em'}}>
                        {initiativePageAllInitiatives.map(({company, post, duration, desc}) => <InitiativeCard company={company} post={post} vertical={duration} desc={desc} /> )}
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Initiatives