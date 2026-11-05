import { ScrollView } from "react-native";
import {
    Header,
    SearchContainer,
    SearchBar,
    SearchBarIcon,
    SearchBarInput,
    SearchBarFilter,
    FilterButton,
    ExploreCategories,
    ExploreTitle,
    ExploreAnchor,
    CategoriesContainer,
    ExploreContainer,
    GetInspiredContainer,
    GetInspiredBackground,
    InspireContainer,
    InspireText,
    InspireTitle,
    SeeRoadMap,
    RoadMapText,
    RoadMapIcon,
    RecommendedContainer,
    RecommendedHeader,
    RecommendedTitle,
    RecommendedAnchor,
    CarouselScroll,
} from "./style";

import Categories from "../../components/Categories";
import MagnifyingGlass from "../../assets/icons/magnifying-glass.webp";
import Filter from "../../assets/icons/filter-icon.webp";
import ArrowRight from "../../assets/icons/arrow-right.webp";
import SantaCatarinaImg from "../../assets/images/santa-catarina-image.webp";
import CarouselCard from "../../components/CarouselCard";
import BottomNav from "../../components/BottomNav";

// Mock de dados para o Carrossel
const recommendedItems = [
    {
        id: "1",
        title: "Lagoa da Conceição",
        rate: "4,9",
        location: "Florianópolis, SC",
        isFavorite: true,
    },
    {
        id: "2",
        title: "Praia do Rosa",
        rate: "4,8",
        location: "Imbituba, SC",
        isFavorite: false,
    },
    {
        id: "3",
        title: "Serra do Rio do Rastro",
        rate: "5,0",
        location: "Lauro Müller, SC",
        isFavorite: false,
    },
];

export const Home = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {/* Header */}
            <Header>
                <SearchContainer>
                    <SearchBar>
                        <SearchBarIcon source={MagnifyingGlass} />
                        <SearchBarInput placeholder="Busque destinos, cidades..." />
                    </SearchBar>

                    <FilterButton activeOpacity={0.7}>
                        <SearchBarFilter source={Filter} />
                    </FilterButton>
                </SearchContainer>
            </Header>

            {/* Explore por categoria */}
            <ExploreContainer>
                <ExploreCategories>
                    <ExploreTitle>Explore por categoria</ExploreTitle>
                    <ExploreAnchor>Ver todas</ExploreAnchor>
                </ExploreCategories>
                <CategoriesContainer>
                    <Categories categoryIcon={require("../../assets/icons/museum-icon.webp")} categoryName={"Praia"} />
                    <Categories categoryIcon={require("../../assets/icons/museum-icon.webp")} categoryName={"Museum"} />
                    <Categories categoryIcon={require("../../assets/icons/museum-icon.webp")} categoryName={"Restaurante"} />
                    <Categories categoryIcon={require("../../assets/icons/museum-icon.webp")} categoryName={"Parques"} />
                    <Categories categoryIcon={require("../../assets/icons/museum-icon.webp")} categoryName={"Cultura"} />
                </CategoriesContainer>
            </ExploreContainer>

            {/* Card Inspire-se */}
            <GetInspiredContainer>
                <GetInspiredBackground source={SantaCatarinaImg}>
                    <InspireContainer>
                        <InspireText>Inspire-se</InspireText>
                    </InspireContainer>
                    <InspireTitle>Descubra Santa Catarina</InspireTitle>
                    <SeeRoadMap>
                        <RoadMapText>ver roteiro</RoadMapText>
                        <RoadMapIcon source={ArrowRight} />
                    </SeeRoadMap>
                </GetInspiredBackground>
            </GetInspiredContainer>

            {/* Seção Recomendados com Carrossel Horizontal */}
            <RecommendedContainer>
                <RecommendedHeader>
                    <RecommendedTitle>Recomendados para você</RecommendedTitle>
                    <RecommendedAnchor>Ver todas</RecommendedAnchor>
                </RecommendedHeader>

                <CarouselScroll>
                    {recommendedItems.map((item) => (
                        <CarouselCard
                            key={item.id}
                            cardBackground={require("../../assets/images/lagoa-da-conceicao-image.webp")}
                            cardFavorite={
                                item.isFavorite
                                    ? require("../../assets/icons/heart-active-icon.webp")
                                    : require("../../assets/icons/heart-desactive-icon.webp")
                            }
                            cardTitle={item.title}
                            cardRateIcon={require("../../assets/icons/star-icon.webp")}
                            cardRate={item.rate}
                            cardLocationIcon={require("../../assets/icons/pin-icon.webp")}
                            cardLocation={item.location}
                        />
                    ))}
                </CarouselScroll>
            </RecommendedContainer>
            <BottomNav/>
        </ScrollView>
    );
};

export default Home;