import {ProjectCard} from '../Components'
import { projectPageContent, projectPageAllProjects } from '../Content/variables'

const Projects = () => {
    return (
        <div style={{display:'flex'}}>
            <div className='container my-auto'>
                <div className='row'>
                    <div className='col-2'></div>
                    <div className='col mt-5 mb-2'>
                        <p>{projectPageContent}</p>
                    </div>
                    <div className='col-2'></div>
                </div>
                <div className='row' style={{margin:'30px'}}>
                    {projectPageAllProjects.map(({title, gitHubLink, siteLink, imgSrc}) => <div className='col-xs-12 col-sm-12 col-md-6'><ProjectCard title={title} gitHubLink={gitHubLink} siteLink={siteLink} imgSrc={imgSrc} /></div> )}                        
                </div>
            </div>
        </div>
    )
}

export default Projects