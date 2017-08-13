import React from 'react';
import styled from 'styled-components';

// request
import request from 'request';
// material-ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { List, ListItem } from 'material-ui/List';
// style
const Wrapper = styled.div`
  display: lex;
  overflow-y: scroll;
  height:80%;
  max-height:800px;
`;
const MeetInfoWrapper = styled.div`
  display:flex;
  flex-direction: column;
  height:110px;
  padding: 5px 20px;
  background:#fff;
  margin: 1px;
  border-radius: 5px;
  box-shadow: 0px 2px 10px #cccccc;  
`;
const MeetInfoHeader = styled.div`
  display: flex;
  max-height: 60px;
`;
const MIHTitle = styled.div`
  flex: 1;
  float: left;
  line-height: 25px;
  min-height: 50px;
  color: #737373;
`;
const MIHLocInfo = styled.div`
  flex: 1;
  float: right;
  line-height: 25px;
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
const materialStyles = {
  listItem: {
    padding: 0,
    textOverflow: 'ellipsis',
  },
};
class MeetUpInfoList extends React.Component {
  state = {
    MeetUpElements: [],
  };

  componentWillMount() {
    console.log('MeetUpInfoList.js, componentWillMount');
    request({
      method: 'GET',
      url: 'http://localhost:3100/meets',
      headers: {
        Accept: 'application/json',
      },
    }, (error, response, body) => {
      if (!(response.statusCode < 200 || response.statusCode >= 300)) {
        console.log(error);
      }
      let data = JSON.parse(body);
      data = data.data;
      this.setState({ MeetUpElements: [...data.list] },
        () => { console.log(this.state.MeetUpElements); });
    });
  }
  onClickMeetInfo = (event, value) => {
    console.log(event.target);
    console.log(value);
  };

  render() {
    return (
      <MuiThemeProvider>
        <Wrapper>
          <List defaultValue={2}>
            {
              this.state.MeetUpElements.map((meetUpElement) => (
                <ListItem
                  value={meetUpElement.meetNo}
                  innerDivStyle={materialStyles.listItem}
                  onClick={(event) => { this.onClickMeetInfo(event, meetUpElement.meetNo); }}
                >
                  <MeetInfoWrapper>
                    <MeetInfoHeader>
                      <MIHTitle>{meetUpElement.title}</MIHTitle>
                      <MIHLocInfo>{meetUpElement.address}</MIHLocInfo>
                    </MeetInfoHeader>
                    <MIHContent>
                      <MIHCIcon src={meetUpElement.cmntThumbnail} />
                      <MIHCInfo>{meetUpElement.cmntNm} | {meetUpElement.userNm}</MIHCInfo>
                    </MIHContent>
                    <MIHCProgressWrapper>
                      <MIHCProgressBar><MIHCProgress /></MIHCProgressBar>
                      <MIHCProgressInfo>{meetUpElement.joinCnt}/{meetUpElement.maxJoinCnt}</MIHCProgressInfo>
                    </MIHCProgressWrapper>
                  </MeetInfoWrapper>
                </ListItem>
              ))
            }
            <ListItem
              value={0} innerDivStyle={materialStyles.listItem}
              onClick={(event) => { this.onClickMeetInfo(event, 0); }}
            >
              <MeetInfoWrapper>
                <MeetInfoHeader>
                  <MIHTitle>라이츄 정기세션</MIHTitle>
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

            <ListItem
              value={3}
              innerDivStyle={materialStyles.listItem}
              onClick={(event) => { this.onClickMeetInfo(event, 0); }}
            >
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
          </List>

        </Wrapper>
      </MuiThemeProvider>
    );
  }
}

export default MeetUpInfoList;
