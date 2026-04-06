import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  TextInput,
  Image,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Header from '../../../../../components/Header/Header';
import HeaderBack from '../../../../../components/Header/HeaderBack';
import { IMAGES } from '../../../../../constants/images';
import { COLORS } from '../../../../../constants/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './Styles';


type MessageSender = 'agent' | 'user';

interface Message {
  id: string;
  sender: MessageSender;
  text: string;
  time: string;
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: '1',
    sender: 'agent',
    text: 'Welcome To Arrc Support !!\nHow can I help You',
    time: '10 : 00 AM',
  },
  {
    id: '2',
    sender: 'user',
    text: 'Hi !! I Wanted To Ask About Rewards',
    time: '10 : 00 AM',
  },
];

const AgentAvatar = () => (
  <View style={styles.agentAvatarCircle}>
   <Image source={IMAGES.logo} style={styles.logo} />
  </View>
);


const UserAvatar = () => (
  <View style={styles.userAvatar}>
     <Image source={{ uri: 'https://i.pravatar.cc/150?img=11' }} style={{ width: '100%', height: '100%' }} />
    {/* <Image
      source={IMAGES.}
      style={styles.userAvatarImage}
      resizeMode="cover"
    /> */}
  </View>
);

const MessageItem: React.FC<{ item: Message }> = ({ item }) => {
  const isAgent = item.sender === 'agent';

  return (
    <View>
      <View style={isAgent ? styles.messageRowAgent : styles.messageRowUser}>
        {isAgent ? <AgentAvatar /> : <UserAvatar />}
        <View style={isAgent ? styles.bubbleAgent : styles.bubbleUser}>
          <Text
            style={isAgent ? styles.bubbleAgentText : styles.bubbleUserText}
          >
            {item.text}
          </Text>
        </View>
      </View>
      <Text style={isAgent ? styles.timestampAgent : styles.timestampUser}>
        {item.time}
      </Text>
    </View>
  );
};

const SupportTicketChatScreen: React.FC = ({ navigation, route }: any) => {
  const ticket = route?.params?.ticket;
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [inputText, setInputText] = useState('');
  const flatListRef = useRef<FlatList>(null);

  const handleSend = () => {
    const trimmed = inputText.trim();
    if (!trimmed) return;

    const newMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: trimmed,
      time: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
    };
    setMessages(prev => [...prev, newMsg]);
    setInputText('');

    setTimeout(() => {
      flatListRef.current?.scrollToEnd({ animated: true });
    }, 100);
  };

  return (
    <ImageBackground
      source={IMAGES.splashBg}
      style={styles.safeArea}
      resizeMode="cover"
    >
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
      >
        <Header />
        <View style={styles.headerRow}>
          <HeaderBack
            showBack
            title="Support Ticket"
            onBackPress={() => navigation.goBack()}
          />
          <TouchableOpacity
            style={styles.endConvBtn}
            activeOpacity={0.8}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.endConvText}>End Conversation</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          ref={flatListRef}
          data={messages}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.messageListContent}
          style={styles.messageList}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <MessageItem item={item} />}
          onContentSizeChange={() =>
            flatListRef.current?.scrollToEnd({ animated: false })
          }
        />

        <View style={styles.inputBar}>
          <TouchableOpacity style={styles.cameraBtn} activeOpacity={0.8}>
            <Ionicons name="camera" size={25} color={COLORS.white} />
          </TouchableOpacity>
          <TextInput
            style={styles.textInput}
            placeholder="Typing.........."
            placeholderTextColor="rgba(255,255,255,0.35)"
            value={inputText}
            onChangeText={setInputText}
            returnKeyType="send"
            onSubmitEditing={handleSend}
            multiline={false}
          />

          <TouchableOpacity
            style={styles.sendBtn}
            activeOpacity={0.8}
            onPress={handleSend}
          >
            <Ionicons
              name="paper-plane-outline"
              size={24}
              color={
                inputText.trim()
                  ? COLORS.goldGradientStart
                  : COLORS.white
              }
            />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default SupportTicketChatScreen;
