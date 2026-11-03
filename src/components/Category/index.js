import { Category, CategoryBackground, CategoryImage, CategoryName } from "./style"

export const Category = ({categoryIcon, categoryName}) =>{
    return(
        <Category>
            <CategoryBackground>
                <CategoryImage source={categoryIcon}/>
            </CategoryBackground>
            <CategoryName>{categoryName}</CategoryName>
        </Category>
    )
}