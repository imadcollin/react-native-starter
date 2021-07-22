import {StyleSheet} from 'react-native';

const HeaderStyle = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '50%',
  },
  text: {
    color: '#000',
    fontWeight: 'normal',
    fontSize: 24,
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
});

export default HeaderStyle;
