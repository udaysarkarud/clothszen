import axios from "axios";

const BASE_URL = 'http://localhost:5000/api/';
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYWIxYmVkYTQyMGRmNmIzNGQ5ZWZlMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NjA2Nzc2MywiZXhwIjoxNjU2MzI2OTYzfQ.FjGkdlvbyyTIk9wa9lIxFsME_wVXB5v3d-VDUthAzgY';

export const publicRequest = axios.create({
    baseURL:BASE_URL,
});

export const userRequest = axios.create({
    baseURL:BASE_URL,
    headers:{token:`Bearer ${TOKEN}`}
});