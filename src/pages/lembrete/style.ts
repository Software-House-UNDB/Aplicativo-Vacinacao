import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    justifyContent: 'space-between',
  },

  header: {
    backgroundColor: 'white',
    paddingTop: 50, 
    paddingBottom: 16,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
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
  },

  card: {
    backgroundColor: '#6A9CF8',
    borderRadius: 20,
    overflow: 'hidden',
    padding: 16,
    marginVertical: 20,
    elevation: 4,
  },

  cardHeader: {
    backgroundColor: '#236EFA',
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
  },

  timeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 5,
    marginBottom: 12,
  },

  smallInput: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 8,
  },

  buttonContainer: {
    alignItems: 'center',
  },

  button: {
    backgroundColor: '#236EFA',
    paddingHorizontal: 50,
    paddingVertical: 14,
    borderRadius: 4,
    alignItems: 'center',
    marginTop: 8,
    width: '50%',
    elevation: 5,
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },

});

export default styles;