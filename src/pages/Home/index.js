import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';

const list = [
    {
        id: 1,
        label: "Boleto conta luz",
        value: '250,50',
        data: '10/01/2023',
        type: 0 // despesas
    },
    {
        id: 2,
        label: "Pix cliente Maria",
        value: '1600,00',
        data: '11/01/2023',
        type: 1 // receita / entrada
    },
    {
        id: 3,
        label: "Salário",
        value: '4.500',
        data: '12/01/2023',
        type: 1
    },
]

export default function Home() {
    return (
        <View style={styles.container}>
            <Header name="Aline Buchino" />

            <Balance saldo="7.437,00" gastos="-2.285,00" />

            <Text style={styles.title}>Últimas movimentações</Text>

            <FlatList
                style={styles.list}
                data={list}
                keyExtractor={(item) => String(item.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => <Movements data={item}/>}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        margin:14
    },
    list: {
        marginRight:14,
        marginLeft:14
    }
});
