import { AboutWrapper, ArrowLeft, AvailableBtn, AvailableDesc, AvailableTitle, AvailableWrapper, BackgroundImage, BtnText, Chip, ChipText, ChipWrapper, FavoriteWrapper, Gap12, Gap22, Gap8, Icon, IconCircle, IconL, IconWrapper, LocationWrapper, PlaceDesc, PlaceLocation, PlaceSubTitle, PlaceTitle, PlaceWrapper, RatingIcon, RatingText, RatingWrapper, ReadMoreBtn, SecondaryBtn, StyledView, TimeWrapper, TitleWrapper } from "./style"
import StarIcon from '../../assets/icons/star-icon.webp'
import LocationIcon from '../../assets/icons/location-icon.webp'
import ClockIcon from '../../assets/icons/clock-icon.webp'
import MapIcon from '../../assets/icons/map-icon.webp'
import ArrowRight from '../../assets/icons/arrow-right.webp'
import HeartIcon from '../../assets/icons/heart-icon.webp'
import ShareIcon from '../../assets/icons/share-icon.webp'
import LakeImage from '../../assets/images/lake-image.webp'
import { View } from "react-native"

const PlaceDetailScreen = () => {
    return (
        <StyledView>
            <BackgroundImage source={LakeImage}>
                <IconWrapper>
                    <IconCircle>
                        <ArrowLeft source={ArrowRight} />
                    </IconCircle>
                    <FavoriteWrapper>
                        <IconCircle>
                            <IconL source={ShareIcon} />
                        </IconCircle>
                        <IconCircle>
                            <IconL source={HeartIcon} />
                        </IconCircle>
                    </FavoriteWrapper>
                </IconWrapper>
            </BackgroundImage>

            <PlaceWrapper>
                <Gap22>
                    <Gap8>
                        <TitleWrapper>
                            <PlaceTitle>Lagoa da conceição</PlaceTitle>
                            <RatingWrapper>
                                <RatingIcon source={StarIcon} />
                                <RatingText>4,9</RatingText>
                            </RatingWrapper>
                        </TitleWrapper>

                        <LocationWrapper>
                            <Icon source={LocationIcon} />
                            <PlaceLocation>Florianópolis, SC</PlaceLocation>
                        </LocationWrapper>
                    </Gap8>

                    <ChipWrapper>
                        <Chip>
                            <ChipText>Ponto turístico</ChipText>
                        </Chip>
                        <Chip>
                            <ChipText>ao ar livre</ChipText>
                        </Chip>
                    </ChipWrapper>
                </Gap22>

                <AboutWrapper>
                    <Gap12>
                        <PlaceSubTitle>Sobre o local</PlaceSubTitle>
                        <PlaceDesc>
                            Cercada por montanhas, dunas e praias,
                            a Lagoa da Conceição é um dos lugares mais vibrantes da Ilha da Magia.
                            Perfeita para esportes aquáticos, gastronomia e um pôr do sol inesquecível.
                        </PlaceDesc>
                    </Gap12>
                    <ReadMoreBtn>Ler mais</ReadMoreBtn>
                </AboutWrapper>

                <AvailableWrapper>
                    <TimeWrapper>
                        <Icon source={ClockIcon} />
                        <View>
                            <AvailableTitle>Aberto agora</AvailableTitle>
                            <AvailableDesc>08:00 - 19:00</AvailableDesc>
                        </View>
                    </TimeWrapper>

                    <AvailableBtn>Ver horarios</AvailableBtn>
                </AvailableWrapper>

            </PlaceWrapper>
            <SecondaryBtn>
                <Icon source={MapIcon} />
                <BtnText>Ver no mapa</BtnText>
            </SecondaryBtn>
        </StyledView>
    )
}

export default PlaceDetailScreen