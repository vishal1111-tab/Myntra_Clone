import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemActions } from "../store/itemSlice";
import { fetchStatusActions } from "../store/fetchStatusSlice";

function Fetchitems() {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    const controller = new AbortController();

    const signal = controller.signal;
    dispatch(fetchStatusActions.markFetchStarted());
    fetch("http://localhost:8080/items")
      .then((res) => res.json())
      .then(({ items }) => {
        /*data.items = {items} */
        dispatch(fetchStatusActions.markFetchFinished());
        dispatch(fetchStatusActions.markFetchDone());
        dispatch(itemActions.addInitialItem(items[0]));
      });

    return () => {
      controller.abort();
    };
  }, [fetchStatus]);

  return <></>;
}

export default Fetchitems;
