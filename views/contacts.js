import React, { Component } from 'react';
import { ActivityIndicator, ScrollView } from 'react-native';
import { Content, Icon, View, Text } from 'native-base';

import ContactsList from '../components/contacts/contacts_list';
import ViewHeader from '../components/header';
import SearchBar from '../components/searchBar';

const contacts = [
    {
        contact: "Aaron Guerrero",
        title: "Co-founder • AdVentures.com",
        photo: "https://apprendre-la-photo.fr/wp-content/uploads/2011/06/photo-portrait_vieil-homme_laurent-breillat-407x610.jpg"
    },
    {
        contact: "Alan Collins",
        title: "Designer • ThinkCreek",
        photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
    },
    {
        contact: "Andrea Garcia",
        title: "Director • HootSpot",
        photo: "https://www.regardsurlemonde.fr/blog/wp-content/uploads/2015/10/photographe-SteveMcCurry-fille-afghane-1.jpg"
    },
    {
        contact: "Brian Griffin",
        title: "Founder • Specaso",
        photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
    },
    {
        contact: "Christopher Sandoval",
        title: "Head of Design • Pockio",
        photo: "https://www.regardsurlemonde.fr/blog/wp-content/uploads/2015/10/photographe-SteveMcCurry-fille-afghane-1.jpg"
    },
    {
        contact: "Denise Russell",
        title: "Head of Sales • EverTaxi",
        photo: "https://apprendre-la-photo.fr/wp-content/uploads/2011/06/photo-portrait_vieil-homme_laurent-breillat-407x610.jpg"
    },
    {
        contact: "Denise Russell",
        title: "Head of Sales • EverTaxi",
        photo: "https://apprendre-la-photo.fr/wp-content/uploads/2011/06/photo-portrait_vieil-homme_laurent-breillat-407x610.jpg"
    },
    {
        contact: "Denise Russell",
        title: "Head of Sales • EverTaxi",
        photo: "https://apprendre-la-photo.fr/wp-content/uploads/2011/06/photo-portrait_vieil-homme_laurent-breillat-407x610.jpg"
    },
];

class Contacts extends Component {
    constructor(props) {
        super(props);
        console.log("props", props)
        this.state = {
            allContacts: [],
            contacts: [],
            filter: false,
            loading: true,
            search: ""
        }

        this.onSearch = this.onSearch.bind(this);
        this.onFilter = this.onFilter.bind(this);
    }

    async componentDidMount() {
        this.setState({
            allContacts: contacts,
            contacts,
            loading: false
        });
    }

    onSearch(text) {
        const { allContacts, search, filter } = this.state;
        this.setState({
            loading: true,
            search: text ? text : search
        }, () => {
            let contacts = allContacts.filter(({ contact }) => contact.toLowerCase().includes(this.state.search.toLowerCase()));
            if (filter) {
                contacts = contacts.filter(({ starred }) => starred);
            }
            this.setState({
                contacts,
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
        const { contacts, loading, filter } = this.state;
        return (
            <View style={{ flex: 1 }}>
                <ViewHeader title={"Contacts"} filter={"Starred"} filterActive={filter} onFilter={this.onFilter} />
                <SearchBar placeholder={"Search"} onChange={this.onSearch} />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ paddingHorizontal: 20 }}>
                        <View style={{ display: "flex", flexDirection: "row", marginVertical: 15 }}>
                            <Icon type="FontAwesome" name="plus-circle" style={{ color: "#16a1fe", fontSize: 20 }} />
                            <Text style={{ color: "#16a1fe", marginLeft: 15 }}>Add People Nearby</Text>
                        </View>
                        <View style={{ display: "flex", flexDirection: "row", marginVertical: 15 }}>
                            <Icon type="Ionicons" name="person-add" style={{ color: "#13b896", fontSize: 20 }} />
                            <Text style={{ color: "#13b896", marginLeft: 15 }}>Invite Friends</Text>
                        </View>
                    </View>
                    <Content>
                        {loading ? 
                        <ActivityIndicator style={{ marginTop: 50 }} size="large" color="#15a1fc" />
                        : <ContactsList data={contacts} />}
                    </Content>
                </ScrollView>
            </View>
        );
    }
}

export default Contacts;