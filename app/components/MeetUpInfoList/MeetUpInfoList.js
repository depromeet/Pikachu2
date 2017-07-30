import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: lex;
  overflow-y: scroll;
  height:80%;
  max-height:800px;
`;

const MeetInfoWrapper = styled.div`
  display:flex;
  flex-direction: column;
  height:90px;
  padding: 5px 20px;
  background:#fff;
  margin: 16px;
  border-radius: 5px;
  box-shadow: 0px 2px 10px #cccccc;

  &:first-child {
    margin: 0px 16px 16px;
  }
`;

const MeetInfoHeader = styled.div`
  display:flex;
  height:30px;
`;

const MIHTitle = styled.div`
  flex: 1;
  float: left;
  line-height: 30px;
  color: #737373;
`;

const MIHLocInfo = styled.div`
  flex: 1;
  float: right;
  line-height: 30px;
  color: #737373;
  text-align:right;
  font-size: 14px;
`;
const MIHContent = styled.div`
  display: flex;
`;
const MIHCIcon = styled.div`
  display:inline-block;
  width:25px;
  height:25px;
  border-radius: 50%;
  background-image: url('${(props) => props.src}')
  background-size: 25px;
`;
const MIHCInfo = styled.div`
  display:inline-block;
  line-height:25px;
  padding-left: 5px;
  color: #737373;
  height:25px;
  background:#fff;
  font-size:14px;
`;
const MIHCProgressWrapper = styled.div`
  display:flex;
  flex:1;
`;
const MIHCProgressBar = styled.div`
  margin-top: 8px;
  height: 8px;
  flex:8;
  border-radius:4px;
  color: #737373;
  background:#F1F1F1;
`;

const MIHCProgress = styled.div`
  height: 8px;
  width: 55%;
  border-radius:4px;
  background: linear-gradient(to bottom,  rgba(230,230,230,1) 20%,rgba(210,210,210,1) 100%);
`;
const MIHCProgressInfo = styled.div`
  flex: 1;
  margin-left:10px;
  font-size: 14px;
  color: #a7a7a7;
