import {
  Center,
  Heading,
  Image,
  Text,
  VStack,
  ScrollView,
} from "@gluestack-ui/themed";

import backgroundImg from "@assets/background.png";
import Logo from "@assets/logo.svg";
import { Input } from "@components/input";
import { Button } from "@components/button";
import { useNavigation } from "@react-navigation/native";

export const SignUp = () => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1}>
        <Image
          source={backgroundImg}
          alt="Pessoas treinando"
          w="$full"
          height={624}
          defaultSource={backgroundImg}
          position="absolute"
        />

        <VStack flex={1} px="$10" pb="$16">
          <Center my="$24">
            <Logo />

            <Text color="$gray100" fontSize="$sm">
              Treine sua mente e seu corpo.
            </Text>
          </Center>

          <Center gap="$2" flex={1}>
            <Heading color="$gray100">Crie sua conta</Heading>

            <Input placeholder="Nome" />

            <Input
              placeholder="E-mail"
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <Input placeholder="Senha" secureTextEntry />

            <Button title="Criar e acessar" />
          </Center>

          <Button
            title="Voltar para o login"
            variant="outline"
            mt="$12"
            onPress={handleGoBack}
          />
        </VStack>
      </VStack>
    </ScrollView>
  );
};