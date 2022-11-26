import { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View, Button, TextInput, Alert } from 'react-native';

export default function App() {
  const [text,setText] = useState('')
  const [todo,setTodo] = useState([
    {title:'react',key: 1},
    {title:'node',key: 2},
    {title:'next',key: 3},
  ])

  const addTodo = () =>{
    if(text.length > 3  )
    {const newTodo = {
      title: text,
      key: todo.length+1,
    }
    setTodo((prevState)=>[...prevState,newTodo])}
    else{
      Alert.alert('Error', 'You have not added a todo', [
        {
          text: "Ask me later",
          onPress: () => console.log("Ask me later pressed")
        }
      ])
    }
  }

  const deleteTodo = (key) =>{
    setTodo(prevTodo=>{
      return prevTodo.filter(todo=> todo.key !== key)
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.write}>TODO LIST</Text>
      </View>
      <View>
        <TextInput
          style={styles.input}
          placeholder='new todo...'
          value={text}
          onChange={(e)=>setText(e.target.value)}
        />
        <Button
          title= 'ADD TODO'
          color= 'blue'
          onPress= {addTodo}
        />
      </View>
      <FlatList
        data={todo}
        renderItem={
          ({item})=> (<TouchableOpacity style={styles.todo}>
            <Text style={styles.todoTexts}>
              {item.key}
            </Text>
            <Text style={styles.todoTexts}>
              {item.title}
            </Text>
            <Button
            onPress={()=>deleteTodo(item.key)}
              title="delete"
              color="red"
            />
          </TouchableOpacity>)
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  header: {
    width: '100vw',
    backgroundColor: 'red',
    height: '10%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  write: {
    textAlign: 'center',
    color: 'white',
    fontSize: 'large',
    fontWeight: 'bold',
    letterSpacing: '5px'
  },
  todo: {
    paddingLeft: '10px',
    marginTop: '5px',
    width: '100vw',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    border: 'solid 2px blue',
  },
  todoTexts: {
    fontSize: "large",
    fontWeight: 'bold',
    color: 'blue'
  },
  input: {
    padding: '8px',
    marginTop: '5px',
    marginBottom: '3px',
    border: 'solid 2px blue',
  }
});
