export const formPost = (endpoint, formData) => {
  fetch(endpoint, {
    method: "POST",
    mode: "same-origin",
    body: formData,
  })
    .then((response) => {
      /* tell me everything you know! */
      for (let key in response) {
        console.log("response: ", key, response[key]);
      }

      const result = response.text();
      if (!response.ok) {
        throw new Error("HTTP error: ", response.status);
      }
      return result;
    })
    .then((result) => {
      console.log("fetch result: ", result);
    })
    .catch((error) => {
      console.log("fetch error: ", error.message);
    });
};
