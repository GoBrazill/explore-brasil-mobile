import React, { useState } from "react";
import {
    MainContainer,
    ContentScroll,
    ExploreContainer,
    ExploreCategories,
    ExploreTitle,
    ExploreAnchor,
    CategoriesContainer,
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

import Header from "../../components/Header";
import Categories from "../../components/Categories";
import ArrowRight from "../../assets/icons/arrow-right.webp";
import SantaCatarinaImg from "../../assets/images/santa-catarina-image.webp";
import CarouselCard from "../../components/CarouselCard";
import BottomNav from "../../components/BottomNav";

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
    const [currentTab, setCurrentTab] = useState("home");

    return (
        <MainContainer>
            <Header
                variant="search"
                placeholder="Busque destinos, cidades..."
            />

            <ContentScroll>
                <ExploreContainer>
                    <ExploreCategories>
                        <ExploreTitle>Explore por categoria</ExploreTitle>
                        <ExploreAnchor>Ver todas</ExploreAnchor>
                    </ExploreCategories>
                    <CategoriesContainer>
                        <Categories categoryIcon={require("../../assets/icons/beach-icon.webp")} categoryName={"Praia"} />
                        <Categories categoryIcon={require("../../assets/icons/museum-icon.webp")} categoryName={"Museum"} />
                        <Categories categoryIcon={require("../../assets/icons/restaurant-icon.webp")} categoryName={"Restaurante"} />
                        <Categories categoryIcon={require("../../assets/icons/park-icon.webp")} categoryName={"Parques"} />
                        <Categories categoryIcon={require("../../assets/icons/culture-icon.webp")} categoryName={"Cultura"} />
                    </CategoriesContainer>
                </ExploreContainer>

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
            </ContentScroll>

            <BottomNav activeTab='home' onSelectTab={setCurrentTab} />
        </MainContainer>
    );
};

export default Home;