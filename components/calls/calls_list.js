import React from 'react';
import { List, ListItem, Left, Body, Right, Thumbnail, Text, Icon } from 'native-base';

const CallsList = ({ data }) => (
    <List>
        {data.map((call, index) => (
            <Call key={index} {...call} />
        ))}
    </List>
);

const Call  = ({ interlocutor, photo, time, received, missed }) => (
    <ListItem avatar noBorder>
        <Left style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
            <Icon style={{ fontSize: 20, marginRight: 10, color: missed ? "#fe476a" : "#767f88" }} type="Feather" name={received ?(missed ? "arrow-down" : "arrow-down-left") : "arrow-up-right"} />
            <Thumbnail small source={{ uri: photo }} />
        </Left>
        <Body style={{ marginTop: 10 }}>
            <Text style={{ borderWidth: 0, fontWeight: "bold" }}>{interlocutor}</Text>
        </Body>
        <Right style={{ marginTop: 14}}>
            <Text style={{ fontWeight: "bold" }} note>{time}</Text>
        </Right>
    </ListItem>
);

export default CallsList;