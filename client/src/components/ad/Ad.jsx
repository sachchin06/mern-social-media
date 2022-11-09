import './ad.css'
const PF = process.env.REACT_APP_PUBLIC_FOLDER

export default function Ad() {
  return (
    <img className='rightbarAd' src={PF+"ad.png"} alt="" />
  )
}
