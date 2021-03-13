export const SET_SORT_BY = "SET_SORT_BY";
export const SET_CATEGORY = "SET_CATEGORY"


export const setSortBy = (name) =>{
    return({
        type: SET_SORT_BY,
        payload: name
    })
}

export const setCotegory = (catIndex) =>{
    return({
        type: SET_CATEGORY,
        payload: catIndex
    })
}