import './index.less'
import CaseBlock from '@/components/case-block';


const CASE_IMG = require('../../assets/img/case_img.png')

export default function () {
  return <div className="team">
    <CaseBlock
        imgs= {
          [CASE_IMG,CASE_IMG]
        }
      />
    <CaseBlock
        imgs= {
          [CASE_IMG,CASE_IMG]
        }
      />
    <CaseBlock
        imgs= {
          [CASE_IMG,CASE_IMG]
        }
      />
    <CaseBlock
        imgs= {
          [CASE_IMG,CASE_IMG]
        }
      />
    <CaseBlock
        imgs= {
          [CASE_IMG,CASE_IMG]
        }
      />
  </div>
}
