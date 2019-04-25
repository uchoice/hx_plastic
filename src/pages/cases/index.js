import './index.less';
import { Component } from 'react';
import CaseBlock from '@/components/case-block';

const PROJECT_MBWD = require('../../assets/img/project_ycmb.png')
const PROJECT_ZX = require('../../assets/img/project_zx.png')
const PROJECT_PFBY = require('../../assets/img/project_pfby.png')
const PROJECT_PFKS = require('../../assets/img/project_pfks.png')
const PROJECT_KJMF = require('../../assets/img/project_kjmf.png')
const PROJECT_HSDZ = require('../../assets/img/project_hsdz.png')
const PROJECT_JKGL = require('../../assets/img/project_jkgl.png')
const PROJECT_YCMB = require('../../assets/img/project_ycmb.png')
const CASE_IMG = require('../../assets/img/case_img.png')

export default class Cases extends Component {
  render () {
    return <div className="cases">
        <CaseBlock
          icon={PROJECT_MBWD}
          title="面部微雕"
          imgs= {
            [CASE_IMG,CASE_IMG]
          }
        />
        <CaseBlock
          icon={PROJECT_ZX}
          title="整形手术"
          imgs= {
            [CASE_IMG,CASE_IMG]
          }
        />
        <CaseBlock
          icon={PROJECT_PFBY}
          title="皮肤保养"
          imgs= {
            [CASE_IMG,CASE_IMG]
          }
        />
        <CaseBlock
          icon={PROJECT_PFKS}
          title="皮肤抗衰"
          imgs= {
            [CASE_IMG,CASE_IMG]
          }
        />
        <CaseBlock
          icon={PROJECT_KJMF}
          title="科技美肤"
          imgs= {
            [CASE_IMG,CASE_IMG]
          }
        />
        <CaseBlock
          icon={PROJECT_HSDZ}
          title="韩式定妆"
          imgs= {
            [CASE_IMG,CASE_IMG]
          }
        />
        <CaseBlock
          icon={PROJECT_JKGL}
          title="健康管理"
          imgs= {
            [CASE_IMG,CASE_IMG]
          }
        />
        <CaseBlock
          icon={PROJECT_YCMB}
          title="牙齿美容"
          imgs= {
            [CASE_IMG,CASE_IMG]
          }
        />
    </div>
  }
}
