import React, { Component } from 'react';
import { ActivityIndicator, ScrollView } from 'react-native';
import { Content, View } from 'native-base';

import CallsList from '../components/calls/calls_list';
import ViewHeader from '../components/header';
import SearchBar from '../components/searchBar';
import DontDisturb from '../components/calls/dont_disturb';

const calls = [
    {
        interlocutor: "Larry Marshall",
        received: true,
        missed: true,
        time: "now",
        photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
    },
    {
        interlocutor: "Julie Alvarado",
        received: false,
        time: "3 min ago",
        photo: "https://www.regardsurlemonde.fr/blog/wp-content/uploads/2015/10/photographe-SteveMcCurry-fille-afghane-1.jpg"
    },
    {
        interlocutor: "Beatrice Wagner",
        received: false,
        time: "20 min ago",
        photo: "https://apprendre-la-photo.fr/wp-content/uploads/2011/06/photo-portrait_vieil-homme_laurent-breillat-407x610.jpg"
    },
    {
        interlocutor: "Francine Boyd",
        received: true,
        time: "2 hours ago",
        photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
    },
    {
        interlocutor: "Randy Young",
        received: true,
        missed: true,
        time: "3 days ago",
        photo: "https://www.regardsurlemonde.fr/blog/wp-content/uploads/2015/10/photographe-SteveMcCurry-fille-afghane-1.jpg"
    },
    {
        interlocutor: "Frank Lee",
        received: true,
        time: "4 days ago",
        photo: "https://apprendre-la-photo.fr/wp-content/uploads/2011/06/photo-portrait_vieil-homme_laurent-breillat-407x610.jpg"
    },
];

class Calls extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allCalls: [],
            calls: [],
            loading: true,
            search: "",
            filter: false,
            mute: true
        }

        this.onSearch = this.onSearch.bind(this);
        this.onFilter = this.onFilter.bind(this);
        this.toggleMute = this.toggleMute.bind(this);
    }

    async componentDidMount() {
        this.setState({
            allCalls: calls,
            calls,
            loading: false
        });
    }

    onSearch(text) {
        const { allCalls, search, filter } = this.state;
        this.setState({
            loading: true,
            search: text ? text : search
        }, () => {
            let calls = allCalls.filter(({ interlocutor }) => interlocutor.toLowerCase().includes(this.state.search.toLowerCase()));
            if (filter) {
                calls = calls.filter(({ missed }) => missed);
            }
            this.setState({
                calls,
                loading: false
            });
        });
    }

    onFilter(filter) {
        this.setState({
            filter
        }, this.onSearch);
    }

    toggleMute() {
        this.setState({ mute: !this.state.mute });
    }

    render() {
        const { calls, loading, filter, mute } = this.state;
        return (
            <View style={{ flex: 1 }}>
                <ViewHeader title={"Calls"} filter={"Missed"} filterActive={filter} onFilter={this.onFilter} />
                <SearchBar placeholder={"Search for calls"} onChange={this.onSearch} />
                <DontDisturb isEnabled={mute} onToggle={this.toggleMute} />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Content>
                        {loading ? 
                        <ActivityIndicator style={{ marginTop: 50 }} size="large" color="#15a1fc" />
                        : <CallsList data={calls} />}
                    </Content>
                </ScrollView>
            </View>
        );
    }
}

export default Calls;