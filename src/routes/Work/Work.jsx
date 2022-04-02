import React from 'react'
import './Work.scss'
import TitleAnim from "../../components/anim/TitleAnim/TitleAnim";

const Work = () => {
  return (
    <>
      <TitleAnim titleString={'My Work'} className="work-title"/>
      <div className="gallery">
        <div className="card"><img src="https://www.schulz-grafik.de/wp-content/uploads/2018/03/placeholder.png" alt="" /></div>
        <div className="card"><img src="https://www.schulz-grafik.de/wp-content/uploads/2018/03/placeholder.png" alt="" /></div>
        <div className="card"><img src="https://www.schulz-grafik.de/wp-content/uploads/2018/03/placeholder.png" alt="" /></div>
      </div>
    </>
  )
}

export default Work