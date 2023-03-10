import colGen from "../../../utility/colgen";
const cover = require("../../../assets/images/rock.png");
const created_at = new Date().toLocaleDateString();

export default {
  search: "",
  youtube: [
    {
      id: 1,
      name: "Bon Jovi - Livin' On A Prayer",
      url: "https://www.youtube.com/watch?v=lDK9QqIzhwk&list=PLVQ7g3e6O27cH8KG9mktLWH8zcqiwTntP&ab_channel=BonJoviVEVO",
      description: "description",
      cover,
      created_at,
      style: colGen(),
    },
    {
      id: 2,
      name: "Guns N' Roses - Sweet Child O' Mine",
      url: "https://www.youtube.com/watch?v=1w7OgIMMRc4&list=PLVQ7g3e6O27cH8KG9mktLWH8zcqiwTntP&index=2&ab_channel=GunsNRosesVEVO",
      description: "description",
      cover,
      created_at,
      style: colGen(),
    },
    {
      id: 3,
      name: "Steppenwolf - Born To Be Wild",
      url: "https://www.youtube.com/watch?v=rMbATaj7Il8&list=PLVQ7g3e6O27cH8KG9mktLWH8zcqiwTntP&index=3&ab_channel=MaxShkiv",
      description: "description",
      cover,
      created_at,
      style: colGen(),
    },
    {
      id: 4,
      name: "Kashmir - Led Zeppelin",
      url: "https://www.youtube.com/watch?v=sfR_HWMzgyc&list=PLVQ7g3e6O27cH8KG9mktLWH8zcqiwTntP&index=6&ab_channel=OzWho",
      description: "description",
      cover,
      created_at,
      style: colGen(),
    },
    {
      id: 5,
      name: "ZZ Top - La Grange",
      url: "https://www.youtube.com/watch?v=Vppbdf-qtGU&list=PLVQ7g3e6O27cH8KG9mktLWH8zcqiwTntP&index=19&ab_channel=MichaelBaker",
      description: "description",
      cover,
      created_at,
      style: colGen(),
    },
  ],
};
