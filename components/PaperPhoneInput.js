import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableHighlight } from 'react-native';
import { Button, BottomSheet, Text, Row, Input, Select, ListItem } from 'components'
import { Theme, Colors, Metrics } from '@constants';
import Validator from 'utils/Validator'

const styles = StyleSheet.create({
  textStyle: {
    color: Colors.black,
  },
  inputStyle: {
    height: Metrics.xxl + 7,
    padding: 5,
    marginTop: 5,
    borderRadius: Metrics.sm,
    borderColor: Colors.white,
  },
  buttonStyle: {
    width: '20%'
  },
  containerStyle: {
    width: '75%'
  },
});

const coutries = [
  {
    id: 1,
    title: 'Philippines',
    abbr: 'PH',
    prefix: '+63',
    length: 10
  },
  {
    id: 2,
    title: 'USA',
    abbr: 'USA',
    prefix: '+01',
    length: 5
  },
];
export default () => {
  const [visible, setVisible] = useState(false);
  const [prefix, setPrefix] = useState('+63');
  const [mobile, setMobile] = useState('');
  const [selected, setSelected] = useState()

  const renderContent = () => {
    return <Text style={styles.textStyle}>{prefix}</Text>
  }

  useEffect(() => {
    if (selected) {
      setPrefix(selected?.prefix)
    }
  }, [selected])

  return (
    <View>
      <Row ar>
        <View style={styles.buttonStyle}>
          <Button md light {...{
            title: renderContent(),
            loading: false,
            color: Colors.white,
            textColor: Colors.black,
            onPress: () => {
              setVisible(val => !val)
            }
          }} />
        </View>
        <View style={styles.containerStyle}>
          <Input
            {...{
              // textColor: Colors.white,
              style: styles.inputStyle,
              maxLength: selected?.length || 10,
              value: mobile || '',
              setValue: (e) => {
                setMobile((Validator.isPHMobileNumber(e) || e === '' )? e : '')
              },
              type: 'numeric',
              placeholder: 'mobile no',
              // disabled: loading,
              // validate: () => validate(),
            }} />
        </View>
      </Row>
      <BottomSheet {...{
        setVisible: setVisible,
        backButton: false
      }}
        visible={visible}
        title='Set Address'
        setVisible={setVisible}
      >
        <View style={{ width: '90%', flex: 1 }}>
          <View style={{
            paddingBottom: 10
          }}>
            <Select onSelect={async (e) => {
            }}
              value={'PH'}
              data={coutries}
              dense={true}
              component={({ item, index, separators }) => (
                <TouchableHighlight
                  key={item.id}
                // onPress={() => this._onPress(item)}
                // onShowUnderlay={separators.highlight}
                // onHideUnderlay={separators.unhighlight}
                >
                  <View style={{ backgroundColor: 'white' }}>
                    <ListItem
                      value={selected?.title}
                      item={item}
                      text={`${item.prefix} ${item.title}`}
                      onPress={(item) => {
                        setSelected(item);
                        setVisible(false);
                        setMobile('')
                      }} />
                  </View>
                </TouchableHighlight>
              )}
              label='Country'
            />
          </View>
        </View>

      </BottomSheet>
    </View>
  )
}
