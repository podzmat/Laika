/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 *
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, ScrollView, FlatList } from "react-native";

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView horizontal={true}>
                    <FlatList
                        data={[
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
                            }
                        ]}
                        ListHeaderComponent={
                            <View style={styles.header}>
                                <Text style={styles.headerWord}>Typ</Text>
                                <Text style={styles.headerWord}>Místo</Text>
                                <Text style={styles.headerWord}>Datum</Text>
                                <Text style={styles.headerWord}>Uživatel</Text>
                                <Text style={styles.headerWord}>Hodnota 1</Text>
                                <Text style={styles.headerWord}>Hodnota 2</Text>
                                <Text style={styles.headerWord}>Hodnota 3</Text>
                            </View>
                        }
                        renderItem={({ item }) => (
                            <View style={styles.card}>
                                {/*<Text style={styles.word}>{item.key}</Text>*/}
                                <Text style={styles.name}>{item.name}</Text>
                                <Text style={styles.word}>{item.type}</Text>
                                <Text style={styles.word}>{item.place}</Text>
                                <Text style={styles.word}>{item.date}</Text>
                                <Text style={styles.word}>{item.user}</Text>
                                <Text style={styles.word}>{item.value1}</Text>
                                <Text style={styles.word}>{item.value2}</Text>
                                <Text style={styles.word}>{item.value3}</Text>
                            </View>
                        )}
                        //horizontal={true}
                    />
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
        flexDirection: "row"
    },
    card: {
        backgroundColor: "#ffffff",
        width: 980,
        height: 74,
        borderRadius: 8,
        marginTop: 8,
        marginLeft: 10,
        flexDirection: "row",
        paddingLeft: 8
    },
    container: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: "#eeeeee"
    }
});
