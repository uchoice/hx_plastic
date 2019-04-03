import { Component } from 'react';
import StarProjectBlock from './star-project-block';
import './index.less';

const PROJECT_MBWD = require('../../assets/img/project_ycmb.png')
const PROJECT_ZX = require('../../assets/img/project_zx.png')
const PROJECT_PFBY = require('../../assets/img/project_pfby.png')
const PROJECT_PFKS = require('../../assets/img/project_pfks.png')
const PROJECT_KJMF = require('../../assets/img/project_kjmf.png')
const PROJECT_HSDZ = require('../../assets/img/project_hsdz.png')
const PROJECT_JKGL = require('../../assets/img/project_jkgl.png')
const PROJECT_YCMB = require('../../assets/img/project_ycmb.png')
const CASE_IMG = require('../../assets/img/case_img.png')

export default class StarProject extends Component {
  render () {
    return <div className="star-project">
      <StarProjectBlock
        title={'整形手术'}
        icon={PROJECT_ZX}
        img={CASE_IMG}
        desc={"面部微雕面部微雕面部微雕面部微雕面部微雕面部微雕面部微雕面部微雕面部"}
      />
      <StarProjectBlock
        title={'面部微雕'}
        icon={PROJECT_MBWD}
        img={CASE_IMG}
        desc={"面部微雕面部微雕面部微雕面部微雕面部微雕面部微雕面部微雕面部微雕面部"}
      />
      <StarProjectBlock
        title={'皮肤保养'}
        icon={PROJECT_PFBY}
        img={CASE_IMG}
        desc={"面部微雕面部微雕面部微雕面部微雕面部微雕面部微雕面部微雕面部微雕面部"}
      />
      <StarProjectBlock
        title={'皮肤抗衰'}
        icon={PROJECT_PFKS}
        img={CASE_IMG}
        desc={"面部微雕面部微雕面部微雕面部微雕面部微雕面部微雕面部微雕面部微雕面部"}
      />
      <StarProjectBlock
        title={'科技美肤'}
        icon={PROJECT_KJMF}
        img={CASE_IMG}
        desc={"面部微雕面部微雕面部微雕面部微雕面部微雕面部微雕面部微雕面部微雕面部"}
      />
      <StarProjectBlock
        title={'韩式定妆'}
        icon={PROJECT_HSDZ}
        img={CASE_IMG}
        desc={"面部微雕面部微雕面部微雕面部微雕面部微雕面部微雕面部微雕面部微雕面部"}
      />
      <StarProjectBlock
        title={'健康管理'}
        icon={PROJECT_JKGL}
        img={CASE_IMG}
        desc={"面部微雕面部微雕面部微雕面部微雕面部微雕面部微雕面部微雕面部微雕面部"}
      />
      <StarProjectBlock
        title={'牙齿美容'}
        icon={PROJECT_YCMB}
        img={CASE_IMG}
        desc={"面部微雕面部微雕面部微雕面部微雕面部微雕面部微雕面部微雕面部微雕面部"}
      />
    </div>
  }
}
