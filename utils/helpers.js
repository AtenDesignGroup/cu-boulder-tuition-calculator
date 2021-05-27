import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const getUrlPathParams = () => {
  const [pathParams, setPathParams] = useState("");
  useEffect(() => {
    setPathParams(router?.asPath?.slice(router?.pathname?.length));
  });
  const router = useRouter();
  return pathParams;
}

const isStringEmpty = (val) => {
  if(val === undefined ||
    val === null ||
    val === ''){
    return true
  } else {
    return false
  }
}

export {isStringEmpty, getUrlPathParams}

