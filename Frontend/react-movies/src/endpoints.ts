const baseURL = process.env.REACT_APP_API_URL;
export const GETGenres=`${baseURL}/genres/GetAllGenres`;
export const GETGenresById=`${baseURL}/genres`;
export const PUTGenres=`${baseURL}/genres`;
export const POSTGenres=`${baseURL}/genres`;
export const DELETEGenres = `${baseURL}/genres`;

export const GETActors = `${baseURL}/actors/GetAllActors`;
export const GETActorsById=`${baseURL}/actors`;
export const PUTActors=`${baseURL}/actors`;
export const POSTActors=`${baseURL}/actors`;
export const DELETEActors = `${baseURL}/actors`;
