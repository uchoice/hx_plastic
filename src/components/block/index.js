import './index.less';

export default function ({title, desc}) {
  return <div className="block">
    <h1 className="title">{title}</h1>
    <div className="desc">{desc}</div>
  </div>
}
