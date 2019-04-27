export default function ({img, icon, title, desc}) {
  return <div className="tech-training-block">
    <img alt="" src={img}/>
    <div className="intro-wrapper">
      <div className="title">
        <img alt="" src={icon}/>
        {title}
      </div>
      <div className="desc">
        {desc}
      </div>
    </div>
  </div>
}
