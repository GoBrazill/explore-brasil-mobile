import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import arrowBack from '../../assets/icons/arrow-back.png';
import badgePin from '../../assets/icons/badge-pin.png';
import pinIcon from '../../assets/icons/pin.png';
import calendarIcon from '../../assets/icons/calendar.png';
import clockIcon from '../../assets/icons/clock.png';
import hourglassIcon from '../../assets/icons/hourglass.png';
import btnPlus from '../../assets/icons/btn-plus.png';
import praiaMoleImg from '../../assets/images/praia-mole.png';
import mercadoPublicoImg from '../../assets/images/mercado-publico.png';
import ponteHercilioImg from '../../assets/images/ponte-hercilio-luz.png';
import miranteImg from '../../assets/images/mirante-morro-cruz.png';
import BottomNav from '../../components/BottomNav';
import {
  Container,
  Header,
  BackButton,
  BackIcon,
  HeaderTitle,
  ScrollArea,
  ItineraryBanner,
  BannerBadgeIcon,
  BannerContent,
  BannerSubLabel,
  BannerTitle,
  DayBadge,
  DayBadgeText,
  SectionTitle,
  SectionSubtitle,
  FieldGroup,
  FieldLabel,
  FieldInputWrapper,
  FieldIcon,
  FieldInput,
  DayConfigCard,
  DayConfigHeader,
  DayConfigTitleRow,
  DayConfigIcon,
  DayConfigTitle,
  ChangeDayButton,
  ChangeDayText,
  DayConfigGrid,
  DayConfigCol,
  DayConfigInputWrapper,
  DayConfigMeta,
  PrimaryButton,
  PrimaryButtonText,
  HelperCaption,
  FilterRow,
  FilterChip,
  FilterChipText,
  FeaturedCard,
  FeaturedImage,
  FeaturedContent,
  FeaturedHeaderRow,
  FeaturedTitle,
  FeaturedRating,
  FeaturedSubMeta,
  FeaturedDescription,
  BadgeRow,
  BadgePill,
  BadgeText,
  SectionHeaderRow,
  SectionCount,
  PlaceItemCard,
  PlaceItemImage,
  PlaceItemContent,
  PlaceItemTitle,
  PlaceItemSub,
  PlaceItemMeta,
  PlusButton,
  PlusIcon,
} from './style';

const filters = ['Todos', 'Praias', 'Cultura', 'Mirantes'];

const otherPlaces = [
  {
    id: 1,
    title: 'Mercado Público',
    subtitle: 'Sabores locais e história · Centro',
    meta: '★ 4,8 · 1,2 km',
    image: mercadoPublicoImg,
  },
  {
    id: 2,
    title: 'Ponte Hercílio Luz',
    subtitle: 'Um clássico ao pôr do sol · Centro',
    meta: '★ 4,9 · 2,4 km',
    image: ponteHercilioImg,
  },
  {
    id: 3,
    title: 'Mirante do Morro da Cruz',
    subtitle: 'Vista panorâmica da cidade',
    meta: '★ 4,7 · 4,6 km',
    image: miranteImg,
  },
];

