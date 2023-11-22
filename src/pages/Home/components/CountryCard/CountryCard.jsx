import styles from "./CountryCard.module.scss";
import { Link } from "react-router-dom";
import { string } from "prop-types";

function CountryCard({ alpha3Code, capital, flag, name, population, region }) {
  const details = [
    {
      label: "Population",
      value: population,
    },
    {
      label: "Region",
      value: region,
    },
    {
      label: "Capital",
      value: capital,
    },
  ];
  return (
    <Link to={`/country/${alpha3Code}`} className={styles.root}>
      <img
        src={flag}
        alt={`country flag of ${name}`}
        loading="lazy"
        width={265}
      />
      <div className={styles.content}>
        <h3 className={styles.title}>{name}</h3>
        <ul className={styles.details}>
          {details.map(({ label, value }) => (
            <li key={label}>
              <b>{label}</b>
              {value}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
}

CountryCard.propTypes = {
  alpha3Code: string.isRequired,
  capital: string.isRequired,
  flag: string.isRequired,
  name: string.isRequired,
  population: string.isRequired,
  region: string.isRequired,
};

export default CountryCard;
