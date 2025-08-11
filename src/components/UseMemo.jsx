import { useMemo } from 'react';

function Calculadora({ a, b }) {
    // useMemo é usado para memorizar o resultado de uma função cara
    a = Number(a);
    b = Number(b);

  const soma = useMemo(() => {
    console.log("Calculando...");
    return a + b;
  }, [a, b]); // Só recalcula se "a" ou "b" mudar

  return <div>Soma: {soma}</div>;
}

export default Calculadora;