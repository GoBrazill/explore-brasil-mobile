import { View, Image } from "react-native"
import MagnifyingGlass from "../../assets/icons/magnifying-glass.webp"
import Filter from "../../assets/icons/filter-icon.webp"

export const Home = () => {
    return (
        <View>
            <View>
                <View>
                    <Image source={MagnifyingGlass} />
                    <Text>Busque destinos, cidades...</Text>
                </View>
                <Image source={Filter}/>
            </View>

            <View>
                <Text>Explore por categoria</Text>
                <Text>Ver todas</Text>
            </View>

            <View>

            </View>

        </View>
    )
}