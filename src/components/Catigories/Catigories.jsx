import React from 'react';

/*const Categories = (props) => {

    let clickCategories = (element) => {
        alert(element);
    };

    return (
        <div className="categories">
            <ul>
                <li className="active">Все</li>
                {
                    props.items.map((element, index) => (
                        <li onClick={() => clickCategories(element)} key={`${element} ${index} `}>{element}</li>
                    ))
                }
            </ul>
        </div>
    )
};*/

class Categories extends React.Component {

    state = {
        activeItem: 0
    };

    onSelectItem = (index) => {
        this.setState({
            activeItem: index
        });
    };

    render() {
        return (
            <div className="categories">
                <ul>
                    {
                        this.props.items.map((element, index) => (
                            <li className={this.state.activeItem === index ? 'active' : ''}
                                onClick={() => {this.onSelectItem(index)}}
                                key={`${element} ${index} `}>{element}</li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default Categories;