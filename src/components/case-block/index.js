import './index.less'
export default function ({icon,title, cases}) {
  return <div className="case-block">
    {title && <div className="title">
      <img alt="" src={icon}/>
      {title}
    </div>}
    <div className="cases-wrapper">
      {cases.map((caseItem, index) =>
        <img key={`case_${index}`} alt="" src={caseItem.image}/>
      )}
    </div>
  </div>
}
