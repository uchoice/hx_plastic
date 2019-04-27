import Link from 'umi/link';
export default function ({ img, icon, title, desc, id }) {
  return  <div className="star-project-block">
      <Link to={`/project-info?id=${id}`}><img alt="" src={img} /></Link>
      <div className="intro-wrapper">
        <div className="title">
          <img alt="" src={icon} />
          {title}
        </div>
        <div className="desc">
          {desc}
        </div>
      </div>
    </div>
}
