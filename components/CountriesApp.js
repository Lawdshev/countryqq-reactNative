import React,{useState,useEffect} from 'react'
import { ScrollView, TextInput, View, StyleSheet,Button,Text, TouchableOpacity } from 'react-native';
import CountryCard from './CountryCard';

function CountriesApp() {
    const [input, setInput] = useState('');
    const [error,setError] = useState('');
    const [list,setList] = useState([]);
    const [searchList,setSearchList] = useState([]);

    useEffect(() => {
        const queryFetch =  async () => {
            const res = await fetch('https://countries.trevorblades.com/', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    query: `
                query {
                    countries{
                     name
                     code
                     emoji
                     continent{
                       name
                     }
                   }
                   }
              `
                })
            });
            const data = await res.json();
            setList(data.data.countries);}
            queryFetch()
      }, [])

      const search =()=>{
        if(input==''){
            setError('Enter Valid Keyword')
        }else{
            setError('Country not found')
        }
        const newList = list.filter(country=>{
          return country.name.toLowerCase().includes(input.toLowerCase());
        })
        setSearchList(newList)
      }

  return (
    <View style={styles.container}>
        <View style={styles.head}>
            <Text style={styles.zeros}>000</Text>
            <Text style={styles.title}>Countries Catalogue</Text>    
        </View>
        <View style={styles.textInput}>
            <Text style={styles.keyword}>Keyword</Text>
            <View style={styles.search}>
                <TextInput
                    style={styles.input}
                    onChangeText={(value) => {setInput(value);setError('')}}
                    value={input}
                />
                <TouchableOpacity style={styles.btn} onPress={search}>
                   <Text style={styles.searchText}>search</Text>
                </TouchableOpacity>
            </View>
        </View>
       <ScrollView>
            {
                searchList.length>0 && input !== ''? searchList.map(country=>{
                    return  <CountryCard key={country.code}  {...country} />
                }): <Text className='mt-4 mx-auto'>{error}</Text>
            }  
       </ScrollView>
    </View>
  )
}

export default CountriesApp

const styles = StyleSheet.create({
    container:{
        border: 'solid 3px black',
        height: '90vh',
        margin: '20px'
    },
    head:{
        display:'flex',
        flexDirection: 'row',
        paddingVertical: 7,
        paddingHorizontal: 5,
        borderBottomColor: 'black',
        borderBottomWidth: '3px',
    },
    zeros:{
        letterSpacing: '10px',
        fontSize: 'medium',
        fontStyle: 'italic'
    },
    title:{
        fontSize: 'medium',
        marginLeft: '20%',
        fontStyle: 'italic'
    },
    textInput:{
        padding: '10px',
        borderBottomColor: 'black',
        borderBottomWidth: '3px'
    },
    search:{
        width: '100vw',
        display: 'flex',
        flexDirection: 'row'
    },
    keyword:{
        fontSize: 'large',
        fontWeight: 'bold'
    },
    input:{
      border:'2px black solid',
      width: '40%',
      padding: 3
    },
    btn:{
        backgroundColor: 'black',
        width: '20%',
        textAlign: 'center',
        padding: '3px',
    },
    searchText:{
        fontWeight: 'bold',
        fontStyle: 'italic',
        color: 'white',
    }
})