`;
function MeetUpInfoList() {
  return (
    <Wrapper>
      <MeetInfoWrapper>
        <MeetInfoHeader>
          <MIHTitle>디프만 정기세션</MIHTitle>
          <MIHLocInfo>7.29 디캠프</MIHLocInfo>
        </MeetInfoHeader>
        <MIHContent>
          <MIHCIcon src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZDg9jXXfLo6WlibVQGYAH_gO8TYvPlqbOHD7v9Ks-i0G_Eat8nA'} />
          <MIHCInfo>디프만 | 김은영</MIHCInfo>
        </MIHContent>
        <MIHCProgressWrapper>
          <MIHCProgressBar><MIHCProgress /></MIHCProgressBar>
          <MIHCProgressInfo>5/10</MIHCProgressInfo>
        </MIHCProgressWrapper>
      </MeetInfoWrapper>
      <MeetInfoWrapper>
        <MeetInfoHeader>
          <MIHTitle>디프만 정기세션</MIHTitle>
          <MIHLocInfo>7.29 디캠프</MIHLocInfo>
        </MeetInfoHeader>
        <MIHContent>
          <MIHCIcon src={'data:image/jpeg;base64,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'} />
          <MIHCInfo>디프만 | 김은영</MIHCInfo>
        </MIHContent>
        <MIHCProgressWrapper>
          <MIHCProgressBar><MIHCProgress /></MIHCProgressBar>
          <MIHCProgressInfo>5/10</MIHCProgressInfo>
        </MIHCProgressWrapper>
      </MeetInfoWrapper>
      <MeetInfoWrapper>
        <MeetInfoHeader>
          <MIHTitle>디프만 정기세션</MIHTitle>
          <MIHLocInfo>7.29 디캠프</MIHLocInfo>
        </MeetInfoHeader>
        <MIHContent>
          <MIHCIcon src={'https://secure.gravatar.com/avatar/9696fec405a6c206907f55486ea35fd9.jpg?s=1…d=https%3A%2F%2Fa.slack-edge.com%2F7fa9%2Fimg%2Favatars%2Fava_0013-192.png'} />
          <MIHCInfo>디프만 | 김은영</MIHCInfo>
        </MIHContent>
        <MIHCProgressWrapper>
          <MIHCProgressBar><MIHCProgress /></MIHCProgressBar>
          <MIHCProgressInfo>5/10</MIHCProgressInfo>
        </MIHCProgressWrapper>
      </MeetInfoWrapper>

      <MeetInfoWrapper>
        <MeetInfoHeader>
          <MIHTitle>디프만 정기세션</MIHTitle>
          <MIHLocInfo>7.29 디캠프</MIHLocInfo>
        </MeetInfoHeader>
        <MIHContent>
          <MIHCIcon src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZDg9jXXfLo6WlibVQGYAH_gO8TYvPlqbOHD7v9Ks-i0G_Eat8nA'} />
          <MIHCInfo>디프만 | 김은영</MIHCInfo>
        </MIHContent>
        <MIHCProgressWrapper>
          <MIHCProgressBar><MIHCProgress /></MIHCProgressBar>
          <MIHCProgressInfo>5/10</MIHCProgressInfo>
        </MIHCProgressWrapper>
      </MeetInfoWrapper>

      <MeetInfoWrapper>
        <MeetInfoHeader>
          <MIHTitle>디프만 정기세션</MIHTitle>
          <MIHLocInfo>7.29 디캠프</MIHLocInfo>
        </MeetInfoHeader>
        <MIHContent>
          <MIHCIcon src={'data:image/jpeg;base64,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'} />
          <MIHCInfo>디프만 | 김은영</MIHCInfo>
        </MIHContent>
        <MIHCProgressWrapper>
          <MIHCProgressBar><MIHCProgress /></MIHCProgressBar>
          <MIHCProgressInfo>5/10</MIHCProgressInfo>
        </MIHCProgressWrapper>
      </MeetInfoWrapper>

      <MeetInfoWrapper>
        <MeetInfoHeader>
          <MIHTitle>디프만 정기세션</MIHTitle>
          <MIHLocInfo>7.29 디캠프</MIHLocInfo>
        </MeetInfoHeader>
        <MIHContent>
          <MIHCIcon src={'https://s3-us-west-2.amazonaws.com/slack-files2/avatars/2016-05-03/39715050438_22b58824847a2be9c8e6_132.png'} />
          <MIHCInfo>디프만 | 김은영</MIHCInfo>
        </MIHContent>
        <MIHCProgressWrapper>
          <MIHCProgressBar><MIHCProgress /></MIHCProgressBar>
          <MIHCProgressInfo>5/10</MIHCProgressInfo>
        </MIHCProgressWrapper>
      </MeetInfoWrapper>
      <MeetInfoWrapper>
        <MeetInfoHeader>
          <MIHTitle>디프만 정기세션</MIHTitle>
          <MIHLocInfo>7.29 디캠프</MIHLocInfo>
        </MeetInfoHeader>
        <MIHContent>
          <MIHCIcon src={'https://s3-us-west-2.amazonaws.com/slack-files2/avatars/2016-05-03/39715050438_22b58824847a2be9c8e6_132.png'} />
          <MIHCInfo>디프만 | 김은영</MIHCInfo>
        </MIHContent>
        <MIHCProgressWrapper>
          <MIHCProgressBar><MIHCProgress /></MIHCProgressBar>
          <MIHCProgressInfo>5/10</MIHCProgressInfo>
        </MIHCProgressWrapper>
      </MeetInfoWrapper>
      <MeetInfoWrapper>
        <MeetInfoHeader>
          <MIHTitle>디프만 정기세션</MIHTitle>
          <MIHLocInfo>7.29 디캠프</MIHLocInfo>
        </MeetInfoHeader>
        <MIHContent>
          <MIHCIcon src={'https://s3-us-west-2.amazonaws.com/slack-files2/avatars/2016-05-03/39715050438_22b58824847a2be9c8e6_132.png'} />
          <MIHCInfo>디프만 | 김은영</MIHCInfo>
        </MIHContent>
        <MIHCProgressWrapper>
          <MIHCProgressBar><MIHCProgress /></MIHCProgressBar>
          <MIHCProgressInfo>5/10</MIHCProgressInfo>
        </MIHCProgressWrapper>
      </MeetInfoWrapper>
      <MeetInfoWrapper>
        <MeetInfoHeader>
          <MIHTitle>디프만 정기세션</MIHTitle>
          <MIHLocInfo>7.29 디캠프</MIHLocInfo>
        </MeetInfoHeader>
        <MIHContent>
          <MIHCIcon src={'https://s3-us-west-2.amazonaws.com/slack-files2/avatars/2016-05-03/39715050438_22b58824847a2be9c8e6_132.png'} />
          <MIHCInfo>디프만 | 김은영</MIHCInfo>
        </MIHContent>
        <MIHCProgressWrapper>
          <MIHCProgressBar><MIHCProgress /></MIHCProgressBar>
          <MIHCProgressInfo>5/10</MIHCProgressInfo>
        </MIHCProgressWrapper>
      </MeetInfoWrapper>
      <MeetInfoWrapper>
        <MeetInfoHeader>
          <MIHTitle>디프만 정기세션</MIHTitle>
          <MIHLocInfo>7.29 디캠프</MIHLocInfo>
        </MeetInfoHeader>
        <MIHContent>
          <MIHCIcon src={'https://s3-us-west-2.amazonaws.com/slack-files2/avatars/2016-05-03/39715050438_22b58824847a2be9c8e6_132.png'} />
          <MIHCInfo>디프만 | 김은영</MIHCInfo>
        </MIHContent>
        <MIHCProgressWrapper>
          <MIHCProgressBar><MIHCProgress /></MIHCProgressBar>
          <MIHCProgressInfo>5/10</MIHCProgressInfo>
        </MIHCProgressWrapper>
      </MeetInfoWrapper>
    </Wrapper>
  );
}

export default MeetUpInfoList;
