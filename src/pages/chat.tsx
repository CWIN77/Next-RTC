import { useEffect } from "react";

export default function Chat() {
  const unloadHandle = () => {
    fetch('http://localhost:4000/api/hello', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: "데이터데이터"
      }),
      keepalive: true
    })
  };
  useEffect(() => {
    // unloadHandle();
    window.addEventListener('beforeunload', unloadHandle);
  }, [])
  return (
    <div>
      <h1>ggssssss!!!!!!!</h1>
    </div>
  );
};
