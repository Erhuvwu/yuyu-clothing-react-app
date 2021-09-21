

import React, { Component } from 'react';
import MenuItem from './MenuItem';

class Directory extends Component {
    state={
        sections: [{
            title: 'women clothes',
            imageUrl: 'https://media.istockphoto.com/photos/the-perfect-dress-for-me-picture-id660490044?k=20&m=660490044&s=612x612&w=0&h=7_XtiEKBL_eJnf7Ep0XhJIA7uvksmyhBbmUzzNWgJg8=',
            id: 1
        },
        {
            title: 'women bags',
            imageUrl: 'https://images.unsplash.com/photo-1591348278900-019a8a2a8b1d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHdvbWVuJTIwYmFnc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            id: 2
        },
        {
            title: 'women shoes',
            imageUrl: 'https://media.istockphoto.com/photos/view-of-woman-wearing-high-heels-picture-id481238684?k=20&m=481238684&s=612x612&w=0&h=hAG7EuIPwvEcrWyKF2vTVxKjdVOs7Lnu7CdlruowaLo=',
            id: 3
        }, 
        {
            title: 'men clothes',
            imageUrl: 'https://media.istockphoto.com/photos/row-of-mens-shirts-in-blue-colors-on-hanger-picture-id1041286698?k=20&m=1041286698&s=612x612&w=0&h=hkudKqVnFe9T5SmiSZm3jkiioD4_AUSFRJJ3ToOl7vc=',
            size: 'large',
            id: 4
            
        },
        {
            title: 'men shoes',
            imageUrl: 'https://media.istockphoto.com/photos/men-trying-different-shoes-picture-id1152511935?k=20&m=1152511935&s=612x612&w=0&h=mMcKAq6DL4i3qNxejlKceRqu_GY_qzbEm-9jsCgTbZk=',
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