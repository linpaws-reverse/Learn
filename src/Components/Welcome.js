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
  Card,
  CardItem
} from "native-base";

class Welcome extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Int Learning</Title>
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
          <Card>
            <CardItem>
              <Text>Welcome To Int Learning</Text>
            </CardItem>
          </Card>
          <Button
            block
            onPress={() => this.props.navigation.navigate("RepoList")}
            style={{ marginTop: 40 }}
          >
            <Text> Fetch Github Repos </Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default Welcome;
