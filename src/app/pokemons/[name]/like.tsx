"use client";

import { useState } from "react";

const Like = () => {
  const [like, setLike] = useState(false);
  const [disLike, setDisLike] = useState(false);

  const changeLike = () => {
    setLike(!like);
    setDisLike(false);
  };
  const changeDisLike = () => {
    setDisLike(!disLike);
    setLike(false);
  };

  return (
    <>
      <p onClick={changeLike}>NO{like && "+1"}</p>
      <p>Do yoy like it?</p>
      <p onClick={changeDisLike}>YES{disLike && "+1"}</p>
    </>
  );
};

export default Like;
