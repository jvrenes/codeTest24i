// Libraries
import React from 'react'
import { connect } from 'react-redux'
import { FlatList, View } from 'react-native'

// Icon
import { starIcon } from '../../assets/icons'

// Styled Components
import {
    Card,
    CardImage,
    CardTitle,
    Icon,
    InfoContainer,
    RatingContainer,
    ScrollMediaContainer,
    Title
} from './styles'

export const ScrollMedia = ({
    media,
    title,
    navigation
}) => {

    const renderItem = ({ item, index }) => {
        return (
            <Card
                key={index + item.name}
                onPress={() => navigation.navigate('Details', { data: item })}
            >
                <CardImage
                    source={{ uri: `https://image.tmdb.org/t/p/w500${item.backdrop_path}` }}
                    resizeMode='cover'
                />
                <InfoContainer>
                    <CardTitle>{item.name ? item.name : item.title}</CardTitle>
                    <RatingContainer>
                        <CardTitle>{item.vote_average}</CardTitle>
                        <Icon
                            source={starIcon}
                            resizeMode='contain'
                        />
                    </RatingContainer>
                </InfoContainer>
            </Card>
        )
    }

    const filteredMedia = media.filter(item => item.backdrop_path != null)
    return (
        <ScrollMediaContainer>
            <Title>{title}</Title>
            <FlatList
                style={{ flexGrow: 0, paddingBottom: 20, }}
                data={filteredMedia} ScrollMediaContainer
                keyExtractor={(item, index) => index + item.id}
                renderItem={renderItem}
                numColumns={3}
            />
        </ScrollMediaContainer>
    )
}

export default connect()(ScrollMedia)