import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import museumBanner from '../../assets/images/category-museum-banner.png';
import lagoaImg from '../../assets/images/lagoa-conceicao.png';
import arrowBack from '../../assets/icons/arrow-back.png';
import pinIcon from '../../assets/icons/pin.png';
import starIcon from '../../assets/icons/star.png';
import heartFilled from '../../assets/icons/heart-filled.png';
import heartOutline from '../../assets/icons/heart-outline.png';
import {
  Container,
  Header,
  BackButton,
  BackIcon,
  HeaderTitle,
  ScrollArea,
  BannerCard,
  BannerImage,
  FilterRow,
  FilterChip,
  FilterChipText,
  SectionTitle,
  Card,
  CardImage,
  CardContent,
  CardTitle,
  CardMetaRow,
  CardMetaIcon,
  CardMetaText,
  StarIcon,
  RatingText,
  FavoriteButton,
  HeartIcon,
} from './style';

const initialPlaces = [
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
    isFavorite: false,
  },
  {
    id: 3,
    title: 'Lagoa da conceição',
    location: 'Florianópolis, SC',
    rating: '4,9',
    isFavorite: false,
  },
  {
    id: 4,
    title: 'Lagoa da conceição',
    location: 'Florianópolis, SC',
    rating: '4,9',
    isFavorite: true,
  },
];

const filters = ['Populares', 'Mais visitados', 'Perto de mim'];

const CategoryDetails = ({ categoryName = 'Museus', onBackPress, onPlacePress }) => {
  const [selectedFilter, setSelectedFilter] = useState('Populares');
  const [places, setPlaces] = useState(initialPlaces);

  const toggleFavorite = (id) => {
    setPlaces((prev) =>
      prev.map((place) =>
        place.id === id ? { ...place, isFavorite: !place.isFavorite } : place
      )
    );
  };

  return (
    <Container>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      <Header>
        <BackButton activeOpacity={0.7} onPress={onBackPress}>
          <BackIcon source={arrowBack} resizeMode="contain" />
        </BackButton>
        <HeaderTitle>{categoryName}</HeaderTitle>
      </Header>

      <ScrollArea showsVerticalScrollIndicator={false}>
        <BannerCard>
          <BannerImage source={museumBanner} resizeMode="cover" />
        </BannerCard>

        <FilterRow>
          {filters.map((filter) => (
            <FilterChip
              key={filter}
              $active={selectedFilter === filter}
              activeOpacity={0.8}
              onPress={() => setSelectedFilter(filter)}
            >
              <FilterChipText $active={selectedFilter === filter}>
                {filter}
              </FilterChipText>
            </FilterChip>
          ))}
        </FilterRow>

        <SectionTitle>Destaques</SectionTitle>

        {places.map((place) => (
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

            <FavoriteButton
              activeOpacity={0.7}
              onPress={() => toggleFavorite(place.id)}
            >
              <HeartIcon
                source={place.isFavorite ? heartFilled : heartOutline}
                resizeMode="contain"
              />
            </FavoriteButton>
          </Card>
        ))}
      </ScrollArea>
    </Container>
  );
};

export default CategoryDetails;
