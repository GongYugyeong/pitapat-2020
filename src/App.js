import React, { useState, useEffect } from 'react';
import logo from './images/main/common/move_img/main_visual_01.gif';

import ContactMap from './contact/Map';
import ContactUs from './contact/Us';
import PitapatArea02 from './work/Worklist';
import PitapatArea04 from './partner/Partner';

import { Link, Element as scroll} from 'react-scroll';

let pointer = ({cursor:'pointer'});

function Header(props) {
  return (
    <div id="header" className="header" style={props.style}>
      <div className="menu_wrap">
        <a href="#" className="logo top_off"></a>
        <ul className="top_menu">
          {
            props.list.map(function(name,index){
              return(
                <li className={"menu_0"+(index+1)} key={index}>
                  <Link style={pointer} activeClass="active" className="menu_link" to={"section"+(index+1)} spy={true} smooth={true} duration={500} >{name}</Link>
                </li>
              );
            })
          }
        </ul>
      </div>
    </div>
  );
}

function PitapatArea01() {
  return (
    <div id="pitapatArea01" className="pitapat_wrap pitapat_wrap_01">
      <div className="cont_wrapper sub_Visual">
        <ul>
          <li className="carousel_item carousel_item_01">
            <div className="carousel_item_01_area">
              <div className="poster_image">
                <p className="poster_title"><img src={logo} alt="THE happy experience of the digital world" /></p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <Link style={pointer} activeClass="active" className="lets_go" to="section1" spy={true} smooth={true} duration={500}>
        <img src="images/main/pc/icon_lets_go.png" className="pc_mode" />
        <img src="images/main/mo/icon_lets_go.png" className="mo_mode" />
      </Link>
    </div>
  );
}

function Parallaxani(props) {
  return (
    <div className="about_us_light" style={{
      top: (props.position/50)
    }}>
      <div className="image_wrap image-wrap">
          <img src="images/main/pc/img_light.png" alt="" className="pc_mode wp-post-image" />
          <img src="images/main/mo/img_light.png" alt="" className="mo_mode wp-post-image" />
      </div>
    </div>
  );
}

function PitapatArea03(props) {
  return (
    <div id="PitapatArea03" className="element pitapat_wrap pitapat_wrap_03" name="section2">
        <div className="cont_wrapper about_us_wrapper">
            <div className="about_us_cont">
                <div className="text_area">
                    <p className="about_us_text">{props.list[1]}</p>
                    <ul className="about_us_title">
                        <li>기분 좋은 느낌</li>
                        <li>두근~두근거리는</li>
                        <li>설렘으로~</li>
                    </ul>
                    <p className="about_us_small_text">
                        인식과 습관이 주는 편안함을 거부하고 새로운 기술에
                        <br className="mo_mode" />
                        두려워하지 않고
                        <br className="pc_mode" />
                        머릿속 상상이 실제가 되는 곳 피터패트!
                        <br />
                        우리는 누구와 무엇을 어떻게 해야 하는지
                        <br className="mo_mode" />잘 알고 있습니다.
                        <br className="pc_mode" />
                        당신과 함께 두근거리는 설렘으로
                        <br />
                        성공하는 프로젝트를 만들어 가겠습니다.
                    </p>
                </div>
                <Parallaxani position={props.position} />
            </div>
        </div>
    </div>
  );
}

function PitapatArea05(props) {
  return(
    <div id="PitapatArea05" className="element pitapat_wrap pitapat_wrap_05" name="section4">
      <div className="cont_wrapper">
        <ContactUs list={props.list} />
        <ContactMap />
      </div>
    </div>
  );
}

function Container(props) {
  return (
    <div id="container" className="sub_cont inner">
      <PitapatArea01 />
      <PitapatArea02 list={props.list} />
      <PitapatArea03 list={props.list} position={props.position} />
      <PitapatArea04 list={props.list} />
      <PitapatArea05 list={props.list} />
    </div>
  );
}

function Footer() {
  return(
    <div className="footer_wrap">
        <ul className="footer">
            <li>(주) 피터패트</li>
            <li>COPYRIGHT PIT-A-PAT. ALL RIGHTS RESERVED.</li>
        </ul>
    </div>
  );
}

function App() {
  const list = ['OURWORK', 'ABOUT US', 'PARTNER', 'CONTACT'];
  const [position, setPosition] = useState(0);
  let [scrollVal, setScrollVal] = useState(true);
  var style;
  
  var pitapatArea01H;
  var htmlH;

  useEffect(() => {
    window.onresize = function(){
        pitapatArea01H = document.getElementById('pitapatArea01').offsetHeight;
        htmlH = document.body.scrollHeight;
    };

    var prevScrollpos = window.pageYOffset;
    window.onscroll = function(){
      setPosition(window.scrollY);

      var currentScrollPos = window.pageYOffset;
      pitapatArea01H = document.getElementById('pitapatArea01').offsetHeight;
      htmlH = document.body.scrollHeight;

      prevScrollpos > currentScrollPos
      ? setScrollVal(true)
      : setScrollVal(false)
      
      currentScrollPos >= (htmlH-(pitapatArea01H*2))
      ? document.getElementById('header').classList.add('color_change')
      : document.getElementById('header').classList.remove('color_change')
      
      prevScrollpos = currentScrollPos;

      // console.log('currentScrollPos / '+currentScrollPos);
      // console.log('htmlH-pitapatArea01H / '+ (htmlH-pitapatArea01H));
    }
  }, []);

  return (
    <div className="App">
    {
        scrollVal === true
        ? (
            style = ({top:'0',transition:'all 500ms'}),
            <Header list={list} style={style} scrollVal={scrollVal} />
        )
        : (
            style = ({top:'-147px',transition:'all 500ms'}),
            <Header list={list} style={style} scrollVal={scrollVal} />
        )
    }
    <Container list={list} position={position} />
    <Footer />
    </div>
  );
}

export default App;
