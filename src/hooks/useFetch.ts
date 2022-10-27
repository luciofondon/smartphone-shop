import { useEffect, useRef, useState } from 'react';
import { getHoursDiff } from '../utils/date-util';

const useFetch = <S>(url: string, key: string, initialState: S): { data: S } => {
  const [data, setData] = useState<S>(initialState);

  useEffect(() => {
    (async () => {
      const data = localStorage.getItem(key);
      if (data) {
        const dataLocalStorage = JSON.parse(data);
        const date = new Date(dataLocalStorage.date);
        console.log(date);
        if (getHoursDiff(date, new Date()) > 2) {
          localStorage.removeItem(key);
        }

        setData(dataLocalStorage.data);
      } else {
        const response = await fetch(url);
        const data = await response.json();
        localStorage.setItem(
          key,
          JSON.stringify({
            date: new Date(),
            data,
          }),
        );
        setData(data);
      }
    })();
  }, [url]);
  return { data };
};

export default useFetch;
