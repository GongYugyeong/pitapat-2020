import React, { useState, useEffect } from 'react';

function PitapatArea04(props) {

    let [partner,setPartner] = useState(['partner_14','partner_02','partner_03','partner_04','partner_07','partner_08','partner_09','partner_11','partner_12','partner_13']);
  
    return (
      <div id="PitapatArea04" className="element pitapat_wrap pitapat_wrap_04" name="section3">
        <div className="cont_wrapper">
          <div className="partner_text_area">
            <p className="partner_title">{props.list[2]}</p>
            <p className="partner_text">피터패트는 다양한 고객사와 다양한 프로젝트를<br className="mo_mode" />성공적으로 진행 중입니다.</p>
          </div>
          <div className="partner_area">
            <ul className="partner_list">
              {
                partner.map(function(name,index){
                  return(
                    <li className="partners" key={index}>
                      <img src={"../images/main/pc/"+name+".png"} alt={"img"+index} className="pc_mode" />
                      <img src={"../images/main/mo/"+name+".png"} alt={"img"+index} className="mo_mode" />
                    </li>
                  );
                })
              }
            </ul>
          </div>
        </div>
      </div>
    );
}

export default PitapatArea04;