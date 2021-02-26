import * as React from 'react';
import { Card, Title } from 'react-native-paper';


const Component = props => (
    <Card style={props?.style}>
        {props?.imageSource && <Card.Cover source={props?.imageSource} style={props?.imageStyle} resizeMode='contain' />}
        <Card.Content>
            {props.children}
        </Card.Content>

    </Card>
);

export default Component;