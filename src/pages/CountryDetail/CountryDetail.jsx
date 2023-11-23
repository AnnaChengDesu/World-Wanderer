import { Link, useParams } from "react-router-dom";
import styles from "./CountryDetail.module.scss";
import { Button } from "@mui/material";
import { ArrowBackIosNew } from "@mui/icons-material";
import { useGetCountryByAlpha3CodeQuery } from "reduxModules/country/countryApi";
import Skeleton from "../components/Skeleton";

function CountryDetail() {
  const params = useParams();

  const { data, isLoading } = useGetCountryByAlpha3CodeQuery(params.code);

  const renderDetail = () => {
    if (isLoading) return <Skeleton.CountryDetail />;

    if (!data)
      return <p>Couldn't find a country by alpha-3 code: "{params.code}".</p>;

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
    } = data;

    const details = {
      left: [
        {
          label: "Native Name",
          value: nativeName,
        },
        {
          label: "Population",
          value: population,
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
      ],
      right: [
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
      ],
    };

    return (
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
            {Object.entries(details).map(([position, list]) => (
              <li className={styles.group} key={position}>
                <ul>
                  {list.map(({ label, value }) => (
                    <li key={label}>
                      <b>{label}</b>
                      {value}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>

          <div className={styles.borders}>
            <b>Border Countries:</b>
            {borders.length === 0 ? (
              "None"
            ) : (
              <ul className={styles.borderList}>
                {borders.map((border) => (
                  <Link to={`/country/${border.alpha3Code}`} key={border}>
                    <li className={styles.borderListItem}>{border.name}</li>
                  </Link>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.root}>
      <div className={styles.navigateBack}>
        <Button
          color="neutral"
          to="/"
          component={Link}
          startIcon={<ArrowBackIosNew />}
        >
          Back
        </Button>
        {renderDetail()}
      </div>
    </div>
  );
}

export default CountryDetail;
