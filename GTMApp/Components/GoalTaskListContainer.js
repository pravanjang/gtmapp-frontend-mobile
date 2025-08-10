import { StyleSheet, View, FlatList, RefreshControl } from "react-native";
import ListItem from "./ListItem";
import { useCallback, useState } from "react";

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      tgtDate: '22/01/2025',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      tgtDate: '02/09/2024',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      tgtDate: '22/08/2024',
    },
  ];


const GoalTaskListContainer =() => {

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

    return (
        <View style={styles.topContainer}> 
            <FlatList
                data={DATA}
                renderItem={({item}) => <ListItem title={item.title} tgtdate={item.tgtDate} />}
                keyExtractor={item => item.id}
                style={{ backgroundColor: 'skyblue', width: "100%" }} 
                refreshControl= {
                  <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    topContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    list:{ 
        backgroundColor: 'skyblue', 
        width: "100%" 
    },
});

export default GoalTaskListContainer;
