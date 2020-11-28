import React from 'react';
import { List, ListItem, Left, Body, Thumbnail, Text } from 'native-base';

const ContactsList = ({ data }) => (
    <List style={{ marginBottom: 10 }}>
        {data.map((contact, index) => (
            <Contact key={index} {...contact} />
        ))}
    </List>
);

const Contact  = ({ contact, photo, title }) => (
    <ListItem avatar>
        <Left style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
            <Thumbnail small source={{ uri: photo }} />
        </Left>
        <Body>
            <Text style={{ borderWidth: 0, fontWeight: "bold" }}>{contact}</Text>
            <Text style={{ fontSize: 13, color: "#a1a8ae" }}>{title}</Text>
        </Body>
    </ListItem>
);

export default ContactsList;