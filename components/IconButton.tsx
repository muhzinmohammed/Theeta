import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, View } from 'react-native';

type Props = {
  style: any;
  name: any;
  color:string;
  onPress: () => void;
};

export default function IconButton({ onPress,style,name,color}: Props) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={style} onPress={onPress}>
        <Ionicons name ={name} color={color} size={72} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
});
