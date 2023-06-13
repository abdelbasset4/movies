
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import cover from "../images/cover.jpg"
import test from '../images/test.jpg'
import { faBookmark, faHeart, faList, faPlay, faStar } from '@fortawesome/free-solid-svg-icons'
import PercentageCircle from "./PercentageCircle"
export default function Details() {
  return (
    <div className='relative image-bg'>
    <img src={cover} className="absolute top-0 left-0 object-cover w-full h-full image-bg"/>
    <div className="absolute top-0 left-0 w-full h-full image-bg"></div>
        <div className="container relative grid grid-cols-3 mx-auto py-7">

        <div >
        <img src={test}/>
        </div>
        <div className='col-span-2 pt-8 text-white'>
            <h1 className="py-3 text-3xl font-extrabold">Title of the movies (2023)</h1>
            <ul className="flex gap-3 text-lg">
                <li>01-01-2023</li>
                <li> - ES</li>
                <li> - Romance, Drama</li>
                <li> - 1h57m</li>
            </ul>
            <div className="flex mt-4 items-center">
              <PercentageCircle value={60}/>
              <ul className="flex gap-3 justify-center items-center ms-6">
                <li className="w-[50px] h-[50px] bg-slate-950 rounded-full flex justify-center items-center cursor-pointer hover:bg-emerald-950 duration-300"><FontAwesomeIcon icon={faList} size="base"  /></li>
                <li className="w-[50px] h-[50px] bg-slate-950 rounded-full flex justify-center items-center cursor-pointer hover:bg-emerald-950 duration-300"><FontAwesomeIcon icon={faHeart} size="base" /></li>
                <li className="w-[50px] h-[50px] bg-slate-950 rounded-full flex justify-center items-center cursor-pointer hover:bg-emerald-950 duration-300"><FontAwesomeIcon icon={faBookmark} size="base" /></li>
                <li className="w-[50px] h-[50px] bg-slate-950 rounded-full flex justify-center items-center cursor-pointer hover:bg-emerald-950 duration-300"><FontAwesomeIcon icon={faStar} size="base" /></li>
              </ul>
              <a href="#" className="ms-3 text-lg leading-4	hover:text-slate-950 font-semibold duration-300"><FontAwesomeIcon icon={faPlay} className="ms-4"/> <span className="ms-1">watch</span></a>
            </div>
            <h4 className="mb-4 text-xl mt-7">Overview</h4>
            <p>Noah must leave her city, boyfriend, and friends to move into William Leisters mansion, the flashy and wealthy husband of her mother Rafaela. As a proud and independent 17 year old, Noah resists living in a mansion surrounded by luxury. However, it is there where she meets Nick, her new stepbrother, and the clash of their strong personalities becomes evident from the very beginning.</p>
        </div>

    </div>
    </div>

  )
}
