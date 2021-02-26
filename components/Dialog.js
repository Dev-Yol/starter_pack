import * as React from 'react';
import { Colors } from '@constants';
import { Button, Paragraph, Dialog, Portal } from 'react-native-paper';
import { Row } from '.'

export default props => {
    const { visible, } = props;
    return (
        <Portal>
            <Dialog visible={visible} onDismiss={props.cancel}>
                <Dialog.Title>{props.title}</Dialog.Title>
                {
                    props.content && <Dialog.Content>
                        <Paragraph>{props.content}</Paragraph>
                    </Dialog.Content>
                }
                <Dialog.Actions>
                    <Button color={Colors.danger} onPress={props.submit}>Confirm</Button>
                    <Button color={Colors.danger} onPress={props.cancel}>Cancel</Button>
                </Dialog.Actions>

            </Dialog>
        </Portal>
    );
};

