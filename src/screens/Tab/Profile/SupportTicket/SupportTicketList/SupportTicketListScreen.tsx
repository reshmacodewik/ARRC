import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  FlatList,
} from 'react-native';
import Header from '../../../../../components/Header/Header';
import HeaderBack from '../../../../../components/Header/HeaderBack';
import { IMAGES } from '../../../../../constants/images';
import styles from '../SupportTicketList/Styles';
import { COLORS } from '../../../../../constants/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

type TicketStatus = 'Open' | 'In Progress' | 'Resolved';

interface Ticket {
  id: string;
  ticketId: string;
  title: string;
  status: TicketStatus;
  createdDate: string;
  lastReply: string;
}

const TICKETS: Ticket[] = [
  {
    id: '1',
    ticketId: '#345',
    title: 'How To Transfer Rewards To Bank',
    status: 'Open',
    createdDate: '12 Dec 2026',
    lastReply: '1h ago',
  },
  {
    id: '2',
    ticketId: '#345',
    title: 'How To Transfer Rewards To Bank',
    status: 'In Progress',
    createdDate: '12 Dec 2026',
    lastReply: '1h ago',
  },
  {
    id: '3',
    ticketId: '#345',
    title: 'How To Transfer Rewards To Bank',
    status: 'Resolved',
    createdDate: '12 Dec 2026',
    lastReply: '1h ago',
  },
  {
    id: '4',
    ticketId: '#345',
    title: 'How To Transfer Rewards To Bank',
    status: 'Open',
    createdDate: '12 Dec 2026',
    lastReply: '1h ago',
  },
];

const FILTERS: ('All' | TicketStatus)[] = [
  'All',
  'Open',
  'In Progress',
  'Resolved',
];

const StatusBadge: React.FC<{ status: TicketStatus }> = ({ status }) => {
  const badgeStyle =
    status === 'Open'
      ? styles.badgeOpen
      : status === 'In Progress'
      ? styles.badgeInProgress
      : styles.badgeResolved;

  const textStyle =
    status === 'Open'
      ? styles.badgeOpenText
      : status === 'In Progress'
      ? styles.badgeInProgressText
      : styles.badgeResolvedText;

  return (
    <View style={[styles.badge, badgeStyle]}>
      <Text style={[styles.badgeText, textStyle]}>{status}</Text>
    </View>
  );
};

const TicketCard: React.FC<{ item: Ticket; onPress: () => void }> = ({
  item,
  onPress,
}) => (
  <TouchableOpacity style={styles.card} activeOpacity={0.85} onPress={onPress}>
    <View style={styles.cardTopRow}>
      <Text style={styles.cardTitle}>{item.title}</Text>
      <StatusBadge status={item.status} />
    </View>

    <Text style={styles.cardMeta}>Ticket ID: {item.ticketId}</Text>
    <Text style={styles.cardMeta}>Created {item.createdDate}</Text>

    <View style={styles.cardDivider} />

    <View style={styles.cardBottomRow}>
      <Text style={styles.cardLastReply}>
        Last Reply:{' '}
        <Text style={styles.cardLastReplyBold}>{item.lastReply}</Text>
      </Text>
      <View style={styles.cardArrowCircle}>
        <Ionicons name="chevron-forward" size={20} color={COLORS.white} />
      </View>
    </View>
  </TouchableOpacity>
);
const EmptyState: React.FC<{ onCreatePress: () => void }> = ({
  onCreatePress,
}) => (
  <View style={styles.emptyContainer}>
    <View style={styles.emptyIconCircle}>
      <Ionicons name="document-outline" size={72} color={COLORS.white} />
      <View
        style={{
          position: 'absolute',
          bottom: 2,
          right: 2,
          width: 24,
          height: 24,
          borderRadius: 12,
          backgroundColor: COLORS.white,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Ionicons name="add" size={16} color={COLORS.black} />
      </View>
    </View>

    <Text style={styles.emptyText}>You Have Not Created Any Ticket Yet</Text>
    <TouchableOpacity activeOpacity={0.8} onPress={onCreatePress}>
      <Text style={styles.emptyLink}>Create First Ticket</Text>
    </TouchableOpacity>
  </View>
);

const SupportTicketListScreen: React.FC = ({ navigation }: any) => {
  const [activeFilter, setActiveFilter] = useState<'All' | TicketStatus>('All');

  const filtered =
    activeFilter === 'All'
      ? TICKETS
      : TICKETS.filter(t => t.status === activeFilter);
  const isEmpty = filtered.length === 0;
  return (
    <ImageBackground
      source={IMAGES.splashBg}
      style={styles.safeArea}
      resizeMode="cover"
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Header />

        <View style={styles.ticketHeaderRow}>
          <HeaderBack
            showBack
            title="Support Ticket"
            onBackPress={() => navigation.goBack()}
          />
          <TouchableOpacity
            style={styles.createNewBtn}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('CreateSupportTicket')}
          >
            <Text style={styles.createNewText}>Create New</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.filterRow}>
            {FILTERS.map(f => (
              <TouchableOpacity
                key={f}
                style={[
                  styles.filterPill,
                  activeFilter === f && styles.filterPillActive,
                ]}
                activeOpacity={0.8}
                onPress={() => setActiveFilter(f)}
              >
                <Text
                  style={[
                    styles.filterPillText,
                    activeFilter === f && styles.filterPillTextActive,
                  ]}
                >
                  {f}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
                   

        {isEmpty ? (
          <EmptyState
            onCreatePress={() => navigation.navigate('CreateSupportTicket')}
          />
        ) : (
          <View style={styles.cardList}>
            {filtered.map(ticket => (
              <TicketCard
                key={ticket.id}
                item={ticket}
                onPress={() =>
                  navigation.navigate('SupportTicketChat', { ticket })
                }
              />
            ))}
          </View>
        )}
      </ScrollView>
    </ImageBackground>
  );
};

export default SupportTicketListScreen;
