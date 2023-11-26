import { useEffect } from "react";

export function User(props) {
  useEffect(() => {
    alert("count is" + props.count);
  }, [props.count]);
  return (
    <div>
      <h1>Count props: {props.count}</h1>
      <h1>Data props: {props.data}</h1>
    </div>
  );
}

// export default User;
