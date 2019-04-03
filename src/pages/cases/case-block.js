export default function ({icon,title, imgs}) {
  return <div className="case-block">
    <div className="title">
      <img alt="" src={icon}/>
      {title}
    </div>
    <div className="cases-wrapper">
      {imgs.map((img, index) =>
        <img key={`case_${index}`} alt="" src={img}/>
      )}
    </div>
  </div>
}
