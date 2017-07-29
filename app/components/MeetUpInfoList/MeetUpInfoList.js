import React from 'react';
import styled from 'styled-components';

// material-ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { List, ListItem } from 'material-ui/List';

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
  margin: 1px;
  border-radius: 5px;
  box-shadow: 0px 2px 10px #cccccc;

  
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
  background: linear-gradient(to bottom,  rgba(233,233,233,1) 0%,rgba(200,200,200,1) 100%);
`;
const MIHCProgressInfo = styled.div`
  flex: 1;
  margin-left:10px;
  font-size: 14px;
  color: #a7a7a7;
`;
const materialStyles = {
  listItem: {
    padding: 0,
  },
};

class MeetUpInfoList extends React.Component {
  state = {
    MeetUpElements: [],

  }
  render() {
    return (
      <MuiThemeProvider>
        <Wrapper>
          <List>
            <ListItem innerDivStyle={materialStyles.listItem}>
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
            </ListItem>

            <ListItem innerDivStyle={materialStyles.listItem}>
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
            </ListItem>

            <ListItem innerDivStyle={materialStyles.listItem}>
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
            </ListItem>

            <ListItem innerDivStyle={materialStyles.listItem}>
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
            </ListItem>

            <ListItem innerDivStyle={materialStyles.listItem}>
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
            </ListItem>

            <ListItem innerDivStyle={materialStyles.listItem}>
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
            </ListItem>

            <ListItem innerDivStyle={materialStyles.listItem}>
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

            </ListItem>
          </List>

        </Wrapper>
      </MuiThemeProvider>
    );
  }
}

export default MeetUpInfoList;
