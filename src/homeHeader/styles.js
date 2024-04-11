import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  headerContainer: {
    marginHorizontal: 8,
    paddingBottom: 8,
    paddingHorizontal: 16,
    backgroundColor: 'black',
    flexDirection: 'row',
  },
  trialTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
  },
  availableTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
    fontFamily: 'ariel',
  },
  trialContainer: {
    marginTop: 8,
    flexDirection: 'row',
    fontSize: 18,
    fontWeight: '400',
    borderColor: '#72bcd4',
    borderWidth: 1,
    borderRadius: 50,
    paddingleft: 8,
    paddingRight: 12,
    paddingVertical: 4,
    backgroundColor: '#c1e1ec',
    shadowColor: 'black',
    elevation: 7,
  },
  pointContainer: {
    marginLeft: 8,
  },
  pointStyle: {
    fontSize: 32,
    color: 'black',
    fontFamily: 'ariel',
  },
});

export default styles;
