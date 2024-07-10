const nftsMetadata = [
    {
      description: "It's actually a bison?",
      external_url: "https://austingriffith.com/portfolio/paintings/", // <-- this can link to a page for the specific file too
      image: "https://austingriffith.com/images/paintings/buffalo.jpg",
      name: "Buffalo",
      attributes: [
        {
          trait_type: "BackgroundColor",
          value: "green",
        },
        {
          trait_type: "Eyes",
          value: "googly",
        },
        {
          trait_type: "Stamina",
          value: 42,
        },
      ],
    },
    {
      description: "What a horn!",
      external_url: "https://austingriffith.com/portfolio/paintings/", // <-- this can link to a page for the specific file too
      image: "https://austingriffith.com/images/paintings/rhino.jpg",
      name: "Rhino",
      attributes: [
        {
          trait_type: "BackgroundColor",
          value: "pink",
        },
        {
          trait_type: "Eyes",
          value: "googly",
        },
        {
          trait_type: "Stamina",
          value: 22,
        },
      ],
    },
    {
      description: "So delicate.",
      external_url: "https://austingriffith.com/portfolio/paintings/", // <-- this can link to a page for the specific file too
      image: "https://austingriffith.com/images/paintings/flamingo.jpg",
      name: "Flamingo",
      attributes: [
        {
          trait_type: "BackgroundColor",
          value: "black",
        },
        {
          trait_type: "Eyes",
          value: "googly",
        },
        {
          trait_type: "Stamina",
          value: 6,
        },
      ],
    },
  ];
  
  export type NFTMetaData = (typeof nftsMetadata)[number];
  
  export default nftsMetadata;