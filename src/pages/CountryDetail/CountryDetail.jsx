import { useNavigate, useParams } from "react-router-dom";
import styles from "./CountryDetail.module.scss";
import { Button } from "@mui/material";
import { ArrowBackIosNew } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useGetCountryByAlpha3CodeQuery } from "reduxModules/country/countryApi";
import Skeleton from "../Home/components/Skeleton";

function CountryDetail() {
  const navigate = useNavigate();
  const params = useParams();

  const { data, isLoading } = useGetCountryByAlpha3CodeQuery(params.code);

  const goBack = () => navigate("/");

  const renderDetail = () => {
    if (isLoading) return <Skeleton.CountryDetail />;
    console.log(data);
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

    const details = [
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
                  <Link to={`/country/${border.alpha3Code}`} key={border}>
                    <li className={styles.borderListItem}>{border.name}</li>
                  </Link>
                ))}
              </ul>
            ) : (
              "None"
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
          onClick={goBack}
          variant="outlined"
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
