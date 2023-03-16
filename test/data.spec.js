import {
  calcPorcentagem,
  harryFunçoes,
  filtrarPersonagemCasa,
  selecionaNomeAz,
  selecionaNomeZa,
} from "../src/data";

const personagensData = [
  {
    name: "Hermione",
    house: "Gryffindor",
  },
  {
    name: "Draco",
    house: "Slytherin",
  },
  {
    name: "Luna",
    house: "Hufflepuff",
  },
  {
    name: "Albino peacock",
    house: null,
  },
  {
    name: "Gilderoy Lockhart",
    house: "Ravenclaw",
  }
];
//calculo
describe("Teste calcularPorcentagem", () => {
  it("is a function", () => {
    expect(typeof harryFunçoes).toBe("function");
  });
  it("should calculate percentage", () => {
    expect(calcPorcentagem(personagensData[i], personagensData.length)).toBe(part/todos);
    const todos = personagensData.length
    todos = 100%
    const part = personagensData[i]

  });
});
//filtro ver todos
describe('searchBar', () => {
  it('deveria ser uma função', () => {
    expect(typeof harryFunçoes).toBe("function");
  });
  
  it('deveria retornar "Hermione" para "Hermione"', () => {
    expect(harryFunçoes(personagensData, "Hermione")).toEqual([personagensData[0]]);
  });
});


// filtro por casa
describe('filterHouse', () => {
  it('deveria ser uma função', () => {
    expect(typeof filtrarPersonagemCasa).toBe('function');
  });

  it('deveria retornar "Luna" para "Hufflepuff"', () => {
    expect(filtrarPersonagemCasa(personagensData, "Hufflepuff")).toEqual([personagensData[2]]);

  });
});
//filtro ver todos
describe("searchBar", () => {
  it("deveria ser uma função", () => {
    expect(typeof harryFunçoes).toBe("function");
  });

  it('deveria retornar "Hermione" para "Hermione"', () => {
    expect(harryFunçoes(personagensData, "Hermione")).toEqual([
      personagensData[0],
    ]);

  });
});


  it('deveria retornar "Hermione" para "Gryffindor"', () => {
    expect(filtrarPersonagemCasa(personagensData, "Gryffindor")).toEqual([personagensData[0]]);
  });

  it('deveria retornar "Draco" para "Slytherin"', () => {
    expect(filtrarPersonagemCasa(personagensData, "Slytherin")).toEqual([personagensData[1]]);
  });

  it('deveria retornar "Gilderoy Lockhart" para "Ravenclaw"', () => {
    expect(filtrarPersonagemCasa(personagensData, "Ravenclaw")).toEqual([personagensData[4]]);
  });
});
// ordenação
describe("Teste selectNameAz", () => {
  it("is a function", () => {
    expect(typeof selecionaNomeAz).toBe("function");
  });

  const HarryPotterAz = [
    {
      name: "Harry",
      house: "Gryffindor",
    },
    {
      name: "Severo",
      house: "Slytherin",
    },
    {
      name: "Cedrico",
      house: "Hufflepuff",
    },
  ];

  const listaOrdenada = selecionaNomeAz(HarryPotterAz);

  it('should returns `O primeiro nome da ordem de A-Z "Cedrico"`', () => {
    expect(listaOrdenada[0].name).toBe("Cedrico");
  });
});

describe("Teste selectNameZa", () => {
  it("is a function", () => {
    expect(typeof selecionaNomeZa).toBe("function");
  });

  const HarryPotterZa = [
    {
      name: "Lucio",
      house: "Slytherin",
    },
    {
      name: "Rony",
      house: "Gryffindor",
    },

  ];

  const listaOrdenadaZa = selecionaNomeZa(HarryPotterZa);

  it('should returns `O primeiro nome da ordem de Z-A "Rony"`', () => {
    expect(listaOrdenadaZa[0].name).toBe("Rony");
  });
});
//campo de busca
describe("Teste filterFind", () => {
  it("is a function", () => {
    expect(typeof harryFunçoes).toBe("function");

// filtro por casa
describe("filterHouse", () => {
  it("deveria ser uma função", () => {
    expect(typeof filtrarPersonagemCasa).toBe("function");
  });

  it('deveria retornar "Luna" para "Hufflepuff"', () => {
    expect(filtrarPersonagemCasa(personagensData, "Hufflepuff")).toEqual([
      personagensData[2],
    ]);
  });

  it('deveria retornar "Hermione" para "Gryffindor"', () => {
    expect(filtrarPersonagemCasa(personagensData, "Gryffindor")).toEqual([
      personagensData[0],
    ]);
  });

  it('deveria retornar "Draco" para "Slytherin"', () => {
    expect(filtrarPersonagemCasa(personagensData, "Slytherin")).toEqual([
      personagensData[1],
    ]);
  });

  it('deveria retornar "Gilderoy Lockhart" para "Ravenclaw"', () => {
    expect(filtrarPersonagemCasa(personagensData, "Ravenclaw")).toEqual([
      personagensData[4],
    ]);
  });
});
// ordenação
describe("Teste selectNameAz", () => {
  it("is a function", () => {
    expect(typeof selecionaNomeAz).toBe("function");
  });

  const HarryPotterAz = [
    {
      name: "Harry",
      house: "Gryffindor",
    },
    {
      name: "Severo",
      house: "Slytherin",
    },
    {
      name: "Cedrico",
      house: "Hufflepuff",
    },
  ];

  const listaOrdenada = selecionaNomeAz(HarryPotterAz);

  it('should returns `O primeiro nome da ordem de A-Z "Cedrico"`', () => {
    expect(listaOrdenada[0].name).toBe("Cedrico");
  });
});

describe("Teste selectNameZa", () => {
  it("is a function", () => {
    expect(typeof selecionaNomeZa).toBe("function");
  });

  const HarryPotterZa = [
    {
      name: "Lucio",
      house: "Slytherin",
    },
    {
      name: "Rony",
      house: "Gryffindor",
    },
  ];

  const listaOrdenadaZa = selecionaNomeZa(HarryPotterZa);

  it('should returns `O primeiro nome da ordem de Z-A "Rony"`', () => {
    expect(listaOrdenadaZa[0].name).toBe("Rony");
  });
});
//campo de busca
describe("Teste filterFind", () => {
  it("is a function", () => {
    expect(typeof harryFunçoes).toBe("function");
  });


  it('should returns "[{ Name: "Hermione", House: "Gryffindor"}]" ', () => {
    expect(harryFunçoes("Hermione", personagensData)).toStrictEqual([
      {
        name: "Hermione",
        house: "Gryffindor",
      },
    ]);
  });

});

});

