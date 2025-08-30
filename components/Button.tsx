import { Pressable, StyleSheet, Text, View } from 'react-native';

type Props = {
  style: any;
  name: any;
  onPress?: () => void;
};

export default function Button({ onPress,style,name}: Props) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={style} onPress={onPress}>
        <View style={styles.button}>
            <Text style={styles.buttonLabel}>{name}</Text>
        </View>
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
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
});
