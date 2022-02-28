import { StyleSheet, Text, View,Image } from 'react-native';
import { Card, Title } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';

export default function Home() {
  return (
    <View style={styles.container}>

        <LinearGradient colors={['#2F69EE','#ABC5FF']} style={styles.cover} />
        
        <View style={{alignItems:'center'}}>

            <Image source={{uri:'https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_960_720.jpg'}} style={styles.img} /> 

          <View style={{alignItems:'center',marginTop:20}}>    
            <Title>Umer Rehan</Title>
            <Text>Hello World!!!</Text>
          </View>

        </View>

        <View style={styles.mainview}>

          <Card style={styles.card}>

            <View style={styles.cardview}>

                <MaterialIcons name="email" size={20} color="#2F69EE" />
                <Text style={{paddingLeft:10}}>abc@gmail.com</Text>

            </View>
          </Card>
          <Card style={styles.card}>

            <View style={styles.cardview}>

                <MaterialIcons name="email" size={20} color="#2F69EE" />
                <Text style={{paddingLeft:10}}>abc@gmail.com</Text>

            </View>
          </Card>
          <Card style={styles.card}>

            <View style={styles.cardview}>

                <MaterialIcons name="email" size={20} color="#2F69EE" />
                <Text style={{paddingLeft:10}}>abc@gmail.com</Text>

            </View>
          </Card>
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    cover:{
        height:180,
    },
    img:{
        height:120,
        width:120,
        borderRadius:55,
        marginTop:-55
    },
    mainview:{
      margin:25,
    },
    cardview:{
      flexDirection:'row',
      padding:10,
    },
    card:{
      marginBottom:12,
      backgroundColor:"#ABC5FF",
    }
  
  });