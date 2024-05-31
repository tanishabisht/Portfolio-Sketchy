import './sidelinks.scss'
import {LinkLogoFacebook, LinkLogoInstagram, LinkLogoLinkedin, LinkLogoMedium, LinkLogoTwitter, LinkLogoYoutube, LinkLine} from '../../Images'


const SideLinks = ({fb, insta, linkedIn, medium, twitter, utube}) => {
  return (
    <div className='sidelinks_container'>
        <a className='sidelinks_item' target='_blank' href={fb}><LinkLogoFacebook/></a>
        <a className='sidelinks_item' target='_blank' href={insta}><LinkLogoInstagram/></a>
        <a className='sidelinks_item' target='_blank' href={linkedIn}><LinkLogoLinkedin/></a>
        <a className='sidelinks_item' target='_blank' href={medium}><LinkLogoMedium/></a>
        <a className='sidelinks_item' target='_blank' href={twitter}><LinkLogoTwitter/></a>
        <a className='sidelinks_item' target='_blank' href={utube}><LinkLogoYoutube/></a>
        <LinkLine/>
    </div>
  )
}


export default SideLinks