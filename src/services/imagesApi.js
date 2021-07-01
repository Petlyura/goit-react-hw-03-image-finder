import axios from "axios";

const fetchImagesWithQuery = (searchQuery, perPage = 12) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${searchQuery}&page=1&key=17911515-029745efd9a604c772829a1f1&image_type=photo&orientation=horizontal&per_page=${perPage}`
    )
    .then((response) => response.data.hits);
};

export default { fetchImagesWithQuery };
