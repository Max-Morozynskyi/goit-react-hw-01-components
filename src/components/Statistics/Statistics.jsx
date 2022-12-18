import PropTypes from "prop-types";
import { StatisticsWrap, Title, StatList } from "./Statistics.styled";
import { getRandomHexColor } from './RandomColor';

// [
//   { "id": "id-1", "label": ".docx", "percentage": 22 },
//   { "id": "id-2", "label": ".pdf", "percentage": 4 },
//   { "id": "id-3", "label": ".mp3", "percentage": 17 },
//   { "id": "id-4", "label": ".psd", "percentage": 47 },
//   { "id": "id-5", "label": ".pdf", "percentage": 10 }
// ]

export function Statistics({ title, stats }) {
  const statMarkup = stats.map(a => {
    return (<li key={a.id} style={{ backgroundColor: getRandomHexColor()}}>
      <span className="label">{a.label}</span>
      <span className="percentage">{a.percentage + "%"}</span>
    </li>)
  })
  return (
    <StatisticsWrap>
      {title && <Title>{title}</Title>}
      <StatList>
        {statMarkup}
      </StatList>
    </StatisticsWrap>
  )
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    },
  )),
}