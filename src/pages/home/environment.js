export default function ({infos}) {
  return <div className="environment">
    <h1 className="title">医院环境</h1>
    <div className="content">
      {
        infos.map((info, key) =>
          <div
            className="item"
            key={`env_${key}`}
            style={{backgroundImage:`url(${info.img})`}}
          >
            <div className="cover">{info.title}</div>
          </div>
        )
      }
    </div>
  </div>
}
