//import RefreshIcon from '../../../assets/images/refresh.svg'
import {Card, Typography, Button, Select, MenuItem} from '../../../components'
import COUNTRIES from '../../../commons/constants/countries'
import {CardPanelContentStyled, Itemstyled} from './style'

const navigatorHasShare = navigator.share

function Panel({updateAt, onChange, country, data, getCovidData}) {
  const {recovered} = data
  
  const renderCountries = (country, index) => (
    <MenuItem key={`country.${index}`} value={country.value}>
        <Itemstyled>
          <div>{country.label}</div>
          <img src={country.flag} alt={`Pais-${country.label}`}/>
        </Itemstyled>
    </MenuItem>
  )

  const textCovid19 = `País: ${country} - recuperados: ${recovered}`
  
  const copyInfo = () => {
    navigator.clipboard.writeText(textCovid19);
  }

  const shareInfo = () => {
    navigator.share({
      title: `Dados do COVID19 - ${country}`,
      text: textCovid19,
      url: 'https://covid19dk.netlify.app/'
    })
  }

  const renderShareButton = (
    <div>
      <Button variant="contained" color="primary" onClick={shareInfo}>
        Compartilhar
      </Button>
    </div>
  )

  const renderCopyButton = (
    <div>
      <Button variant="container" color="primary" onClick={copyInfo}>
        Copiar
      </Button>
    </div>
  )

  return (
    <Card>
      <CardPanelContentStyled>
        <div>
          <Typography variant="h5" component="span" color="primary">COVID-19</Typography>
          <Typography variant="h6" component="span" color="primary">Painel Corona Vírus</Typography>
          <Typography variant="body2" component="span" color="primary">Atualizado em: {updateAt}</Typography>
          <div className="pt-2">
            <Select onChange={onChange} value={country}>
              {COUNTRIES.map(renderCountries)}
            </Select>
          </div>
        </div>
        {navigatorHasShare ? renderShareButton : renderCopyButton}
      </CardPanelContentStyled>
    </Card>
  )
}

export default Panel;