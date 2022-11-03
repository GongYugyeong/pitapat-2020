import React from 'react';

function ContactUs(props){
  return (
    <div className="contact_us_area">
        <div className="contact_us">
            <div className="contact_title_part">
                <p className="contact_title">{props.list[3]+" US"}</p>
                <a href="mailto:webmaster@pitapat.net" className="contact_text pc_mode">문의하기</a>
            </div>
            <div className="contact_adress_part">
                <ul>
                <li>
                    <p className="contact_adress_title">LOCATION</p>
                    <p className="contact_adress_text">서울특별시 마포구 신촌로14길 20 태인빌딩 5층</p>
                </li>
                <li className="contact_adress_gap">
                    <p className="contact_adress_title">EMAIL</p>
                    <a href="mailto:webmaster@pitapat.net" className="contact_adress_text">webmaster@pitapat.net</a>
                </li>
                <li>
                    <p className="contact_adress_title">CONTACT</p>
                    <p className="contact_adress_text">TEL<span className="adress_gap"></span>070-7510-4328</p>
                </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default ContactUs;