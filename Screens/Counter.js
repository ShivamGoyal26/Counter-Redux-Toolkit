import React, { useEffect } from 'react'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Decrement, Increment, incrementByAmount } from '../Redux/Counter'

const Counter = props => {

    useEffect(() => {
        console.log("This is the useEffect")
    }, [])

    const count = useSelector(state => state.counter.Count)
    const dispatch = useDispatch();

    return (
        console.log("Hello"),
        <View style={{ backgroundColor: 'white', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 20 }}>
                {`Counter is ${count}`}
            </Text>
            <TouchableOpacity
                style={styles.textContanier}
                onPress={() => {
                    dispatch(Increment())
                }}>
                <Text style={{ fontSize: 20 }}>Increment</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.textContanier}
                onPress={() => {
                    dispatch(Decrement())
                }}>
                <Text style={{ fontSize: 20 }}>Decrement</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.textContanier}
                onPress={() => {
                    dispatch(incrementByAmount(33))
                }}>
                <Text style={{ fontSize: 20 }}>Inc By 33</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    textContanier: {
        borderRadius: 20,
        borderColor: "grey",
        borderWidth: 1,
        padding: 20,
        marginVertical: 10
    }
})

export default Counter