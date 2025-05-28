import { useSelector } from 'react-redux';
import { getAllCategories } from '../../redux/categoriesRedux';
import { Link } from 'react-router-dom';

const CategoriesPage = () => {
    const categories = useSelector(getAllCategories);

    return (
        <div>
            <h1>Categories</h1>
            <ul>
                {categories.map(category => (
                    <li key={category}>
                        <Link to={`/category/${category.toLowerCase()}`}>{category}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoriesPage;
