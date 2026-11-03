import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import lagoaImg from '../../assets/images/lagoa-conceicao.png';
import pinIcon from '../../assets/icons/pin.png';
import starIcon from '../../assets/icons/star.png';
import heartFilled from '../../assets/icons/heart-filled.png';
import heartOutline from '../../assets/icons/heart-outline.png';
import btnArrowRight from '../../assets/icons/btn-arrow-right.png';
import BottomNav from '../../components/BottomNav';
import {
  Container,
  Header,
  HeaderTitle,
  ScrollArea,
  Card,
  CardImage,
  CardContent,
  CardTitle,
  CardMetaRow,
  CardMetaIcon,
  CardMetaText,
  StarIcon,
  RatingText,
  CardActions,
  FavoriteButton,
  HeartIcon,
  DetailButton,
  DetailButtonIcon,
} from './style';

const initialFavorites = [
  {
    id: 1,
    title: 'Lagoa da conceição',
    location: 'Florianópolis, SC',
    rating: '4,9',
    isFavorite: true,
  },
  {
    id: 2,
    title: 'Lagoa da conceição',
    location: 'Florianópolis, SC',
    rating: '4,9',
    isFavorite: true,
  },
  {
    id: 3,
    title: 'Lagoa da conceição',
    location: 'Florianópolis, SC',
    rating: '4,9',
    isFavorite: true,
  },
  {
    id: 4,
    title: 'Lagoa da conceição',
    location: 'Florianópolis, SC',
    rating: '4,9',
    isFavorite: false,
  },
  {
    id: 5,
    title: 'Lagoa da conceição',
    location: 'Florianópolis, SC',
    rating: '4,9',
    isFavorite: true,
  },
];

const Favorites = ({ onPlaceDetailPress, onTabPress }) => {
  const [favorites, setFavorites] = useState(initialFavorites);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.map((place) =>
        place.id === id ? { ...place, isFavorite: !place.isFavorite } : place
      )
    );
  };

  return (
    <Container>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      <Header>
        <HeaderTitle>Seus Favoritos</HeaderTitle>
      </Header>

      <ScrollArea showsVerticalScrollIndicator={false}>
        {favorites.map((place) => (
          <Card key={place.id}>
            <CardImage source={lagoaImg} resizeMode="cover" />

            <CardContent>
              <CardTitle>{place.title}</CardTitle>
              <CardMetaRow>
                <CardMetaIcon source={pinIcon} resizeMode="contain" />
                <CardMetaText>{place.location}</CardMetaText>
              </CardMetaRow>
              <CardMetaRow>
                <StarIcon source={starIcon} resizeMode="contain" />
                <RatingText>{place.rating}</RatingText>
              </CardMetaRow>
            </CardContent>

            <CardActions>
              <FavoriteButton
                activeOpacity={0.7}
                onPress={() => toggleFavorite(place.id)}
              >
                <HeartIcon
                  source={place.isFavorite ? heartFilled : heartOutline}
                  resizeMode="contain"
                />
              </FavoriteButton>

              <DetailButton
                activeOpacity={0.8}
                onPress={() => onPlaceDetailPress && onPlaceDetailPress(place)}
              >
                <DetailButtonIcon source={btnArrowRight} resizeMode="contain" />
              </DetailButton>
            </CardActions>
          </Card>
        ))}
      </ScrollArea>

      <BottomNav activeTab="favorites" onTabPress={onTabPress} />
    </Container>
  );
};

export default Favorites;
