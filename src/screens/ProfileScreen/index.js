import BottomNav from "../../components/BottomNav"
import { CardIcon, CardIconWrapper, CardTitle, ExitAccBtn, ExitAccBtnTxt, Flex1, NameWrapper, PicIcon, PicIconWrapper, ProfileCard, ProfileCardWrapper, ProfileEmail, ProfileInfoWrapper, ProfileName, ProfilePic, ProfilePicWrapper, ProfileScreenWrapper, ProfTitle, ScreenWrapper, Stat, StatDesc, StatsWrapper, StatTitle, TitleWrapper, VersionText, VerticalLine } from "./style"
import PictureIcon from '../../assets/icons/picture-icon.webp'
import EditProfileIcon from '../../assets/icons/edit-profile-icon.webp'
import OrangeArrowRightIcon from '../../assets/icons/orange-arrow-right-icon.webp'
import RoadTripIcon from '../../assets/icons/road-trip-icon.webp'
import ConfigIcon from '../../assets/icons/config-icon.webp'
import NotificationsIcon from '../../assets/icons/notifications-icon.webp'
import DarkModeIcon from '../../assets/icons/dark-mode-icon.webp'
import TosIcon from '../../assets/icons/tos-icon.webp'
import ProfilePicPlaceholder from '../../assets/images/profile-pic-placeholder.webp'
import { ScrollView } from "react-native"
import { router } from "expo-router"

const ProfileScreen = () => {
    return (
        <Flex1>
            <ScrollView showsVerticalScrollIndicator={false} horizontal={false}>
                <ScreenWrapper>

                    <ProfileInfoWrapper>

                        <ProfilePicWrapper>
                            <ProfilePic source={ProfilePicPlaceholder} />
                            <PicIconWrapper>
                                <PicIcon source={PictureIcon} />
                            </PicIconWrapper>
                        </ProfilePicWrapper>

                        <NameWrapper>
                            <ProfileName>Francisco mulher</ProfileName>
                            <ProfileEmail>francisco.mulher@email.com</ProfileEmail>
                        </NameWrapper>

                        <StatsWrapper>
                            <Stat>
                                <StatTitle>12</StatTitle>
                                <StatDesc>viagens</StatDesc>
                            </Stat>

                            <VerticalLine />

                            <Stat>
                                <StatTitle>28</StatTitle>
                                <StatDesc>favoritos</StatDesc>
                            </Stat>

                            <VerticalLine />

                            <Stat>
                                <StatTitle>7</StatTitle>
                                <StatDesc>roteiros</StatDesc>
                            </Stat>
                        </StatsWrapper>
                    </ProfileInfoWrapper>

                    <ProfileScreenWrapper>
                        <ProfTitle>Minha Conta</ProfTitle>

                        <ProfileCard>
                            <ProfileCardWrapper>
                                <TitleWrapper>
                                    <CardIconWrapper>
                                        <CardIcon source={EditProfileIcon} />
                                    </CardIconWrapper>
                                    <CardTitle>Editar perfil</CardTitle>
                                </TitleWrapper>
                                <CardIcon source={OrangeArrowRightIcon} />
                            </ProfileCardWrapper>

                            <ProfileCardWrapper>
                                <TitleWrapper>
                                    <CardIconWrapper>
                                        <CardIcon source={RoadTripIcon} />
                                    </CardIconWrapper>
                                    <CardTitle>Meu roteiro</CardTitle>
                                </TitleWrapper>
                                <CardIcon source={OrangeArrowRightIcon} />
                            </ProfileCardWrapper>

                            <ProfileCardWrapper>
                                <TitleWrapper>
                                    <CardIconWrapper>
                                        <CardIcon source={ConfigIcon} />
                                    </CardIconWrapper>
                                    <CardTitle>Configurações</CardTitle>
                                </TitleWrapper>
                                <CardIcon source={OrangeArrowRightIcon} />
                            </ProfileCardWrapper>
                        </ProfileCard>

                        <ProfTitle>Preferências</ProfTitle>

                        <ProfileCard>
                            <ProfileCardWrapper>
                                <TitleWrapper>
                                    <CardIconWrapper>
                                        <CardIcon source={NotificationsIcon} />
                                    </CardIconWrapper>
                                    <CardTitle>Notificações</CardTitle>
                                </TitleWrapper>
                                <CardIcon source={OrangeArrowRightIcon} />
                            </ProfileCardWrapper>

                            <ProfileCardWrapper>
                                <TitleWrapper>
                                    <CardIconWrapper>
                                        <CardIcon source={DarkModeIcon} />
                                    </CardIconWrapper>
                                    <CardTitle>Modo Escuro</CardTitle>
                                </TitleWrapper>
                                <CardIcon source={OrangeArrowRightIcon} />
                            </ProfileCardWrapper>

                            <ProfileCardWrapper>
                                <TitleWrapper>
                                    <CardIconWrapper>
                                        <CardIcon source={TosIcon} />
                                    </CardIconWrapper>
                                    <CardTitle>Termos de uso</CardTitle>
                                </TitleWrapper>
                                <CardIcon source={OrangeArrowRightIcon} />
                            </ProfileCardWrapper>
                        </ProfileCard>

                        <ExitAccBtn onPress={() => {router.replace('login')}}>
                            <ExitAccBtnTxt>Sair da conta</ExitAccBtnTxt>
                        </ExitAccBtn>

                        <VersionText>Explore Brasil • versão do app v1.0</VersionText>
                    </ProfileScreenWrapper>
                </ScreenWrapper>
            </ScrollView>
            <BottomNav activeTab="profile" />
        </Flex1>
    )
}

export default ProfileScreen