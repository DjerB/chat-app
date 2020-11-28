import React from 'react';
import { List, ListItem, Left, Body, Right, Thumbnail, Badge, Text, Icon, View } from 'native-base';

const ChatsList = ({ data }) => (
    <List>
        {data.map((chat, index) => (
            <Chat key={index} {...chat} />
        ))}
    </List>
);

const Chat  = ({ interlocutor, received, read, chat, photo, tag, favourite, draft, time }) => (
    <ListItem avatar>
        <Left>
            <Thumbnail source={{ uri: photo }} />
        </Left>
        <Body>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                <Text>{interlocutor}</Text>
                {(tag || draft) && 
                    <Badge style={{ borderRadius: 9, backgroundColor: tag ? "#e9f8f5" : "rgba(0, 0, 0, 0)", marginLeft: 5 }}>
                        <Text style={{ fontSize: 11, color: tag ? "#5ccdb7" : "#ff6c87" }}>{tag ? tag : "Draft"}</Text>
                    </Badge>
                }
            </View>
            <Text style={{ fontSize: 12 }} note>{chat}</Text>
        </Body>
        <Right>
            <Text style={{ fontWeight: "bold" }} note>{time}</Text>
            <Icon style={{ marginTop: 5, color: favourite ? "#fea828" : "#89909a" }} type="FontAwesome" name={favourite ? "star" : "star-o"} />
        </Right>
    </ListItem>
);

export default ChatsList;