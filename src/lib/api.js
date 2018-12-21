const URL = "https://jsonplaceholder.typicode.com/posts";

class api {
  fetchPosts = async () => {
      const response = await fetch(URL);
      const rawData = await response.json();
      if (response.status >= 400) {
        throw new Error(rawData.errors);
      }
      return rawData
  }
}

export default new api();