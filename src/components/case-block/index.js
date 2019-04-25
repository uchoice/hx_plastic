import Link from 'umi/link'
import './index.less'
export default function ({icon,title, imgs}) {
  return <div className="case-block">
    {title && <div className="title">
      <img alt="" src={icon}/>
      {title}
    </div>}
    <div className="cases-wrapper">
      {imgs.map((img, index) =>
        <Link to="/home">
          <img key={`case_${index}`} alt="" src={img}/>
        </Link>
      )}
    </div>
  </div>
}
