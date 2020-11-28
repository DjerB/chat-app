import React, { Component } from 'react';
import { ActivityIndicator, ScrollView } from 'react-native';
import { Content, View } from 'native-base';

import ChatsList from '../components/chats/chats_list';
import ViewHeader from '../components/header';
import SearchBar from '../components/searchBar';

import { API, graphqlOperation } from 'aws-amplify';
import { listUsers } from '../graphql/queries';

const chats = [
    {
        interlocutor: "Patrick Ellis",
        time: "3:43 pm",
        received: true,
        read: true,
        chat:  "Hey Patrick, can you send me the documents?",
        photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
    },
    {
        interlocutor: "Rachel Murphy",
        time: "1:43 pm",
        tag: "Business",
        favourite: true,
        chat:  "In our next meeting, we'll discuss about the objectives and...",
        photo: "https://www.regardsurlemonde.fr/blog/wp-content/uploads/2015/10/photographe-SteveMcCurry-fille-afghane-1.jpg"
    },
    {
        interlocutor: "Sandra Boyd",
        time: "2 weeks ago",
        draft: true,
        chat:  "We need to improve the video and screenshots to App Store...",
        photo: "https://apprendre-la-photo.fr/wp-content/uploads/2011/06/photo-portrait_vieil-homme_laurent-breillat-407x610.jpg"
    },
    {
        interlocutor: "Timothy Ellis",
        time: "Yesterday",
        chat:  "A deadline has a wonderful way of concentrating the mind...",
        photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
    },
];

class Chats extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allChats: [],
            chats: [],
            loading: true,
            filter: false,
            search: ""
        }

        this.onSearch = this.onSearch.bind(this);
        this.onFilter = this.onFilter.bind(this);
    }

    async componentDidMount() {
        const users = await API.graphql(graphqlOperation(listUsers));
        console.log(users)
        this.setState({
            allChats: chats,
            chats,
            loading: false,
        });
    }

    onSearch(text) {
        const { allChats, filter, search } = this.state;
        this.setState({
            loading: true,
            search: text ? text : search
        }, () => {
            let chats = allChats.filter(({ interlocutor }) => interlocutor.toLowerCase().includes(this.state.search.toLowerCase()));
            if (filter) {
                chats = chats.filter(({ scheduled }) => scheduled);
            }
            this.setState({
                chats,
                loading: false
            });
        });
    }

    onFilter(filter) {
        this.setState({
            filter
        }, this.onSearch);
    }

    render() {
        const { chats, loading, filter } = this.state;
        return (
            <View style={{ flex: 1 }}>
                <ViewHeader title={"Chats"} filter={"Scheduled"} filterActive={filter} onFilter={this.onFilter} />
                <SearchBar placeholder={"Search for messages or users"} onChange={this.onSearch} />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Content>
                        {loading ? 
                        <ActivityIndicator style={{ marginTop: 50 }} size="large" color="#15a1fc" />
                        : <ChatsList data={chats} />}
                    </Content>
                </ScrollView>
            </View>
        );
    }
}

export default Chats;