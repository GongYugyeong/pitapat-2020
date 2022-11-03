import workData from 'data/workData.json'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PitapatArea02(props) {
    //let [listCnt, setListCnt] = useState(3);
    let listCnt = workData.length;
    let [style, setStyle] = useState({display: ''});
    let [work, setWork] = useState(workData.list2);

    return (
      <div id="PitapatArea02" className="element pitapat_wrap pitapat_wrap_02" name="section1">
        <div className="cont_wrapper">
            <div className="work_text_area">
            <p className="work_title">{props.list[0]}</p>
            <p className="work_text">
                피터패트는 사용자에게 이상적인 서비스를 제공하기 위해 무엇을 해야 하는지 같은 시각과 다른 관점으로 서비스를 제공하고 있습니다.<br />
                2004년 설립이래 다년간의 경험과 노하우를 기반으로 다양한 프로젝트를 성공적으로 수행하는 디지털 에이전시 입니다.
            </p>
            </div>
            <div className="work_area">
                <ul className="work_list">
                {
                    work.map(function(name,index){
                        return(
                            <li className={"works work_"+(index+1)} key={(index+1)}>
                                <img src={"images/main/common/work_thumbnail_"+(name.id)+".png"} alt={name.title} />
                                <span>{name.category}</span>
                                <p>{name.title}</p>
                            </li>
                        );
                    })
                }
                </ul>
                <button className="moreBtn" style={style} onClick={(target)=>{
                    listCnt--;
                    axios.get('data/workData.json')
                    .then((result)=>{
                        setWork([...work,...result.data.list1]);
                        setStyle({display: 'none'});
                    })
                    .catch(()=>{
                        console.log('실패');
                    })
                }}>MORE PROJECT</button>
            </div>
        </div>
      </div>
    );
}

export default PitapatArea02;