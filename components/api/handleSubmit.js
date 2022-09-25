const handleSubmit = (formData) => {
    let data = new FormData(formData);
    return fetch('https://formspree.io/f/xqkjqllq', {
        method: 'POST',
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then((response) => {
        if (response.ok) {
            return true;
        } else {
            return false;
        }
    })
};

export default handleSubmit;