import React, {useState} from 'react';

const Categories = React.memo(function Categories(props) {

    const [activeItem, setActiveItem] = useState(0);

    const onSelectItem = (index) => {
        setActiveItem(index);
        props.onClickItem(index);
    };

    return (
        <div className="categories">
            <ul>
                {
                    props.items.map((element, index) => (
                        <li onClick={() => onSelectItem(index)}
                            key={`${element} ${index} `}
                            className={activeItem === index ? 'active' : ''}>{element}</li>
                    ))
                }
            </ul>
        </div>
    )
})

export default Categories;