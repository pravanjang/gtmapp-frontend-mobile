import { StyleSheet, View, Text } from "react-native";

const ListItem = ({title, tgtdate}) => {
    return (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.date}>{tgtdate}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#f0f8ff',
        marginVertical: 2,
        padding:5,
      },
      title: {
        fontSize: 22,
        flex: 3,
      },
      date:{
        flex: 1,
        fontSize: 16,
      }
});

export default ListItem;