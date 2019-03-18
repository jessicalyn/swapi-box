import React from 'react'

const fetchAnything = (url) => {
    const fetchCall = fetch(url)
        .then(response => response.json())
        .catch(error => error.message)
        return fetchCall
}

export { fetchAnything }