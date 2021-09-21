

import React, { Component } from 'react';
import MenuItem from './MenuItem';

class Directory extends Component {
    state={
        sections: [{
            title: 'Hats',
            imageUrl: 'https://images.unsplash.com/photo-1474039880361-1cd8259d95db?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGhhdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            id: 1
        },
        {
            title: 'Sneakers',
            imageUrl: 'https://images.unsplash.com/photo-1612902376491-7a8a99b424e8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=600',
            id: 2
        },
        {
            title: 'Jacket',
            imageUrl: 'https://images.unsplash.com/photo-1526725078729-d6b4c2b2a8b7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fHdvbWVuJTIwamFja2V0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            id: 3
        }, 
        {
            title: 'Womens',
            imageUrl: 'https://media.istockphoto.com/photos/the-perfect-dress-for-me-picture-id660490044?k=20&m=660490044&s=612x612&w=0&h=7_XtiEKBL_eJnf7Ep0XhJIA7uvksmyhBbmUzzNWgJg8=',
            size: 'large',
            id: 4
            
        },
        {
            title: 'Mens',
            imageUrl: 'https://media.istockphoto.com/photos/row-of-mens-shirts-in-blue-colors-on-hanger-picture-id1041286698?k=20&m=1041286698&s=612x612&w=0&h=hkudKqVnFe9T5SmiSZm3jkiioD4_AUSFRJJ3ToOl7vc=',
            size: 'large',
            id: 5
        }]
    }
    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(section =>(
                        <MenuItem key={section.id} title={section.title} imageUrl={section.imageUrl} size={section.size}/>
                    ))
                }
            </div>
        );
    }
}

export default Directory;