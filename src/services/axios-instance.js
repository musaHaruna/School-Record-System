import ax from 'axios';

export const axios = ax.create({
    baseURL: 'https://resultprocessingapi.onrender.com/api',
    headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
    },
});
