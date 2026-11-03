import React from 'react';
import { StatusBar } from 'react-native';
import loadingHero from '../../assets/images/loading-hero.webp';
import logo from '../../assets/icons/logo.png';
import {
  Background,
  Overlay,
  CenterContainer,
  LogoImage,
  TaglineText,
  BottomContainer,
  StatusRow,
  StatusText,
  PercentageText,
  ProgressBarTrack,
  ProgressBarFill,
} from './style';

const Loading = ({ progress = 69 }) => {
  return (
    <Background source={loadingHero} resizeMode="cover">
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      <Overlay>
        <CenterContainer>
          <LogoImage source={logo} resizeMode="contain" />
          <TaglineText>
            DESCUBRA LUGARES INCRÍVEIS.{'\n'}VIVA HISTÓRIAS INESQUECÍVEIS.
          </TaglineText>
        </CenterContainer>

        <BottomContainer>
          <StatusRow>
            <StatusText>CARREGANDO</StatusText>
            <PercentageText>{progress}%</PercentageText>
          </StatusRow>
          <ProgressBarTrack>
            <ProgressBarFill $progress={progress} />
          </ProgressBarTrack>
        </BottomContainer>
      </Overlay>
    </Background>
  );
};

export default Loading;
