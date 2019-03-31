import BannerAnim, { Element } from 'rc-banner-anim';
import './index.less';
import 'rc-banner-anim/assets/index.css';

export default function (props) {
  const { imgs } = props
  return <div className="nav-wrapper">
    <BannerAnim
      prefixCls="nav"
      dragPlay={false}
      arrow={false}
      autoPlay
    >
      {imgs && imgs.map((img, index) => <Element
        key={`img-${index}`}
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      )}
    </BannerAnim>
  </div>
}
