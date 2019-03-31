import './index.less';

export default function ({title, subTitle, align = 'left'}) {
  return <div className={`block-title ${align === 'center' && "align-center"}`}>
    <span className="zh-text">{title}</span>
    <span className="eng-text">{subTitle}</span>
</div>
}
