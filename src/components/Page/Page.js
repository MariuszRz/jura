import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
const Page = (props) => {
    const [title, setTitle] = useState('');
    const [page, setPage] = useState('')
    const id = props.match.params.id ?? 2;

    useEffect(() => {
        async function get_navigation(id) {
            await fetch('http://localhost/pilica/api/?type=article&id=' + id)
                .then(response => response.json())
                .then(data => {
                    setTitle(data.name)
                    setPage(data.article);

                })
        }
        get_navigation(id);
        return () => {
            setPage('');
        }
    }, [id])

    function createMarkup() {
        return { __html: page };
    }

    return (
        <div>
            <h2>{title}</h2>
            <div dangerouslySetInnerHTML={createMarkup()} />
            <p>Źródło <Link to="www.jura-pilica.com">www.jura-pilica.com</Link></p>
        </div>
    )
}

export default Page
