import { get } from "./http";

const host = "https://sergiosanchezmarcos.carto.com/api/v2/";

export const airports = async () => {
  try {
    const response = await get({
      host,
      path: "sql",
      query:
        "q=SELECT%20*%20FROM%20airports&format=GeoJSON&api_key=iLfij8QGa3e81O4uwFaDwA"
    });

    return await response.json();
  } catch (_) {
    return require("../../../data/airports.json");
  }
};
