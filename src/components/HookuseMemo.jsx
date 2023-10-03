import React, { useEffect, useMemo, useState } from "react";

export default function HookuseMemo() {
  const [number, setNumber] = useState(0);
  const premiumNumbers = useMemo(() => {
    return ["0", "100", "200", "300"];
  }, []);

  useEffect(() => {
    console.log("Premium numbers foi alterado!");
  }, [premiumNumbers]);
  return (
    <>
      <hr />
      <h2>Use Memo</h2>
      <input
        type="text"
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />
      {premiumNumbers.includes(number) ? <p>Acertou o numero</p> : ""}
    </>
  );
}
