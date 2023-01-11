import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from '../../components/Header';

export default function Home() {
    return (
        <View style={styles.container}>
            <Header name="Aline Buchino"/>
            <Text>Home</Text>
            {/* <StatusBar style='light'/> CASO QUEIRA MODIFICAR A COR DO STATUS BAR DO IOS*/}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
