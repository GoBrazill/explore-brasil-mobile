import { View, Text } from "react-native";
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
} from "./style";
import Categories from "../../components/Categories"
import MagnifyingGlass from "../../assets/icons/magnifying-glass.webp";
import Filter from "../../assets/icons/filter-icon.webp";

export const Home = () => {
    return (
        <View>
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


        </View>
    );
};

export default Home;