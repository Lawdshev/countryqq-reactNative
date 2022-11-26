import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'

function Countrycard({name,continent,emoji}) {
  return (
    <View style={styles.container}>
       <View style={styles.nameCont}>
            <Text>{emoji}</Text>
            <Text style={styles.name}>{name}</Text>
        </View>
        <View style={styles.nameCont}>
            <Text>Continent:</Text>
            <Text style={styles.name}>{continent.name}</Text>
        </View>
        <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>see details...</Text>
        </TouchableOpacity> 
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        margin:'20px',
    },
    nameCont:{
        display: 'flex',
        flexDirection: 'row'
    },
    name:{
        marginLeft: 5,
        fontWeight: 'bold',
        marginBottom: '5px'
    },
    btn:{
        backgroundColor: 'black',
        textAlign: 'center',
        padding: '5px',
        width: '30%'
    },
    btnText:{
        fontWeight: 'bold',
        fontStyle: 'italic',
        color: 'white',
    }
   
})
export default Countrycard;