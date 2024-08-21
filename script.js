const G = {
  N: ["S", "A"], // Símbolos não terminais
  T: ["a", "b"], // Símbolos terminais
  P: {
    S: ["aA", "b"], // Produções para o símbolo 'S'
    A: ["a", "bS"], // Produções para o símbolo 'A'
  },
  S: "S", // Símbolo inicial
};
