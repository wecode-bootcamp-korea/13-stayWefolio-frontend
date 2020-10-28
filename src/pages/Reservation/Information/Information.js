import React, { Component } from 'react';

import "./Information.scss"

class Information extends Component {
  render() {
    return (
      <div className="Information">
        <span className="title">이용시<br></br> 안내사항</span>
        <div className="infoDetail">
          <span>이용 전 꼭 확인하세요!</span>
          <ol>
            <li>1. 최대 입실인원은 8인입니다. 최대인원 초과시 입실이 불가합니다.</li>
            <li>2. 객실 내 모든 구역은 금연입니다.</li>   
            <li>3. 집기 파손, 분실 및 심한 오염 발생 시 변상 조치됨을 알려 드립니다.</li>      
            <li>4. 퇴실시 사용하신 그릇과 도구는 깨끗하게 정리해 주세요.</li>
            <li>5. 예약 신청 인원 외의 방문인원 입실은 불가하며, 이에 따른 책임은 게스트에게 있습니다.</li>
            <li>6. 예약일 변경은 1회만 가능하며 환불규정이 적용됩니다. 변경 후 취소는 불가합니다.</li>
            <li>7. 체크인 당일 오전 안내문자를 발송해드립니다.</li>
            <li>8. 고성방가 및 주민피해 행동을 삼가주세요. 마을의 이웃과 함께 공존하는 공간입니다.</li>
            <li>9. 방범을 위해 감시 또는 녹화 장치가 설치되어 있습니다.</li>
            <li>10. 주차는 건물 내 주차장을 이용하시면 됩니다.</li>
          </ol>
        </div>
      </div>
    );
  }
}

export default Information;