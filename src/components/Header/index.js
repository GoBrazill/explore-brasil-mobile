import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  HeaderContainer,
  BackHeaderContent,
  BackButton,
  ArrowIcon,
  HeaderTitle,
  SearchContainer,
  SearchBar,
  SearchBarIcon,
  SearchBarInput,
  FilterButton,
  SearchBarFilter,
} from "./style";

import arrowLeft from "../../assets/icons/arrow-left.webp";
import MagnifyingGlass from "../../assets/icons/magnifying-glass.webp";
import Filter from "../../assets/icons/filter-icon.webp";

export const Header = ({
  variant = "comeBack",
  title,
  hasBackIcon = true,
  onBackPress,
  placeholder = "Busque destinos, cidades...",
  onFilterPress,
  onChangeSearchText,
  searchValue,
}) => {
  const insets = useSafeAreaInsets();

  return (
    <HeaderContainer topInset={insets.top}>
      {variant === "search" ? (
        <SearchContainer>
          <SearchBar>
            <SearchBarIcon source={MagnifyingGlass} />
            <SearchBarInput
              placeholder={placeholder}
              value={searchValue}
              onChangeText={onChangeSearchText}
            />
          </SearchBar>

          <FilterButton activeOpacity={0.7} onPress={onFilterPress}>
            <SearchBarFilter source={Filter} />
          </FilterButton>
        </SearchContainer>
      ) : (
        <BackHeaderContent>
          {hasBackIcon ? (
          <BackButton activeOpacity={0.7} onPress={onBackPress}>
            <ArrowIcon source={arrowLeft} resizeMode="contain" />
          </BackButton>
          ) : null}
          <HeaderTitle>{title}</HeaderTitle>
        </BackHeaderContent>
      )}
    </HeaderContainer>
  );
};

export default Header;