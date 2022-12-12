import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.search}>
          <Searchbar placeholder="Search"/>
        </View>
        <View style={styles.list}>
          <Text>List</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    flexDirection: "column",
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 16,
  },
  list: {
    backgroundColor: "blue",
    padding: 16,
    flex: 1,
  },
});
