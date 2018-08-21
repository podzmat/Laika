/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 *
 * @flow
 */

import React, { Component } from "react";
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ScrollView,
    FlatList,
} from "react-native";

// TODO complete this shit.

type Props = {};
export default class App extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {countOffset: 0};

    }

/*<View style={[styles.header, { marginTop: this.state.countOffset }]}>*/


renderFlatListStickyHeader = () => {
        var stickyHeaderView = (
            <View style={styles.header}>
                <Text style={styles.headerWord}>Typ</Text>
                <Text style={styles.headerWord}>Místo</Text>
                <Text style={styles.headerWord}>Datum</Text>
                <Text style={styles.headerWord}>Uživatel</Text>
                <Text style={styles.headerWord}>Hodnota 1</Text>
                <Text style={styles.headerWord}>Hodnota 2</Text>
                <Text style={styles.headerWord}>Hodnota 3</Text>
            </View>
        );

        return stickyHeaderView;
    };

    // handleScroll = (event: Object) => {
    // console.log("y: "+event.nativeEvent.contentOffset.y);
    // //console.log("x: "+event.nativeEvent.contentOffset.x);
    //     let countOffset = event.nativeEvent.contentOffset.y;
    //     this.setState(countOffset);
    // return countOffset
    // };

    handleScroll = (event: Object) => this.setState({ countOffset: event.nativeEvent.contentOffset.y })


    render() {
        let dummyData = [
            {
                key: "1",
                name: "První pokus",
                type: "PV42",
                place: "Zlín",
                date: "Pondělí 08.09.2018",
                user: "Petr K.",
                value1: "2500",
                value2: "7635",
                value3: "8264"
            },
            {
                key: "2",
                name: "Letní práce u Johanu",
                type: "PM276",
                place: "Praha",
                date: "Středa 10.12.2087",
                user: "Tomáš M.",
                value1: "9862",
                value2: "3073",
                value3: "1973"
            },
            {
                key: "3",
                name: "Víkend u babičky",
                type: "PP330",
                place: "Karlovy Vary",
                date: "8.2.1997",
                user: "Adam T.",
                value1: "7265",
                value2: "2767",
                value3: "8836"
            },
            {
                key: "4",
                name: "Poslední pokus",
                type: "PT72",
                place: "Víděn",
                date: "2.2.1945",
                user: "Honza K.",
                value1: "2736",
                value2: "8743",
                value3: "1368"
            },
            {
                key: "11425",
                name: "První pokus",
                type: "PV42",
                place: "Zlín",
                date: "Pondělí 08.09.2018",
                user: "Petr K.",
                value1: "2500",
                value2: "7635",
                value3: "8264"
            },
            {
                key: "20908",
                name: "Letní práce u Johanu",
                type: "PM276",
                place: "Praha",
                date: "Středa 10.12.2087",
                user: "Tomáš M.",
                value1: "9862",
                value2: "3073",
                value3: "1973"
            },
            {
                key: "32336",
                name: "Víkend u babičky",
                type: "PP330",
                place: "Karlovy Vary",
                date: "8.2.1997",
                user: "Adam T.",
                value1: "7265",
                value2: "2767",
                value3: "8836"
            },
            {
                key: "123085",
                name: "První pokus",
                type: "PV42",
                place: "Zlín",
                date: "Pondělí 08.09.2018",
                user: "Petr K.",
                value1: "2500",
                value2: "7635",
                value3: "8264"
            },
            {
                key: "2092",
                name: "Letní práce u Johanu",
                type: "PM276",
                place: "Praha",
                date: "Středa 10.12.2087",
                user: "Tomáš M.",
                value1: "9862",
                value2: "3073",
                value3: "1973"
            },
            {
                key: "3345",
                name: "Víkend u babičky",
                type: "PP330",
                place: "Karlovy Vary",
                date: "8.2.1997",
                user: "Adam T.",
                value1: "7265",
                value2: "2767",
                value3: "8836"
            },
            {
                key: "6541",
                name: "První pokus",
                type: "PV42",
                place: "Zlín",
                date: "Pondělí 08.09.2018",
                user: "Petr K.",
                value1: "2500",
                value2: "7635",
                value3: "8264"
            },
            {
                key: "3422",
                name: "Letní práce u Johanu",
                type: "PM276",
                place: "Praha",
                date: "Středa 10.12.2087",
                user: "Tomáš M.",
                value1: "9862",
                value2: "3073",
                value3: "1973"
            },
            {
                key: "3123",
                name: "Víkend u babičky",
                type: "PP330",
                place: "Karlovy Vary",
                date: "8.2.1997",
                user: "Adam T.",
                value1: "7265",
                value2: "2767",
                value3: "8836"
            },
            {
                key: "143",
                name: "První pokus",
                type: "PV42",
                place: "Zlín",
                date: "Pondělí 08.09.2018",
                user: "Petr K.",
                value1: "2500",
                value2: "7635",
                value3: "8264"
            },
            {
                key: "211",
                name: "Letní práce u Johanu",
                type: "PM276",
                place: "Praha",
                date: "Středa 10.12.2087",
                user: "Tomáš M.",
                value1: "9862",
                value2: "3073",
                value3: "1973"
            },
            {
                key: "323",
                name: "Víkend u babičky",
                type: "PP330",
                place: "Karlovy Vary",
                date: "8.2.1997",
                user: "Adam T.",
                value1: "7265",
                value2: "2767",
                value3: "8836"
            }
        ];
        console.log("y - state value: "+this.state.countOffset);

        return (
            <View style={styles.container}>
                {/*Horizontal scrolling*/}
                {/*<ScrollView horizontal={true}>*/}
                {/*{this.renderFlatListStickyHeader()}*/}
                {/*Vertical scrolling*/}
                <ScrollView
                    onScroll={this.handleScroll}
                    scrollEventThrottle={16}
                    style={{zIndex: 0}}
                >
                    {dummyData.map((item, index) => (
                        <View
                            key={item.key}
                            style={{

                                // borderRightWidth: 0,
                                marginTop: 44,
                                marginLeft: 20,
                                position: "absolute",
                                zIndex: 10
                            }}
                        >

                            <Text style={{ marginTop: 82 * index }}>
                                {item.name}
                            </Text>
                        </View>
                    ))}

                    {/*horizontal scrolling*/}
                    <ScrollView
                        horizontal={true}

                    >
                        {/*vertical scrolling disabled*/}
                        <FlatList
                            data={dummyData}
                            ListHeaderComponent={this.renderFlatListStickyHeader()}
                            // stickyHeaderIndices={[0]}
                            scrollEnabled={false}
                            // horizontal={true}
                            renderItem={({ item }) => (
                                <View style={styles.card}>
                                    {/*<Text style={styles.word}>{item.key}</Text>*/}
                                    {/*<Text style={styles.name}>{item.name}</Text>*/}
                                    <Text style={styles.word}>{item.type}</Text>
                                    <Text style={styles.word}>{item.place}</Text>
                                    <Text style={styles.word}>{item.date}</Text>
                                    <Text style={styles.word}>{item.user}</Text>
                                    <Text style={styles.word}>{item.value1}</Text>
                                    <Text style={styles.word}>{item.value2}</Text>
                                    <Text style={styles.word}>{item.value3}</Text>
                                </View>
                            )}
                        />
                    </ScrollView>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headerWord: {
        fontSize: 12,
        marginTop: 8,
        width: 140
    },
    word: {
        fontSize: 12,
        width: 140,
        marginTop: 48
    },
    name: {
        marginTop: 10,
        position: "absolute",
        paddingLeft: 10,
        zIndex: 10,
        fontSize: 15
    },
    header: {
        backgroundColor: "#f7f7f7",
        shadowOffset: { width: 0, height: 2 },
        shadowColor: "black",
        shadowOpacity: 0.4,
        paddingLeft: 18,
        height: 28,
        flexDirection: "row",
         zIndex: 1,
        //position: "absolute",
    },
    card: {
        backgroundColor: "#ffffff",
        width: 980,
        height: 74,
        borderRadius: 8,
        marginTop: 8,
        marginLeft: 10,
        flexDirection: "row",
        paddingLeft: 8,
        zIndex: 0,
    },
    container: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: "#eeeeee"
    }
});
