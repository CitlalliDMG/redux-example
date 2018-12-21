const URL = "https://jsonplaceholder.typicode.com/posts";

class api {
  fetchPosts = async () => {
    const response = await fetch(URL);
    const rawData = await response.json();
    if (response.status >= 400) {
      throw new Error(rawData.errors);
    }
    return rawData;
  };

  fetchNewPost = async postData => {
    const response = await fetch(URL, {
      // Especifica el metodo
      method: "POST",
      // Dice que tipo de contenido sera, en este caso JSON
      headers: {
        "content-type": "application/json"
      },
      // Data que queremos enviar
      body: JSON.stringify(postData)
    });
    const rawData = await response.json();
    // console.log(rawData);
    if (response.status >= 400) {
      throw new Error(rawData.errors);
    }
    return rawData;
  };
}

export default new api();
