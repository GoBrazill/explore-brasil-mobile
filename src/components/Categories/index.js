import {
    CategoryContainer,
    Category,
    CategoryImage,
    CategoryName,
} from "./style";

export const Categories = ({ categoryIcon, categoryName }) => {
    return (
        <CategoryContainer>
            <Category>
                <CategoryImage source={categoryIcon} />
            </Category>
            <CategoryName>{categoryName}</CategoryName>
        </CategoryContainer>
    );
};

export default Categories;