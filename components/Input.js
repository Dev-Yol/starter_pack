
import React, { forwardRef } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { HelperText } from "react-native-paper";
import { Colors, Metrics } from '@constants'

import { Icon } from 'components'
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    input: {
        flex: 1,
    },
    icon: {
        justifyContent: 'center',
        marginRight: Metrics.md
    },
    rightIcon: {
        justifyContent: 'center',
        marginRight: Metrics.sm
    },
    inputContainer: {
        height: Metrics.xxl,
        backgroundColor: Colors.white,
        borderWidth: StyleSheet.hairlineWidth + 0.2,
        borderRadius: Metrics.xl,
        marginBottom: Metrics.sm,
        fontSize: Metrics.font.md,
        width: '100%',
        fontWeight: '100',
        paddingHorizontal: Metrics.lg,
    }
});
export default forwardRef((props, ref) => {
    let { value, error, icon, readOnly = false, maxLength, disabled, type, setValue, textColor, validate, placeholder, secureTextEntry = false, dense, rightContent, style, validator = false, placeholderTextColor } = props;
    let inc = dense ? 0 : 10;
    let variantStyles = {
        borderColor: error ? Colors.danger : !disabled ? Colors.primary : Colors.gray,
        height: Metrics.xxl + inc,
        color: error ? Colors.danger : Colors.dark,
        paddingHorizontal: dense ? Metrics.md : Metrics.lg
    }
    const renderErrors = (validator) => {
        if (validator.status) {
            if (Array.isArray(validator.message)) {
                return validator.message.map(msg => {
                    return <HelperText key={msg} type={validator?.type || 'error'} visible={validator?.status} style={{
                        color: (validator?.type === 'error' || !validator?.type) ? Colors.danger : validator?.type == 'text' ? Colors.white : Colors.gray
                    }}>{msg}</HelperText>
                })
            }
            return <HelperText type={validator?.type || 'error'} visible={validator?.status} style={{
                color: (validator?.type === 'error' || !validator?.type) ? Colors.danger : validator?.type == 'text' ? Colors.white : Colors.gray
            }}>
                {validator?.message}
            </HelperText>
        }
    }

    return (
        <View>
            <View style={{ ...styles.container, ...styles.inputContainer, ...variantStyles, ...style }}>
                {
                    icon && <View style={styles.icon}>
                        <Icon
                            {...icon}
                        />
                    </View>
                }
                <TextInput
                    {...props}
                    ref={ref}
                    style={{ ...styles.input, ...{ color: textColor } }}
                    value={value}
                    maxLength={readOnly ? value.length : maxLength}
                    keyboardType={type}
                    placeholderTextColor={placeholderTextColor || textColor}
                    onSubmitEditing={validate}
                    editable={!disabled}
                    returnKeyType="next"
                    secureTextEntry={secureTextEntry}
                    placeholder={placeholder}
                    onChangeText={setValue}
                    selectionColor={Colors.primary}
                    underlineColorAndroid="transparent"
                />
                {rightContent}
            </View>
            {renderErrors(validator)}

        </View>
    );
})