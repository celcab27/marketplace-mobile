import {View, Text, Modal, TouchableOpacity, FlatList} from 'react-native';
import {SelectOptionI} from '../../interfaces';
import React, {useState} from 'react';
import style from './style';

interface SelectProps {
  options: SelectOptionI[];
  selectedOption?: SelectOptionI;
  setSelectedOption: (option: SelectOptionI) => void;
  title: string;
}

export default function Select({
  options,
  selectedOption,
  setSelectedOption,
  title,
}: SelectProps) {
  const [modalVisible, setModalVisible] = useState(false);

  const handleSelect = (option: any) => {
    setSelectedOption(option);
    setModalVisible(false);
  };

  return (
    <View style={style.container}>
      <Text style={style.title}>{title}</Text>
      <TouchableOpacity
        style={style.selectButton}
        onPress={() => setModalVisible(true)}>
        <Text style={style.selectText}>
          {selectedOption ? selectedOption.name : 'Seleccionar opción'}
        </Text>
      </TouchableOpacity>

      <Modal
        transparent
        visible={modalVisible}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}>
        <TouchableOpacity
          style={style.modalOverlay}
          onPress={() => setModalVisible(false)}>
          <View style={style.modalContent}>
            <FlatList
              data={options}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <TouchableOpacity
                  style={style.option}
                  onPress={() => handleSelect(item)}>
                  <Text style={style.optionText}>{item.name}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}
