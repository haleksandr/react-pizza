import React, {useState} from 'react';
import PropTypes from 'prop-types';

const Categories = React.memo(function Categories(props) {
    return (
        <div className="categories">
            <ul>
                {
                    props.items.map((element, index) => (
                        <li onClick={() => props.onClickCategory(index)}
                            key={`${element} ${index} `}
                            className={props.activeCategory === index ? 'active' : ''}>{element}</li>
                    ))
                }
            </ul>
        </div>
    )
})

Categories.propTypes = {
    activeCategory: PropTypes.number.isRequired,
    items: PropTypes.arrayOf(PropTypes.object),
    onClickCategory: PropTypes.func
}

Categories.defaultProps = { activeCategory: null, items: []  }

export default Categories;