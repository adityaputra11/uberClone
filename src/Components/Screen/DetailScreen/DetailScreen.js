import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import styles from './styles';
import {useRoute} from '@react-navigation/native';
import Section from '@components/Module/Section';
import HeaderDetail from '@components/Module/HeaderDetail';
import Category from '@components/Module/Category/Category';
import Discount from '@components/Module/Discount/Discount';

const DetailScreen = () => {
  const route = useRoute();
  const data = route.params.item;
  return (
    <View style={styles.container}>
      <ScrollView style={styles.position}>
        <Image
          source={{uri: data.image}}
          // resizeMode={'contain'}
          style={styles.sliderItems}
        />
        <Section child={<Text style={styles.fontTitle}>{data.name}</Text>} />
        <Section
          child={
            <View>
              <Text style={styles.title}>Pilih Varian Warna</Text>
              <Category />
            </View>
          }
        />
        <Section
          child={
            <View>
              <Text style={styles.title}>Kurir</Text>
              <Text>Ongkos Kirim mulai dari</Text>
              <Text>Ke Kota Administrasi Jakarta Selatan</Text>
            </View>
          }
        />
        <Section
          child={
            <View>
              <Text style={styles.title}>Beli dengan tukar Tambah</Text>
              <Text>Spesial</Text>
            </View>
          }
        />
        <Section
          child={
            <View>
              <Text style={styles.title}>Proteksi Kerusakan Total</Text>
              <Text>
                Jangan cemas barang kami rusak, berikan proteksi sekarang
              </Text>
            </View>
          }
        />
        <Section
          child={
            <View>
              <Text style={styles.title}>Deskripsi Produk</Text>
              <Text>{data.info}</Text>
            </View>
          }
        />
        <Section
          child={
            <View>
              <Discount title={'Lainnya Ditoko ini'} />
            </View>
          }
        />
      </ScrollView>
      <HeaderDetail color="#fff" />
    </View>
  );
};

export default DetailScreen;
