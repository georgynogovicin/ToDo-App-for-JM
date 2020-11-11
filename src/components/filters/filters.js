import React, { Component } from 'react';

import './filters.css';

export default class Filters extends Component {

    // state = {
    //     items: [
    //         { id: 1, active: false },
    //         { id: 2, active: false },
    //         { id: 3, active: false },
    //     ]
    // }

    // toggleClass = ( id ) => {
    //     this.setState(({items}) => {
    //         const idx = item.findIndex(item => item.id = 1);

    //         const oldItem = items[idx];
    //         const newItem = { ...oldItem, active: !oldItem.active };
    //         const newArr = [ ...items.slice(0, idx),
    //                             newItem,
    //                             ...items.slice(idx + 1)                
    //         ];

    //         return {
    //             items: newArr
    //         }
    //     });
    // }

    onFilterClick = (event) => {
        this.props.changeFilter(event.target.innerText);

        
    }

    render() {
        return (
            <ul className="filters"
                onClick={ this.onFilterClick }
            >
                <li>
                    <button className="selected"
                    >All</button>
                </li>
                <li>
                    <button>Active</button>
                </li>
                 <li>
                    <button>Completed</button>
                </li>
            </ul>
        );
    };
};

