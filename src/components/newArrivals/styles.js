import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  imgStyle: {
    width: 100,
    height: 120,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  mainContainer: {
    paddingRight: 12,
    paddingLeft: 20,
    marginTop: 24,
  },
  listContainer: {
    paddingRight: 18,
    marginTop: 24,
  },
  headingTxt: {
    fontSize: 24,
    color: 'white',
  },
  titleTxt: {
    marginTop: 8,
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
  favIcon: {
    color: 'white',
    margin: 12,
    fontSize: 18,
    alignSelf: 'flex-end',
    position: 'absolute',
  },
});

export default styles;
