import './index.less'

const DOCTOR_01 = require('../../assets/img/doctor_01.png');
const DOCTOR_02 = require('../../assets/img/doctor_02.png');
const DOCTOR_03 = require('../../assets/img/doctor_03.png');
const DOCTOR_04 = require('../../assets/img/doctor_04.png');

export default function () {
  return <div className="star-doctor">
    <div className="doctors">
      <div className="doctor-info">
        <img alt="" src={DOCTOR_01} />
        工藤新一
      </div>
      <div className="doctor-info">
        <img alt="" src={DOCTOR_02} />
        工藤新一
      </div>
      <div className="doctor-info">
        <img alt="" src={DOCTOR_03} />
        工藤新一
      </div>
      <div className="doctor-info">
        <img alt="" src={DOCTOR_04} />
        工藤新一
      </div>
    </div>
    <div className="doctors">
      <div className="doctor-info">
        <img alt="" src={DOCTOR_01} />
        工藤新一
    </div>
      <div className="doctor-info">
        <img alt="" src={DOCTOR_02} />
        工藤新一
    </div>
      <div className="doctor-info">
        <img alt="" src={DOCTOR_03} />
        工藤新一
    </div>
      <div className="doctor-info">
        <img alt="" src={DOCTOR_04} />
        工藤新一
    </div>
    </div>
  </div>
}
