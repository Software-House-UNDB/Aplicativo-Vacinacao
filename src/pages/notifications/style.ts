import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: '#1E90FF',
    paddingTop: 50,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    flex: 1,
    textAlign: 'center',
  },
  backButton: {
    padding: 5,
  },
  notificationList: {
    paddingBottom: 20,
  },
  notificationItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    flexDirection: 'row',
    alignItems: 'center',
  },
  readNotification: {
    backgroundColor: '#FFFFFF',
  },
  unreadNotification: {
    backgroundColor: '#F0F8FF',
  },
  notificationContent: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  notificationMessage: {
    fontSize: 14,
    color: '#666666',
  },
  notificationDate: {
    fontSize: 12,
    color: '#999999',
  },
  unreadIndicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#1E90FF',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#999999',
  },
  markAllButton: {
    backgroundColor: '#1E90FF',
    padding: 15,
    margin: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  markAllButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});