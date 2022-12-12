
import "./HomeCategory.css";

const HomeCategory = ({ image, title }) => {
    console.log('image: ', image);
    console.log();

    return (
        <div className="home-category-container">
            { image && <img src={image} alt="" /> }

            <div className="home-category-overlay"><span>&nbsp;</span></div>

            <div className="home-category-title">
                <span>{ title }</span>
            </div>
        </div>
    );
};

export default HomeCategory;