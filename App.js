import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.searchContainer}>
          <Text>Search</Text>
        </View>
        <View style={styles.listContainer}>
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
  searchContainer: {
    backgroundColor: "green",
    padding: 16,
  },
  listContainer: {
    backgroundColor: "blue",
    padding: 16,
    flex: 1,
  },
});
