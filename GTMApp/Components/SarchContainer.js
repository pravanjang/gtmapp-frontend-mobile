import { Button, StyleSheet, TextInput, View } from "react-native";


const SearchContainer = (props) => {
    return(
        <View style={styles.topContainer}>
            <View style={styles.searchContainer}>
                <TextInput style={styles.searchTextInput}/>
            </View>
            <View style={styles.buttonContainer}>
                <Button title="Search" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    topContainer: {
        flexDirection: 'row',
        margin: 5,
        padding: 5,
        //borderColor: 'black',
        //borderWidth: 2,
        maxHeight: 80,
    },
    searchTextInput: {
        padding: 8,
        borderWidth: 2,
        borderColor: 'blue',
    },
    searchContainer: {
        flex: 3,
        margin: 10, 
        padding: 5,
        //borderWidth: 2,
        //borderColor: 'green',
    },
    buttonContainer: {
        flex: 1,
        //margin: 5,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
        //borderColor: 'blue',
        //borderWidth: 1,
    }
});

export default SearchContainer;