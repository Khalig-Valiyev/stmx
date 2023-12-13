
const DaySignal = () => {
  const date = new Date()
  const day = date.toLocaleString('az-AZ', { weekday: 'long' })
  const time = date.getHours()
  const someData = time >= 18 && time <= 24

  let newMessage;

  switch(day){
    case "Mon":
        newMessage = 'Bazar Ertəniz uğurlu olsun.'
        break;
    case "Tue":
        newMessage = 'Çərşənbə axşamınız uğurlu olsun.'
        break;
    default:
        newMessage = 'Salam'
        break;
  }

  return (
    <div>
        <h2>{someData && 'Axşamınız xeyir.'}</h2>
        <h1>{newMessage}</h1>
    </div>
  )
}

export default DaySignal