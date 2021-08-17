import React, { useEffect, useState } from 'react'
import { Wrapper } from './navigation.css'
import { Link } from "react-router-dom";
const Navigation = () => {
    const [nav, setNav] = useState([])

    useEffect(() => {
        async function get_navigation(id) {
            await fetch('http://localhost/pilica/api/?type=navigation&id=' + id)
                .then(response => response.json())
                .then(data => setNav(data))
        }
        get_navigation(0);
        return () => {
            setNav([]);
        }
    }, [])

    const navLink = nav.map(item => {
        const subLink = item.items.map(subItem => <Link to={`/article/${subItem.id}`}><li className="link">{subItem.name}</li></Link>)
        return <ul><li className="title">{item.name}</li>{subLink}</ul>
    });

    return (
        <Wrapper>
            {navLink}
        </Wrapper>
    )

}
export default Navigation;
