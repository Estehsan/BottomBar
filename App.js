import React, { useCallback, useRef, useMemo } from "react";
import { StyleSheet, View, Text, Button, Image } from "react-native";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";

const App = () => {
  const data1 = [
    {
      id: 1,
      title: "hailo12",
      img: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    },
    {
      id: 2,
      title: "three two",

      img: "https://images.unsplash.com/photo-1597938430467-c7a5f65c24f2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    },
    {
      id: 3,
      title: "asdsa two",

      img: "https://images.unsplash.com/photo-1599747920141-e7e5901de37e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=376&q=80",
    },
    {
      id: 4,
      title: "asdhailosa two",

      img: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=299&q=80",
    },
  ];

  // hooks
  const sheetRef = useRef(null);
  // Position To hold Bottom Bar👇

  const snapPoints = useMemo(() => ["25%", "50%", "90%"], []);

  // callbacks
  const handleSheetChange = useCallback((index) => {
    console.log("handleSheetChange", index);
  }, []);

  // render
  const renderItem = useCallback(
    ({ item }) => (
      <View style={styles.itemContainer}>
        <View style={styles.ListOfData}>
          <Image
            resizeMode="cover"
            source={{ uri: item.img }}
            style={{
              height: 200,
              width: 200,
            }}
          />
        </View>
      </View>
    ),
    []
  );
  return (
    <View style={styles.container}>
      {/* Your Screen Content 👇 */}
      <Text style={{ color: "white" }}>Your Screen</Text>
      <BottomSheet
        ref={sheetRef}
        snapPoints={snapPoints}
        onChange={handleSheetChange}
      >
        {/* // Top Content of Bottom Bar👇 */}
        <View style={styles.TopContent}>
          <Text>This Is Top Content</Text>
        </View>
        <BottomSheetFlatList
          data={data1}
          keyExtractor={(i) => i}
          // FlatList of data👇
          renderItem={renderItem}
          // Styling of data👇
          contentContainerStyle={styles.contentContainer}
        />
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 200,
    backgroundColor: "black",
  },
  contentContainer: {
    backgroundColor: "white",
  },
  itemContainer: {
    padding: 6,
    margin: 6,
  },
  ListOfData: {
    display: "flex",
    flexDirection: "row",
    height: 200,
    width: "100%",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,

    elevation: 16,
  },
  sectionHeaderContainer: {
    backgroundColor: "white",
    padding: 6,
  },
  TopContent: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});

export default App;
