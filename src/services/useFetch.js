import { useState, useEffect } from "react";
export default function useFetch(url) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    /*  
    using promise --- step 1
    getProducts("shoes")
      .then((response) => setProducts(response))
      .catch((e) => setError(e))
      .finally(() => setLoading(false));
      */

    /* using Promise with async/wait --- step -2 */
    async function init() {
      try {
        const response = await getProducts("shoes");
        setProducts(response);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    init();
  }, []);

}
