import React from "react";
import {
  NavContainer,
  NavItem,
  IconCircle,
  NavIcon,
  NavText,
} from "./style";

const navTabs = [
  {
    id: "home",
    label: "Início",
    icon: require("../../assets/icons/home-icon.webp"),
    activeIcon: require("../../assets/icons/home-active-icon.webp"),
  },
  {
    id: "map",
    label: "Mapa",
    icon: require("../../assets/icons/map-icon.webp"),
    activeIcon: require("../../assets/icons/map-active-icon.webp"),
  },
  {
    id: "favorites",
    label: "Favoritos",
    icon: require("../../assets/icons/favorite-icon.webp"),
    activeIcon: require("../../assets/icons/heart-active-icon.webp"),
  },
  {
    id: "profile",
    label: "Perfil",
    icon: require("../../assets/icons/profile-icon.webp"),
    activeIcon: require("../../assets/icons/profile-active-icon.webp"),
  },
];

export const BottomNav = ({ activeTab = "home", onSelectTab }) => {
  return (
    <NavContainer>
      {navTabs.map((tab) => {
        const isActive = activeTab === tab.id;

        return (
          <NavItem
            key={tab.id}
            activeOpacity={0.7}
            onPress={() => onSelectTab && onSelectTab(tab.id)}
          >
            <IconCircle isActive={isActive}>
              <NavIcon
                source={isActive ? tab.activeIcon : tab.icon}
                resizeMode="contain"
              />
            </IconCircle>
            <NavText isActive={isActive}>{tab.label}</NavText>
          </NavItem>
        );
      })}
    </NavContainer>
  );
};

export default BottomNav;