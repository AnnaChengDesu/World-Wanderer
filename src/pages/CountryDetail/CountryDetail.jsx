import { useNavigate } from "react-router-dom";
import styles from "./CountryDetail.module.scss";
import { Button } from "@mui/material";
import { ArrowBackIosNew } from "@mui/icons-material";
import { Link } from "react-router-dom";

//  TODO: replace with real data from API
const MOCK_COUNTRY_DATA = {
  name: "Colombia",
  region: "South America",
  subregion: "South America",
  capital: "Bogotá",
  population: 48759958,
  borders: ["BRA", "ECU", "PAN", "PER", "VEN"],
  nativeName: "Colombia",
  currencies: "COP",
  languages: "Spanish",
  flag: "https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg",
  topLevelDomain: ".co",
};

function CountryDetail() {
  const navigate = useNavigate();

  const {
    borders,
    capital,
    currencies,
    flag,
    languages,
    name,
    nativeName,
    population,
    region,
    subregion,
    topLevelDomain,
  } = MOCK_COUNTRY_DATA;
  const details = [
    {
      label: "Native Name",
      value: nativeName,
    },
    {
      label: "Population",
      value: population.toLocaleString(), // TODO: move to data transform
    },
    {
      label: "Region",
      value: region,
    },
    {
      label: "Sub Region",
      value: subregion,
    },
    {
      label: "Capital",
      value: capital,
    },
    {
      label: "Top Level Domain",
      value: topLevelDomain,
    },
    {
      label: "Currencies",
      value: currencies,
    },
    {
      label: "Languages",
      value: languages,
    },
  ];

  const goBack = () => navigate("/");

  return (
    <div className={styles.root}>
      <div className={styles.navigateBack}>
        <Button
          onClick={goBack}
          variant="outlined"
          startIcon={<ArrowBackIosNew />}
        >
          Back
        </Button>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.flag}>
          <img
            src={flag}
            alt={`Country flag of ${name}`}
            className={styles.flagImage}
            loading="lazy"
          />
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>{name}</h2>
          <ul className={styles.details}>
            {details.map(({ label, value }) => (
              <li key={label}>
                <b>{label}</b>
                {value}
              </li>
            ))}
          </ul>

          <div className={styles.borders}>
            <b>Border Countries:</b>
            {borders.length > 0 ? (
              <ul className={styles.borderList}>
                {borders.map((border) => (
                  <Link to={`/country/${border}`} key={border}>
                    <li className={styles.borderListItem}>{border}</li>
                  </Link>
                ))}
              </ul>
            ) : (
              "None"
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryDetail;
