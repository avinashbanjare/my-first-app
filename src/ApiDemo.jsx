import axios from "axios";
import React, { useState, useEffect } from "react";

const ApiDemo = () => {
  const [stateName, setStateName] = useState(5);
  const [data, setData] = useState([]);
  const [photo, setPhoto] = useState([]);
  const [albums,SetAlbums] = useState([]);

  const whenPlusClicked = () => {
    const nayanumber = stateName + 1;

    if (nayanumber <= 0) {
      setStateName(nayanumber);
    } else {
    }
  };

  const whenMinusClicked = () => {
    const nayanumber = stateName - 1;

    if (nayanumber >= 0) {
      setStateName(nayanumber);
    } else {
    }
  };

  useEffect(() => {
    getDataFromBackend();
  }, []); // [] -> dependency array, () => -> callback, () => {} -> callback fn

  const getDataFromBackend = async () => {
    const res = await axios.get(
      "https://jsonplaceholder.typicode.com/comments" // -> api url
    );

   
    setData(res.data);

    const resp = await axios.get(
      "https://jsonplaceholder.typicode.com/photos" // -> api url
    );

    setPhoto(resp.data);

    const respe = await axios.get ("https://jsonplaceholder.typicode.com/photos" //-> api uri
);
SetAlbums(respe.data)
};

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        height: "600px",
        width: "1330px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Posts */}
      {data.length > 0 &&
        data.map((item) => {
          return (
            <div
              key={item.id}
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "6px",
                border: "2px solid gray",
                color: "black",
              }}
              
            >
              <span>name: {item.name}</span>
              <span>email: {item.email}</span>
              <span>body: {item.body}</span>
            </div>
          );
        })}

      {/* Photos */}

      {photo.length > 0 &&
        photo.map((item) => {
          return (
            <div
              key={item.id}
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "6px",
                border: "2px solid gray",
                color: "black",
              }}
            >
              <span>title: {item.title}</span>
              <img src={item.url} />
            </div>
          );
          
        })}

         {/* albums */}

      {albums.length > 0 &&
        albums.map((item) => {
          return (
            <div
              key={item.id}
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "4px",
                border: "2px solid gray",
                border: "2px solid gray",
                color: "blue",
              }}
            >
              <span>title: {item.id}</span>
              <span>title: {item.title}</span>
              <span>title: {item.userId}</span>
              
            </div>
          );
        })}
    </div>
  );
};

export default ApiDemo;

const data = [
  {
    body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
    email: "Eliseo@gardner.biz",
    id: 1,
    name: "id labore ex et quam laborum",
    postId: 1,
  },
  //// baki ke 499
];
