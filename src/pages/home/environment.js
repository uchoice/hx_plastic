import QueueAnim from 'rc-queue-anim';
import { OverPack } from 'rc-scroll-anim';

export default function ({infos}) {
  return <div className="environment">
  <OverPack playScale={0.05}>
    <QueueAnim delay={600}>
    <h1 key="enviroment" className="title">医院环境</h1>
    <div key="enviroment-content" className="content">
      {
        infos.map((info, key) =>
          <div
            className="item"
            key={`env_${key}`}
            style={{backgroundImage:`url("${info.image}")`}}
          >
            <div className="cover">{info.title}</div>
          </div>
        )
      }
    </div>
    </QueueAnim>
    </OverPack>
  </div>
}
