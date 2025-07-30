import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Dimensions, ScrollView} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { styles } from './style';




export default function VacinaTela (){

    const navigation = useNavigation<NavigationProp<any>>();

    return (
       <View style={styles.container}>
            <View style={styles.boxTop}>
                <View style={styles.sideContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('List')} style={styles.backIcon}>
                        <AntDesign
                            name="arrowleft"
                            size={26}
                    
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.centerContainer}>
                    <Text style={{fontSize:24, fontWeight:"bold"}}>
                        Vacina
                    </Text>
                    <Text style={{fontSize:24, fontWeight:"bold", color:'#1E90FF'}}>
                        Plus
                    </Text>
                </View>
            </View>
            
            <View style={styles.test}>
                <Text style={styles.sectionTitle}>Vacinas</Text>
            </View>

    
                {/*Primeira etapa*/}
                <View style={styles.content}> 
                    <View style={styles.verticalLine} />
                    <View style={styles.item}>
                        <View style={styles.circle}/>
                        <View style={styles.contentText}>
                            <Text style={styles.ageContent}>A partir de 2 meses:</Text>
                            <Text style={styles.vaccineContent}>Vacina A, B, C</Text>
                            <Text style={styles.dataContent}>- De 10 de Abril à 15 de Maio</Text>
                            <Text style={styles.localContent}>(procurar unidade médica mais próxima)</Text>
                        </View>
                    </View>
                    {/*Segunda etapa */}
                    
                    <View style={styles.item}>
                        <View style={styles.circle}/>
                        <View style={styles.contentText}>
                            <Text style={styles.ageContent}>De 2 a 12 meses:</Text>
                            <Text style={styles.vaccineContent}>Vacina D</Text>
                            <Text style={styles.dataContent}>- De 9 de Abril à 13 de Abril</Text>
                            <Text style={styles.localContent}>(procurar unidade médica mais próxima)</Text>
                        </View>
                    </View>
                    {/* Terceira etapa */}
                    
                    <View style={styles.item}>
                        <View style={styles.circle}/>
                        <View style={styles.contentText}>
                            <Text style={styles.ageContent}>De 1 a 3 anos:</Text>
                            <Text style={styles.vaccineContent}>Vacina E, F, G</Text>
                            <Text style={styles.localContent}>(procurar unidade médica mais próxima)</Text>
                        </View>
                    </View>
    
                </View>
           

       </View>
    )
}

