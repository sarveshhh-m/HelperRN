import React from 'react';
import {Button, Text, View} from 'react-native';
import {BeagleChat} from '~/assets/SVG/Icons';
import useApp from '~/hooks/useApp';
import styles from '~/styles/App';
const App = () => {
  const {changeCount, counter} = useApp();
  return (
    <View style={styles.container}>
      <Text>{'count : ' + counter}</Text>
      <Button title="Increase Count" onPress={() => changeCount('INCREASE')} />
      <Button title="Decrease Count" onPress={() => changeCount('DECREASE')} />
      <BeagleChat height={124} width={124} />
    </View>
  );
};

export default App;
