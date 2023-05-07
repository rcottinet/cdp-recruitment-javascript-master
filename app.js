var { data } = require("./data");
const util = require("util");

const filter_arg_regex = new RegExp(/^--filter=[a-zA-Z]+$/);
const count_arg_regex = new RegExp(/^--count$/);

if (process.argv[2]) {
  if (filter_arg_regex.test(process.argv[2])) {
    const lookupValue = process.argv[2].split("=")[1];
    const res = filterOnAnimalName(lookupValue, data);

    console.log(util.inspect(res, false, null, true));
  } else if (count_arg_regex.test(process.argv[2])) {
    const res = appendCountOnName(data);

    console.log(util.inspect(res, false, null, true));
  }
}

function filterOnAnimalName(lookupValue, data) {
  return data
    .map((country) => ({
      ...country,
      people: country.people
        .map((person) => ({
          ...person,
          animals: person.animals.filter((animal) =>
            animal.name.includes(lookupValue)
          ),
        }))
        .filter((person) => person.animals.length > 0),
    }))
    .filter((country) => country.people.length > 0);
}

function appendCountOnName(data) {
  return data.map((country) => ({
    ...country,
    name: `${country.name} [${country.people.length}]`,
    people: country.people.map((person) => ({
      ...person,
      name: `${person.name} [${person.animals.length}]`,
    })),
  }));
}

module.exports = {
  filterOnAnimalName,
  appendCountOnName,
};
