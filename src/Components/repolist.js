import React, { Component } from "react";
import {
  Container,
  Content,
  Header,
  Left,
  Right,
  Body,
  Title,
  Text,
  Button,
  Spinner,
  List,
  ListItem,
  Icon
} from "native-base";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { StackActions } from "react-navigation";
//import { getRepos, getRepoThunk, repoSelected } from "../Actions/index";
import * as Actions from "../Actions/index";

class RepoList extends Component {
  componentWillMount() {
    this.props.actions.getRepoThunk();
  }
  render() {
    const popAction = StackActions.pop({
      n: 1
    });

    if (this.props.repos.length === 0) {
      return (
        <Container>
          <Header>
            <Left>
              <Button
                transparent
                onPress={() => this.props.navigation.dispatch(popAction)}
              >
                <Icon name="arrow-back" />
              </Button>
            </Left>
            <Body>
              <Title>Repo List</Title>
            </Body>
            <Right />
          </Header>
          <Content
            contentContainerStyle={{
              justifyContent: "center",
              alignItems: "center",
              paddingTop: 40,
              paddingHorizontal: 10
            }}
          >
            <Text
              style={{
                fontSize: 30,
                fontWeight: "bold",
                marginTop: 30,
                marginBottom: 30
              }}
            >
              Loading your repo List, Please wait
            </Text>
            <Spinner />
          </Content>
        </Container>
      );
    } else if (this.props.repos.length !== 0) {
      return (
        <Container>
          <Header>
            <Left>
              <Button
                transparent
                onPress={() => this.props.navigation.dispatch(popAction)}
              >
                <Icon name="arrow-back" />
              </Button>
            </Left>
            <Body>
              <Title>GitHub Repo List</Title>
            </Body>
            <Right />
          </Header>
          <Content>
            <List
              dataArray={this.props.repos}
              renderRow={item => (
                <ListItem
                  onPress={() => this.props.navigation.navigate("login")}
                >
                  <Text>{item.full_name}</Text>
                </ListItem>
              )}
            />
          </Content>
        </Container>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    repos: state.repos
  };
}

function matchDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(RepoList);
