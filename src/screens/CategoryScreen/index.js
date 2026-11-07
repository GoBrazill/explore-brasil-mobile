import { useWindowDimensions } from "react-native"
import { BackgroundImage, CardDesc, CardIcon, CardTitle, CategoryView, ContentWrapperB, ContentWrapperS, Grid, Icon, LargeCard, SmallCard } from "./style"
import Header from "../../components/Header"
import BeachImage from '../../assets/images/beach-image.webp'
import MuseumImage from '../../assets/images/museum-image.webp'
import ParkImage from '../../assets/images/park-image.webp'
import RestaurantImage from '../../assets/images/restaurant-image.webp'
import CultureImage from '../../assets/images/culture-image.webp'
import BeachIcon from '../../assets/icons/beach-icon.webp'
import MuseumIcon from '../../assets/icons/museum-icon.webp'
import ParkIcon from '../../assets/icons/park-icon.webp'
import RestaurantIcon from '../../assets/icons/restaurant-icon.webp'
import CultureIcon from '../../assets/icons/culture-icon.webp'

const CategoryScreen = () => {

    const { width } = useWindowDimensions()

    const calculatedWidth = (width - 62) / 2

    return (
        <>
            <Header title={'Categorias'} />
            <CategoryView>
                <Grid>
                    <LargeCard>
                        <BackgroundImage source={BeachImage} />
                        <ContentWrapperB>
                            <CardIcon>
                                <Icon source={BeachIcon} />
                            </CardIcon>
                            <CardTitle>Praias</CardTitle>
                            <CardDesc>128 lugares</CardDesc>
                        </ContentWrapperB>
                    </LargeCard>

                    <SmallCard cardWidth={calculatedWidth}>
                        <BackgroundImage source={MuseumImage} />
                        <ContentWrapperS>
                            <CardIcon>
                                <Icon source={MuseumIcon} />
                            </CardIcon>
                            <CardTitle>Museus</CardTitle>
                            <CardDesc>84 lugares</CardDesc>
                        </ContentWrapperS>
                    </SmallCard>

                    <SmallCard cardWidth={calculatedWidth}>
                        <BackgroundImage source={ParkImage} />
                        <ContentWrapperS>
                            <CardIcon>
                                <Icon source={ParkIcon} />
                            </CardIcon>
                            <CardTitle>Parques</CardTitle>
                            <CardDesc>143 lugares</CardDesc>
                        </ContentWrapperS>
                    </SmallCard>

                    <SmallCard cardWidth={calculatedWidth}>
                        <BackgroundImage source={RestaurantImage} />
                        <ContentWrapperS>
                            <CardIcon>
                                <Icon source={RestaurantIcon} />
                            </CardIcon>
                            <CardTitle>Restaurantes</CardTitle>
                            <CardDesc>234 lugares</CardDesc>
                        </ContentWrapperS>
                    </SmallCard>

                    <SmallCard cardWidth={calculatedWidth}>
                        <BackgroundImage source={CultureImage} />
                        <ContentWrapperS>
                            <CardIcon>
                                <Icon source={CultureIcon} />
                            </CardIcon>
                            <CardTitle>Cultura</CardTitle>
                            <CardDesc>70 lugares</CardDesc>
                        </ContentWrapperS>
                    </SmallCard>

                </Grid>
            </CategoryView>
        </>
    )
}

export default CategoryScreen