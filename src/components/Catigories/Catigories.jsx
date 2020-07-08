import React, {useState} from 'react';

const Categories = (props) => {

    const [activeItem, setActiveItem] = useState(null);

    const onSelectItem = (index) => {
        setActiveItem(index);
        console.log(activeItem);
    };

    return (
        <div className="categories">
            <ul>
                <li onClick={ () => { onSelectItem(null) } }
                className={activeItem === null ? 'active' : ''} >All</li>
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
};

export default Categories;