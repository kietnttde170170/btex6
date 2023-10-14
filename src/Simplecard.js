import React from 'react';
import Title from './ex4/Title';
import Description from './ex4/Description';
import Image from './ex4/Image';

const SimpleCard = (props) => (
    <div className='simple-card'>
        <Image url={props.item.imageUrl} />
        <div className='text-container'>
            <Title text={props.item.title} />
            <Description text={props.item.description} />
        </div>
    </div>
);

export default SimpleCard;
