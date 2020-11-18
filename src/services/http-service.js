import axios from "axios";

export function getAllCategories() {
    return axios.get("http://localhost:3004/categories")
}

export function getCommentsByCategory(category){
    return axios.get(`http://localhost:3004/comments?category=${category}`)
}



