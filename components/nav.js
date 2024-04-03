import { StyleSheet, Text, View,TextInput ,FlatList} from 'react-native';
import{useState, useEffect} from 'react'


export function Nav() {

   const [gitList,setGitList]=useState([]);
   const [search,setSearch]=useState("");

   const fetchApi= async (nome)=>{
       const response = await fetch(
         `https://api.github.com/users/${nome}/repos`
      )
       const data = await response.json()
       setGitList(data)
       console.log(erro)
     }

   const submission= ()=>{
     const inputt= search.toLowerCase().trim().split(" ").join('')
     console.log(inputt)
     if(inputt!==""){
       fetchApi(inputt)
       setSearch("")
       }
     }

  return (
    <View style={styles.container}>

       <TextInput style={styles.input} value={search} onChangeText={setSearch} onSubmitEditing={submission} selectionColor="red" placeholder='Buscar repositórios'/>
       <FlatList style={{flex:1,width:"100%", marginTop:30}} data={gitList} renderItem={({item})=>{
          return(
            <View style={{flex:1,borderWidth:1,paddingTop:10,paddingBottom:20,borderBlockColor:'#04151a', backgroundColor:'#071e26', marginBottom:5,
            marginLeft:10, marginRight:10
            }}>
                   <Text style={styles.id}>ID : {item.id}</Text>
                    <Text style={[styles.nome,{paddingBottom:5}]}>Nome : {item.name}</Text>
                    <Text style={styles.nome}>Data : {new Date (item.created_at).toLocaleDateString()}</Text>
            </View>
     )}}
       />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0b2d39',
    alignItems: 'center',
    justifyContent: 'center',
    color:"white",
    paddingTop:20,
    width:"100%",
    flex:1
  },
  colors:{
    color:"white"
  },
  input:{
    height:35,
    width:240,
    backgroundColor:'#071e26',
    borderRadius:5,
    borderColor:'#071e26',
    borderWidth:2,
    color:'#d3eaf2',
    textAlign:'center'
  },
  id:{
    width:'100%',
    color:'#838e92',
    paddingLeft:10
  },
  nome:{
    color:'#838e92',
    width:'100%',
    paddingLeft:10
  }
});