import QueueAnim from 'rc-queue-anim';
import { OverPack } from 'rc-scroll-anim';

export default function ({storeInfo}) {
  return <div className="store-info">
    <OverPack playScale={0.05}>
      <QueueAnim delay={600}>
        <div key="store-title" className="title-group">
          <h1 className="title">门店信息</h1>
          <h2 className="sub-title">About Store information</h2>
        </div>
        <div key="store-content" className="content">
        {storeInfo.map((store, key) =><div key={key} className="pic-wrapper">
            <img alt="" src={store.image}/>
            <div className="txt-wrapper">
              {store.title}
            </div>
          </div>
        )}
        </div>
      </QueueAnim>
    </OverPack>
  </div>
}
