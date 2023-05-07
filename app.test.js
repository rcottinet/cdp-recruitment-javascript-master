const { filterOnAnimalName, appendCountOnName } = require("./app");

const data = [
  {
    name: "Dillauti",
    people: [
      {
        name: "Winifred Graham",
        animals: [
          { name: "Anoa" },
          { name: "Duck" },
          { name: "Narwhal" },
          { name: "Badger" },
          { name: "Cobra" },
          { name: "Crow" },
        ],
      },
      {
        name: "Blanche Viciani",
        animals: [
          { name: "Barbet" },
          { name: "Rhea" },
          { name: "Snakes" },
          { name: "Antelope" },
          { name: "Echidna" },
          { name: "Crow" },
          { name: "Guinea Fowl" },
          { name: "Deer Mouse" },
        ],
      },
    ],
  },
  {
    name: "Tohabdal",
    people: [
      {
        name: "Effie Houghton",
        animals: [
          { name: "Zebra" },
          { name: "Ring-tailed Lemur" },
          { name: "Fly" },
          { name: "Blue Iguana" },
          { name: "Emu" },
          { name: "African Wild Ass" },
          { name: "Numbat" },
        ],
      },
      {
        name: "Essie Bennett",
        animals: [
          { name: "Aldabra Tortoise" },
          { name: "Patagonian Toothfish" },
          { name: "Giant Panda" },
          { name: "Goat" },
          { name: "Quahog" },
          { name: "Collared Lemur" },
          { name: "Aldabra Tortoise" },
        ],
      },
      {
        name: "Owen Bongini",
        animals: [
          { name: "Zebrashark" },
          { name: "Dogs" },
          { name: "Mouse" },
          { name: "Numbat" },
          { name: "African Wild Dog" },
        ],
      },
    ],
  },
];

const filtered_data_expected = [
  {
    name: "Dillauti",
    people: [{ name: "Winifred Graham", animals: [{ name: "Cobra" }] }],
  },
  {
    name: "Tohabdal",
    people: [
      { name: "Effie Houghton", animals: [{ name: "Zebra" }] },
      {
        name: "Essie Bennett",
        animals: [{ name: "Aldabra Tortoise" }, { name: "Aldabra Tortoise" }],
      },
      { name: "Owen Bongini", animals: [{ name: "Zebrashark" }] },
    ],
  },
];

const count_data_expected = [
  {
    name: "Dillauti [2]",
    people: [
      {
        name: "Winifred Graham [6]",
        animals: [
          { name: "Anoa" },
          { name: "Duck" },
          { name: "Narwhal" },
          { name: "Badger" },
          { name: "Cobra" },
          { name: "Crow" },
        ],
      },
      {
        name: "Blanche Viciani [8]",
        animals: [
          { name: "Barbet" },
          { name: "Rhea" },
          { name: "Snakes" },
          { name: "Antelope" },
          { name: "Echidna" },
          { name: "Crow" },
          { name: "Guinea Fowl" },
          { name: "Deer Mouse" },
        ],
      },
    ],
  },
  {
    name: "Tohabdal [3]",
    people: [
      {
        name: "Effie Houghton [7]",
        animals: [
          { name: "Zebra" },
          { name: "Ring-tailed Lemur" },
          { name: "Fly" },
          { name: "Blue Iguana" },
          { name: "Emu" },
          { name: "African Wild Ass" },
          { name: "Numbat" },
        ],
      },
      {
        name: "Essie Bennett [7]",
        animals: [
          { name: "Aldabra Tortoise" },
          { name: "Patagonian Toothfish" },
          { name: "Giant Panda" },
          { name: "Goat" },
          { name: "Quahog" },
          { name: "Collared Lemur" },
          { name: "Aldabra Tortoise" },
        ],
      },
      {
        name: "Owen Bongini [5]",
        animals: [
          { name: "Zebrashark" },
          { name: "Dogs" },
          { name: "Mouse" },
          { name: "Numbat" },
          { name: "African Wild Dog" },
        ],
      },
    ],
  },
];

test("should filter on animal name succcesfully", () => {
  expect(filterOnAnimalName("ra", data)).toStrictEqual(filtered_data_expected);
});

test("should append count on name successfully", () => {
  expect(appendCountOnName(data)).toStrictEqual(count_data_expected);
});
