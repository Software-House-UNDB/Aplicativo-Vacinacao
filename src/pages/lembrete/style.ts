import { StyleSheet, Dimensions, Animated } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  boxTop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: Dimensions.get("window").height/8,
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingTop: 59,
    borderColor: 'gray',
    borderBottomWidth: 1,
    backgroundColor: '#fff',
    zIndex: 1,
  },
  boxMiddle: {
    height: Dimensions.get("window").height / 2.2,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  backButton: {
    marginRight: 8,
  },

  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },

  title: {
    fontSize: 32,
    fontWeight: 'semibold',
  },

  titlePlus: {
    color: '#004AD2',
  },

  subheader: {
    color: '#003366',
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 10,
    marginTop: 40,
  },

  card: {
    backgroundColor: '#1E90FF',
    borderRadius: 20,
    overflow: 'hidden',
    padding: 16,
    marginVertical: 20,
    elevation: 4,
    width: '90%', // Adjust the width as neede
  },

  modalOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 16,
    width: '90%',
    elevation: 5,
  },

  modalHeader: {
    backgroundColor: '#1E90FF',
    paddingVertical: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
    marginHorizontal: -16,
    marginTop: -16,
    marginBottom: 10,
  },

  cardTitle: {
    color: '#F5F5F5',
    fontSize: 30,
    fontWeight: 'bold',
  },

  label: {
    fontSize: 26,
    fontWeight: '500',
    marginBottom: 5,
    marginTop: 10,
  },

  inputGroup: {
    marginBottom: 16,
  },

  input: {
    backgroundColor: '#FFFFFF',
    padding: 12,
    paddingVertical: 8,
    borderRadius: 6,
    fontSize: 16,
    borderWidth:0,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    
    elevation: 7,
  },

  timeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 5,
    marginBottom: 12,
    
  },

  datePickerButton: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderWidth: 0.5,

  },

  datePickerText: {
    fontSize: 16,
  },

  buttonContainer: {
    alignItems: 'center',
    height: Dimensions.get("window").height / 7,
  },

  button: {
    backgroundColor: '#1E90FF',
    paddingHorizontal: 50,
    paddingVertical: 14,
    borderRadius: 4,
    alignItems: 'center',
    marginTop: 20,
    width: '50%',
    elevation: 5,
    
    
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },

});

export default styles;