import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image, Linking, Animated, Dimensions } from "react-native";
import { style } from "./style";
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { useNavigation, NavigationProp } from '@react-navigation/native';

// Interface para as palmas animadas
interface ClapAnimation {
    id: number;
    animatedValue: Animated.Value;
    leftPosition: number;
}

// Tela Sobre Nós
export default function SobreNos() {
    const navigation = useNavigation<NavigationProp<any>>();
    const [claps, setClaps] = useState<ClapAnimation[]>([]);
    const [isAnimating, setIsAnimating] = useState(false);
    const [clickCount, setClickCount] = useState(0);
    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;
    
    // Configurações de controle
    const MAX_SIMULTANEOUS_CLAPS = 50; // Máximo de palmas na tela
    const CLICK_COOLDOWN = 300; // Cooldown entre cliques em ms
    const MAX_CLICKS_PER_BURST = 5; // Máximo de cliques em sequência
    
    // Função para criar animação de palmas
    const createClapAnimation = () => {
        // Verificar se já há muitas animações ou se está em cooldown
        if (isAnimating || claps.length >= MAX_SIMULTANEOUS_CLAPS || clickCount >= MAX_CLICKS_PER_BURST) {
            return;
        }
        
        setIsAnimating(true);
        setClickCount(prev => prev + 1);
        
        const newClaps: ClapAnimation[] = [];
        
        // Criar 5 palmas com posições aleatórias (reduzido para melhor performance)
        for (let i = 0; i < 5; i++) {
            const animatedValue = new Animated.Value(screenHeight);
            const leftPosition = Math.random() * (screenWidth - 50);
            
            newClaps.push({
                id: Date.now() + i + Math.random(),
                animatedValue,
                leftPosition
            });
            
            // Animar cada palma para subir
            Animated.timing(animatedValue, {
                toValue: -100,
                duration: 2000 + Math.random() * 1000,
                useNativeDriver: true,
            }).start();
        }
        
        // Adicionar novas palmas às existentes ao invés de substituir
        setClaps(prevClaps => [...prevClaps, ...newClaps]);
        
        // Cooldown para próximo clique
        setTimeout(() => {
            setIsAnimating(false);
        }, CLICK_COOLDOWN);
        
        // Reset do contador de cliques após um tempo
        setTimeout(() => {
            setClickCount(prev => Math.max(0, prev - 1));
        }, 1000);
        
        // Limpar palmas específicas após a animação
        setTimeout(() => {
            setClaps(prevClaps => 
                prevClaps.filter(clap => 
                    !newClaps.some(newClap => newClap.id === clap.id)
                )
            );
        }, 3500);
    };
    
    return (
        <ScrollView style={style.container}>
            {/* Cabeçalho */}
            <View style={style.header}>
                <TouchableOpacity 
                    onPress={() => navigation.goBack()}
                    style={style.backButton}
                >
                    <AntDesign name="arrowleft" size={24} color="#000000" />
                </TouchableOpacity>
                <Text style={style.headerText}>Sobre Nós</Text>
                <TouchableOpacity 
                    onPress={createClapAnimation}
                    style={style.clapButton}
                >
                    <Text style={style.clapEmoji}>👏</Text>
                </TouchableOpacity>
            </View>

            {/* Logo da Software House */}
            <View style={style.logoContainer}>
                <Image 
                    source={require('../../assets/logo_SH_UNDB_LONGA.png')}
                    style={style.logo}
                    resizeMode="contain"
                />
            </View>

            {/* Conteúdo principal */}
            <View style={style.content}>
                {/* Seção sobre a Software House */}
                <View style={style.section}>
                    <Text style={style.sectionTitle}>Sobre a Software House UNDB</Text>
                    <Text style={style.sectionText}>
                        A Software House da UNDB é um laboratório de inovação tecnológica que desenvolve soluções digitais 
                        para problemas reais da sociedade. Formada por estudantes e professores, nossa equipe trabalha 
                        com metodologias ágeis e tecnologias modernas para criar aplicações que fazem a diferença.
                    </Text>
                </View>

                {/* Seção sobre o Projeto VacinaPLUS */}
                <View style={style.section}>
                    <Text style={style.sectionTitle}>Sobre o VacinaPLUS</Text>
                    <Text style={style.sectionText}>
                        O VacinaPLUS é um aplicativo desenvolvido para facilitar o controle e acompanhamento do calendário 
                        de vacinação. Nossa missão é promover a saúde pública através da tecnologia, oferecendo uma 
                        ferramenta intuitiva e confiável para que você nunca perca uma data importante de vacinação.
                    </Text>
                    <Text style={style.sectionText}>
                        Com funcionalidades como lembretes personalizados, histórico de vacinas e calendário interativo, 
                        o VacinaPLUS é seu companheiro digital para uma vida mais saudável.
                    </Text>
                </View>

                {/* Seção de Redes Sociais */}
                <View style={style.socialSection}>
                    <Text style={style.sectionTitle}>Siga-nos nas Redes Sociais</Text>
                    <View style={style.socialContainer}>
                        <TouchableOpacity 
                            style={style.socialButton}
                            onPress={() => Linking.openURL('https://www.instagram.com/softwarehouseundb/')}
                        >
                            <FontAwesome name="instagram" size={28} color="#E4405F" />
                            <Text style={style.socialText}>@softwarehouseundb</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity 
                            style={style.socialButton}
                            onPress={() => Linking.openURL('https://www.instagram.com/undboficial/')}
                        >
                            <FontAwesome name="instagram" size={28} color="#E4405F" />
                            <Text style={style.socialText}>@undboficial</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            
            {/* Animações de palmas */}
            {claps.map((clap) => (
                <Animated.View
                    key={clap.id}
                    style={[
                        style.animatedClap,
                        {
                            transform: [{ translateY: clap.animatedValue }],
                            left: clap.leftPosition,
                        }
                    ]}
                >
                    <Text style={style.clapEmojiAnimated}>👏</Text>
                </Animated.View>
            ))}
        </ScrollView>
    );
}