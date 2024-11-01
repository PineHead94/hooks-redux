import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts, getUsers, testAction } from "../slices/dataSlice";

export default function DataComponent(props) {
  const { data, loading, error, postData } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const userApi = useCallback(() => {
    dispatch(getUsers());
  }, []);

  const postApi = useCallback(() => {
    dispatch(getPosts());
  }, []);

  return (
    <div className="data-component-container">
      <div>
        {data.title ?? (
          <div className="data-component-wrapper">{data.title}</div>
        )}
      </div>
      <button className="api-button" onClick={() => userApi()}>
        Call user api
      </button>
      <button className="api-button" onClick={() => postApi()}>
        Call post api
      </button>
      <button
        className="api-button"
        onClick={() => dispatch(testAction("component name: DataComponent"))}
      >
        Test action
      </button>
    </div>
  );
}
