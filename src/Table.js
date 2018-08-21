// [// @flow
//
// import React from "react";
// import { FlatList, ScrollView, Text, View, StyleSheet } from "react-native";
//
// export const Table = ({ data }: Props) => (
//     // Vertical scroll
//     <ScrollView>
//         {/* Vertical scroll only */}
//         <View>
//             <HeaderCell style={{ borderRightWidth: 0 }} value="Plot" />
//             {data.map(item => (
//                 <Cell
//                     key={item.id}
//                     onPress={() => item.onPress}
//                     style={{ borderRightWidth: 0 }}
//                     value={item.value}
//                 />
//             ))}
//         </View>
//
//         {/* Horizontal scroll */}
//         <ScrollView
//             showsHorizontalScrollIndicator={false}
//             bounces={false}
//             horizontal
//         >
//             <View>
//                 <View style={{ flexDirection: "row" }}>
//                     {/* Columns are defined  */}
//                     {COLUMNS.map(column => (
//                         <HeaderCell
//                             key={column.label}
//                             value={column.label}
//                             style={{ width: column.width }}
//                         />
//                     ))}
//                 </View>
//                 {data.map(item => (
//                     <View key={item.id} style={{ flexDirection: "row" }}>
//                         {COLUMNS.map(column => (
//                             <Cell
//                                 key={column.label}
//                                 style={{ width: column.width }}
//                                 value={R.pathOr(
//                                     item,
//                                     column.pathToItem,
//                                     "defaultValue"
//                                 )}
//                             />
//                         ))}
//                     </View>
//                 ))}
//             </View>
//         </ScrollView>
//     </ScrollView>
// );
//
// const styles = StyleSheet.create({
//     headerWord: {
//         fontSize: 12,
//         marginTop: 8,
//         width: 140
//     },
//     word: {
//         fontSize: 12,
//         width: 140,
//         marginTop: 48
//     },
//     name: {
//         marginTop: 10,
//         position: "absolute",
//         paddingLeft: 10,
//         zIndex: 10,
//         fontSize: 15
//     },
//     header: {
//         backgroundColor: "#f7f7f7",
//         shadowOffset: { width: 0, height: 2 },
//         shadowColor: "black",
//         shadowOpacity: 0.4,
//         paddingLeft: 18,
//         height: 28,
//         flexDirection: "row"
//     },
//     card: {
//         backgroundColor: "#ffffff",
//         width: 980,
//         height: 74,
//         borderRadius: 8,
//         marginTop: 8,
//         marginLeft: 10,
//         flexDirection: "row",
//         paddingLeft: 8
//     }
// });
// ]


//
//
// import ScrollView from "react-native-directed-scrollview";
// import { FlatList, Text, View } from "react-native";
// import React from "react";
//
// {/*Horizontal scrolling*/}
// {/*<ScrollView horizontal={true}>*/}
// {this.renderFlatListStickyHeader()}
// {/*Vertical scrolling*/}
// <ScrollView>
//     {dummyData.map((item, index) => (
//         <View
//             key={item.key}
//             style={{
//
//                 // borderRightWidth: 0,
//                 marginTop: 44,
//                 marginLeft: 20,
//                 position: "absolute",
//                 zIndex: 10
//             }}
//         >
//             <Text style={{ marginTop: 82 * index }}>
//                 {item.name}
//             </Text>
//         </View>
//     ))}
//
//     {/*horizontal scrolling*/}
//     <ScrollView horizontal={true}>
//         {/*vertical scrolling disabled*/}
//         <FlatList
//             data={dummyData}
//             ListHeaderComponent={
//                 this.renderFlatListStickyHeader()
//             }
//             stickyHeaderIndices={[0]}
//             scrollEnabled={false}
//             // horizontal={true}
//             renderItem={({ item }) => (
//                 <View style={styles.card}>
//                     {/*<Text style={styles.word}>{item.key}</Text>*/}
//                     {/*<Text style={styles.name}>{item.name}</Text>*/}
//                     <Text style={styles.word}>{item.type}</Text>
//                     <Text style={styles.word}>{item.place}</Text>
//                     <Text style={styles.word}>{item.date}</Text>
//                     <Text style={styles.word}>{item.user}</Text>
//                     <Text style={styles.word}>{item.value1}</Text>
//                     <Text style={styles.word}>{item.value2}</Text>
//                     <Text style={styles.word}>{item.value3}</Text>
//                 </View>
//             )}
//         />
//     </ScrollView>
// </ScrollView>