const HighlightsExplore = ({
  destination = 'Santa Catarina',
  day = 'Dia X',
  onBackPress,
  onSaveDayStop,
  onAddFeaturedPress,
  onAddPlacePress,
  onTabPress,
}) => {
  const [address, setAddress] = useState('Centrinho da Lagoa da Conceição');
  const [visitTime, setVisitTime] = useState('16:00');
  const [duration, setDuration] = useState('1 hora');
  const [selectedFilter, setSelectedFilter] = useState('Todos');

  return (
    <Container>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      <Header>
        <BackButton activeOpacity={0.7} onPress={onBackPress}>
          <BackIcon source={arrowBack} resizeMode="contain" />
        </BackButton>
        <HeaderTitle>Explorar destaques</HeaderTitle>
      </Header>

      <ScrollArea showsVerticalScrollIndicator={false}>
        <ItineraryBanner>
          <BannerBadgeIcon source={badgePin} resizeMode="contain" />
          <BannerContent>
            <BannerSubLabel>ADICIONAR AO ROTEIRO</BannerSubLabel>
            <BannerTitle>{destination}</BannerTitle>
          </BannerContent>
          <DayBadge>
            <DayBadgeText>{day}</DayBadgeText>
          </DayBadge>
        </ItineraryBanner>

        <SectionTitle>Uma parada do seu jeito</SectionTitle>
        <SectionSubtitle>Inclua aquele lugar que só você conhece.</SectionSubtitle>

        <FieldGroup>
          <FieldLabel>Endereço ou referência *</FieldLabel>
          <FieldInputWrapper>
            <FieldIcon source={pinIcon} resizeMode="contain" />
            <FieldInput
              placeholder="Digite o endereço ou referência"
              placeholderTextColor="#98a2b3"
              value={address}
              onChangeText={setAddress}
            />
          </FieldInputWrapper>
        </FieldGroup>

        <DayConfigCard>
          <DayConfigHeader>
            <DayConfigTitleRow>
              <DayConfigIcon source={calendarIcon} resizeMode="contain" />
              <DayConfigTitle>No seu {day}</DayConfigTitle>
            </DayConfigTitleRow>
            <ChangeDayButton activeOpacity={0.7}>
              <ChangeDayText>Alterar dia</ChangeDayText>
            </ChangeDayButton>
          </DayConfigHeader>

          <DayConfigGrid>
            <DayConfigCol>
              <FieldLabel>Horário da visita *</FieldLabel>
              <DayConfigInputWrapper>
                <DayConfigIcon source={clockIcon} resizeMode="contain" />
                <FieldInput
                  placeholder="16:00"
                  placeholderTextColor="#98a2b3"
                  value={visitTime}
                  onChangeText={setVisitTime}
                />
              </DayConfigInputWrapper>
            </DayConfigCol>

            <DayConfigCol>
              <FieldLabel>Duração estimada</FieldLabel>
              <DayConfigInputWrapper>
                <DayConfigIcon source={hourglassIcon} resizeMode="contain" />
                <FieldInput
                  placeholder="1 hora"
                  placeholderTextColor="#98a2b3"
                  value={duration}
                  onChangeText={setDuration}
                />
              </DayConfigInputWrapper>
            </DayConfigCol>
          </DayConfigGrid>

          <DayConfigMeta>Depois de Lagoa da conceição · 14:00</DayConfigMeta>
        </DayConfigCard>

        <PrimaryButton
          activeOpacity={0.85}
          onPress={() => onSaveDayStop && onSaveDayStop({ address, visitTime, duration })}
        >
          <PrimaryButtonText>✓ Salvar e adicionar ao Dia 1</PrimaryButtonText>
        </PrimaryButton>
        <HelperCaption>Este local ficará salvo apenas no seu roteiro.</HelperCaption>

        <SectionTitle>O melhor de Floripa</SectionTitle>
        <SectionSubtitle>
          Praias, sabores e vistas para deixar seu primeiro dia ainda mais especial.
        </SectionSubtitle>

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

        <FeaturedCard>
          <FeaturedImage source={praiaMoleImg} resizeMode="cover" />
          <FeaturedContent>
            <FeaturedHeaderRow>
              <FeaturedTitle>Praia Mole</FeaturedTitle>
              <FeaturedRating>★ 4,8</FeaturedRating>
            </FeaturedHeaderRow>
            <FeaturedSubMeta>Praia · Leste da Ilha · 14 km</FeaturedSubMeta>
            <FeaturedDescription>
              Mar azul, areia clara e natureza por todos os lados. Reserve um tempo para curtir sem pressa.
            </FeaturedDescription>
            <BadgeRow>
              <BadgePill>
                <BadgeText>Gratuito</BadgeText>
              </BadgePill>
              <BadgePill>
                <BadgeText>🕒 Reserve 2 h</BadgeText>
              </BadgePill>
            </BadgeRow>
            <PrimaryButton
              activeOpacity={0.85}
              onPress={onAddFeaturedPress}
              style={{ marginTop: 6 }}
            >
              <PrimaryButtonText>+ Adicionar ao Dia 1</PrimaryButtonText>
            </PrimaryButton>
          </FeaturedContent>
        </FeaturedCard>

        <SectionHeaderRow>
          <SectionTitle style={{ fontSize: 18 }}>Também vale conhecer</SectionTitle>
          <SectionCount>3 lugares</SectionCount>
        </SectionHeaderRow>

        {otherPlaces.map((item) => (
          <PlaceItemCard key={item.id}>
            <PlaceItemImage source={item.image} resizeMode="cover" />
            <PlaceItemContent>
              <PlaceItemTitle>{item.title}</PlaceItemTitle>
              <PlaceItemSub>{item.subtitle}</PlaceItemSub>
              <PlaceItemMeta>{item.meta}</PlaceItemMeta>
            </PlaceItemContent>
            <PlusButton
              activeOpacity={0.8}
              onPress={() => onAddPlacePress && onAddPlacePress(item)}
            >
              <PlusIcon source={btnPlus} resizeMode="contain" />
            </PlusButton>
          </PlaceItemCard>
        ))}

        <HelperCaption style={{ marginTop: 14 }}>
          Toque em + para incluir uma parada no Dia 1.
        </HelperCaption>
      </ScrollArea>

      <BottomNav activeTab="profile" onTabPress={onTabPress} />
    </Container>
  );
};

export default HighlightsExplore;
