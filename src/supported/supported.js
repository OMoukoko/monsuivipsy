import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Text from '../components/MyText';
import {colors} from '../common/colors';
import localStorage from '../utils/localStorage';
import logEvents from '../services/logEvents';
import Matomo from '../services/matomo';
import {useEffect} from 'react';
import Lumiere from '../services/lumiere';

const Supported = ({navigation}) => {
  const handleClick = async (value) => {
    //send matomo
    logEvents.logSupportedSelect(value);
    Matomo.setUserProperties({
      supported: value,
    });
    Lumiere.addUserProperties({
      supported: value,
    });
    //navigate to tabs
    navigation.navigate('tabs');
    //set local storage
    await localStorage.setSupported(value);
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Mon Suivi Psy</Text>
          <Text style={styles.title}>Pour commencer</Text>
        </View>
        <Card
          title="Je suis suivi"
          subtitle="J’ai téléchargé l’application sur recommandation du professionnel qui me suit."
          color="#F4FCFD"
          handleClick={() => handleClick('YES')}
        />
        <Card
          title="Je suis suivi"
          subtitle="J’ai téléchargé l’application de moi-même, sans que le professionnel qui me suit ne me le recommande."
          color="#F4FCFD"
          handleClick={() => handleClick('YES_SOLO')}
        />
        <Card
          title="Je ne suis pas suivi"
          subtitle="J’ai téléchargé l’application dans le cadre d’une démarche personnelle, pour suivre mes symptômes et avoir des informations."
          color="#F4FCFD"
          handleClick={() => handleClick('NO')}
        />
        <Card
          title="Je ne suis pas suivi mais je le souhaite"
          subtitle="J’ai téléchargé l’application pour être informé, orienté et trouver un contact."
          color="#F4FCFD"
          handleClick={() => handleClick('NOT_YET')}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const Card = ({title, subtitle, handleClick}) => {
  return (
    <TouchableOpacity onPress={handleClick}>
      <View style={[styles.card]}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardSubTitle}>{subtitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#D2F4F7',
    marginBottom: 30,
    borderRadius: 10,
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    minHeight: '10%',
  },
  cardTitle: {
    color: colors.DARK_BLUE,
    fontWeight: '700',
    marginBottom: 10,
  },
  cardSubTitle: {
    color: colors.DARK_BLUE,
  },
  safe: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    marginBottom: 30,
  },
  title: {
    color: colors.BLUE,
    fontSize: 22,
    paddingBottom: 20,
    fontWeight: '700',
  },
  container: {
    backgroundColor: 'white',
    padding: 20,
    flex: 1,
    display: 'flex',
    // justifyContent: 'center',
  },
  content: {
    display: 'flex',
    flex: 1,
  },
});

export default Supported;
