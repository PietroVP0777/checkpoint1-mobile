import "./styles/global.css"
import { useState } from "react";
import { Text, View, Image, TextInput, Pressable } from "react-native";
import { EyeSwapIcon } from "./components/EyeSwapIcon";
import ExpoCheckbox from "expo-checkbox/build/ExpoCheckbox";

export default function App() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [isChecked, setChecked] = useState(false);


  const mensagem = () => {
    if (!email) {
      alert('Por favor, insira seu email.');
      return;
    } else if (!password) {
      alert('Por favor, insira sua senha.');
      return;
    } else{
      alert('Bem-vindo, ' + email + '!');
      setEmail('');
      setPassword('');
    }

  };

  return (
    <View className="flex-1 items-center justify-center bg-black">
      <Text className="text-3xl font-bold text-white mb-6">Login</Text>
      <Image
            source={require('./assets/logo-fiap.png')}
            className="rounded-full mb-10"
            resizeMode="contain"
      />
      <Text className="text-white mb-2 text-xl">Email</Text>
      <TextInput className="w-80 border-2 border-[#ed195c] rounded-lg px-4 py-3 mb-4 bg-[#1a1a1a] text-white" placeholder="mobile@fiap.com.br " value={email} onChangeText={(text) => setEmail(text)} />
      
      <View className="flex-row items-center justify-center gap-3 w-80 mb-2">
        <Text className="text-white mb-2 text-xl">Senha</Text>
        <EyeSwapIcon visibility={passwordVisibility} setVisibility={setPasswordVisibility} />
      </View>

      
      <TextInput className="w-80 border-2 border-[#ed195c] rounded-lg px-4 py-3 mb-4 bg-[#1a1a1a] text-white" secureTextEntry={passwordVisibility} value={password} onChangeText={(text) => setPassword(text)} placeholder="••••••••• " />

      <View className="flex-row items-center gap-2">
        <ExpoCheckbox
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#4630EB' : undefined}
        />
        <Text className="text-white">Lembrar de mim</Text>
      </View>

      <Pressable className="w-80 bg-[#ed195c] rounded-lg px-4 py-3 mt-3" onPress={() => mensagem()}>
        <Text className="text-white font-bold text-center p-1">Entrar</Text>
      </Pressable>
      <Pressable>
        <Text className="text-[#ed195c] mt-4">Esqueci minha senha</Text>
      </Pressable>
      <Pressable>
        <Text className="text-[#ed195c] mt-4">Não possui conta?</Text>
      </Pressable>
    </View>
  );
}