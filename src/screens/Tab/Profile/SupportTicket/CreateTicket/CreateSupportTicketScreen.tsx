import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  TextInput,
  Platform,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from '../../../../../components/Header/Header';
import HeaderBack from '../../../../../components/Header/HeaderBack';
import { IMAGES } from '../../../../../constants/images';
import { COLORS } from '../../../../../constants/colors';
import styles from './Styles';


const CATEGORIES = [
  'Rewards & Points',
  'Account Issues',
  'Payment Problems',
  'Card Management',
  'Other',
];


interface DropdownProps {
  value: string;
  onSelect: (val: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ value, onSelect }) => {
  const [open, setOpen] = useState(false);

  return (
    <View>
      <TouchableOpacity
        style={styles.dropdownBtn}
        activeOpacity={0.85}
        onPress={() => setOpen(prev => !prev)}
      >
        <Text style={[styles.dropdownBtnText, !value && { color: '#AAAAAA' }]}>
          {value || 'Select'}
        </Text>
        <Ionicons
          name={open ? 'chevron-up' : 'chevron-down'}
          size={18}
          color={COLORS.black}
        />
      </TouchableOpacity>

      {open && (
        <View style={styles.dropdownMenu}>
          {CATEGORIES.map((cat, i) => (
            <TouchableOpacity
              key={cat}
              style={[
                styles.dropdownItem,
                i === CATEGORIES.length - 1 && { borderBottomWidth: 0 },
              ]}
              activeOpacity={0.75}
              onPress={() => {
                onSelect(cat);
                setOpen(false);
              }}
            >
              <Text style={styles.dropdownItemText}>{cat}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const SuccessScreen: React.FC = () => (
  <ImageBackground
    source={IMAGES.splashBg}
    style={styles.safeArea}
    resizeMode="cover"
  >
    <View style={styles.successContainer}>
    <Image  source={IMAGES.CHECKICON} style={styles.CheckIcon}/>

      <Text style={styles.successTitle}>
        Thank You For Submitting Your issue
      </Text>
      <Text style={styles.successSubtitle}>
        We Will Let You Know When Your{'\n'}Ticket Will be Open
      </Text>
    </View>
  </ImageBackground>
);

const CreateSupportTicketScreen: React.FC = ({ navigation }: any) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return <SuccessScreen />;
  }

  const canSubmit = name.trim() && category && description.trim();

  return (
    <ImageBackground
      source={IMAGES.splashBg}
      style={styles.safeArea}
      resizeMode="cover"
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >

        <Header />
        <HeaderBack
          showBack
          title="New Ticket"
          onBackPress={() => navigation.goBack()}
        />

        {/* ── Name ── */}
        <Text style={styles.fieldLabel}>Name</Text>
        <TextInput
          style={styles.textInput}
          placeholder="How To Get Reward"
          placeholderTextColor="#AAAAAA"
          value={name}
          onChangeText={setName}
          returnKeyType="next"
        />


        <Text style={styles.fieldLabel}>Select Categories</Text>
        <Dropdown value={category} onSelect={setCategory} />

        <Text style={styles.fieldLabel}>Briefly Describe Your Issue</Text>
        <TextInput
          style={styles.textarea}
          placeholder="How To Get Reward"
          placeholderTextColor="#AAAAAA"
          value={description}
          onChangeText={setDescription}
          multiline
          numberOfLines={6}
          textAlignVertical="top"
        />


        <Text style={styles.fieldLabel}>Upload Your Attachment</Text>
        <TouchableOpacity style={styles.uploadBtn} activeOpacity={0.8}>
          <Ionicons name="share-outline" size={22} color={COLORS.black} />
        </TouchableOpacity>


        <View style={styles.btnRow}>
     
          <TouchableOpacity
            style={styles.cancelBtn}
            activeOpacity={0.8}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.cancelBtnText}>Cancel</Text>
          </TouchableOpacity>


          <TouchableOpacity
            activeOpacity={0.85}
            style={{ flex: 1 }}
            disabled={!canSubmit}
            onPress={() => setSubmitted(true)}
          >
            <LinearGradient
              colors={[COLORS.goldGradientStart, COLORS.goldGradientEnd]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={[styles.submitBtn, !canSubmit && { opacity: 0.45 }]}
            >
              <Text style={styles.submitBtnText}>Submit</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default CreateSupportTicketScreen;
