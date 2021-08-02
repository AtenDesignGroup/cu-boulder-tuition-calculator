import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const GetUrlPathParams = () => {
  const [pathParams, setPathParams] = useState("");
  useEffect(() => {
    setPathParams(router?.asPath?.slice(router?.pathname?.length));
  }, [router]);
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

export {isStringEmpty, GetUrlPathParams}

