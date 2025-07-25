import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1000,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  container: {
    width: width * 0.85,
    maxHeight: height * 0.6,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    marginTop: 90, // Posiciona abaixo do cabeçalho
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    backgroundColor: '#1E90FF',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  closeButton: {
    padding: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 15,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  notificationList: {
    maxHeight: height * 0.4,
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
    marginBottom: 5,
  },
  notificationMessage: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 5,
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
    marginLeft: 10,
  },
  viewAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
    backgroundColor: '#F5F5F5',
  },
  viewAllButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1E90FF',
    marginRight: 5,
  },
});